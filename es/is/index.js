/**
 * Check the value is typeof string or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export var isString = function (value) { return typeof value === 'string'; };
/**
 * Check the value is typeof number or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export var isNumber = function (value) { return typeof value === 'number'; };
var IsUtil = {
    isString: isString,
    isNumber: isNumber,
};
export default IsUtil;
// TODO
// isPromise
// isArray
//# sourceMappingURL=index.js.map