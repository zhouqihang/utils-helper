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
    var IsUtil = {
        isString: isString,
        isNumber: isNumber,
    };
    // TODO
    // isPromise
    // isArray

    exports.default = IsUtil;
    exports.isNumber = isNumber;
    exports.isString = isString;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
