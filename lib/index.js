(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.UtilsHelper = {}));
}(this, function (exports) { 'use strict';

    var DateUtil = /** @class */ (function () {
        /**
         * constructor
         * @param p Date string or timestamp or Date object
         */
        function DateUtil(p) {
            this.date = null;
            this.formatString = 'yyyy-MM-dd HH:mm:ss';
            this.setDate(p);
        }
        /**
         * Format date to string
         * @param date Date you want format
         * @param format Format rule
         * @returns String
         */
        DateUtil.format = function (date, format) {
            if (format === void 0) { format = ''; }
            var _date = null;
            if (date instanceof Date) {
                _date = date;
            }
            else {
                _date = new Date(date);
            }
            var formatObj = {
                'M+': _date.getMonth() + 1,
                'd+': _date.getDate(),
                'H+': _date.getHours(),
                'm+': _date.getMinutes(),
                's+': _date.getSeconds(),
                'q+': Math.floor((_date.getMonth() + 3) / 3),
                'S': _date.getMilliseconds()
            };
            // replace year
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, ("" + _date.getFullYear()).substr(4 - RegExp.$1.length));
            }
            // replace month day hour minute second
            Object.keys(formatObj)
                .forEach(function (k) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length === 1
                        ? formatObj[k]
                        : ("00" + formatObj[k]).substr(("" + formatObj[k]).length));
                }
            });
            return format;
        };
        /**
         * Get current date object
         * @returns Date object
         */
        DateUtil.prototype.getDate = function () {
            return this.date;
        };
        /**
         * Set date object
         * @param date Date string or timestamp or Date object
         */
        DateUtil.prototype.setDate = function (date) {
            if (date instanceof Date) {
                this.date = date;
            }
            else {
                this.date = new Date(date);
            }
            return this;
        };
        /**
         * Format date to string
         * @param string Format rule, if null, it will be yyyy-MM-dd HH:mm:ss
         * @returns String
         */
        DateUtil.prototype.format = function (string) {
            if (string === void 0) { string = null; }
            if (string === null) {
                return DateUtil.format(this.date, this.formatString);
            }
            return DateUtil.format(this.date, string);
        };
        return DateUtil;
    }());

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

    exports.DateUtil = DateUtil;
    exports.IsUtil = IsUtil;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
