const del = require('del');
const path = require('path');
del([
    path.resolve(__dirname, './lib'),
    path.resolve(__dirname, './es'),
]);
