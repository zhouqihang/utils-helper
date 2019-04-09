(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Check the value is typeof string or not
     * @param value Any value you want check
     * @returns A boolean value
     */
    exports.isString = function (value) { return typeof value === 'string'; };
    /**
     * Check the value is typeof number or not
     * @param value Any value you want check
     * @returns A boolean value
     */
    exports.isNumber = function (value) { return typeof value === 'number'; };
});
// TODO
// isPromise
// isArray
//# sourceMappingURL=index.js.map