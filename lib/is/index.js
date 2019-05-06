(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.IsUtil = {}));
}(this, function (exports) { 'use strict';

    /**
     * Check the value is typeof string or not
     * @param value Any value you want check
     * @returns A boolean value
     */
    var isString = function (value) { return typeof value === 'string'; };
    /**
     * Check the value is typeof number or not
     * @param value Any value you want check
     * @returns A boolean value
     */
    var isNumber = function (value) { return typeof value === 'number'; };
    /**
     * Check the value is typeof bool or not
     * @param value Any value you want check
     * @returns A boolean value
     */
    var isBoolean = function (value) { return typeof value === 'boolean'; };
    /**
     * Check the value is typeof array or not
     * @param value Any value you want check
     * @returns A boolean value
     */
    var isArray = function (value) {
        if (Array.isArray) {
            return Array.isArray(value);
        }
        return Object.prototype.toString.call(value) === '[object Array]';
    };
    /**
     * Check the value is an ArrayList
     * @param value Any value you want check
     * @returns A boolean value
     */
    var isArrayLike = function (value) {
        if (value && // value is not null, undefined, etc.
            typeof value === 'object' && // value is an object
            isFinite(value.length) && // value.length is a finite number
            value.length >= 0 && // value.length is non-negative
            value.length === Math.floor(value.length) && // value.length is an integer
            value.length < 4294967296 // value.length < 2^32
        ) {
            return true;
        }
        return false;
    };
    var IsUtil = {
        isString: isString,
        isNumber: isNumber,
        isBoolean: isBoolean,
        isArray: isArray,
        isArrayLike: isArrayLike,
    };

    exports.default = IsUtil;
    exports.isArray = isArray;
    exports.isArrayLike = isArrayLike;
    exports.isBoolean = isBoolean;
    exports.isNumber = isNumber;
    exports.isString = isString;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
