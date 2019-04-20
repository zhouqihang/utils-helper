const typescript = require('rollup-plugin-typescript');
const replace = require('rollup-plugin-replace');
const sourceMaps = require('rollup-plugin-sourcemaps');
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, './src');
const libDir = path.resolve(__dirname, './lib');

/**
 * 生成rollup配置
 * @param input {string}
 * @param file {string}
 * @param name {string}
 * @returns {{input: *, plugins: *[], output: *[]}}
 */
function getConfigByPath(input, file, name) {
    return {
        input,
        plugins: [
            replace({
                __VERSION__: ''
            }),
            typescript({
                exclude: 'node_modules/**',
                typescript: require('typescript'),

            }),
            sourceMaps()
        ],
        output: [{
            format: 'umd',
            // 生成的文件名和路径
            // package.json的main字段, 也就是模块的入口文件
            file,
            name,
            banner: '',
            sourcemap: true
        }]
    }
}

// 获取所有入口，并生成配置
const configs = fs.readdirSync(srcDir)
    .filter(path => !path.includes('.'))
    .map(dirPath => getConfigByPath(
        path.resolve(srcDir, dirPath, 'index.ts'),
        path.resolve(libDir, dirPath, 'index.js'),
        dirPath.replace(/^([a-z])/, word => word.toUpperCase()) + 'Util',
    ));

configs.push(getConfigByPath(
    path.resolve(srcDir, 'index.ts'),
    path.resolve(libDir, 'index.js'),
    'UtilsHelper',
));

module.exports = configs;