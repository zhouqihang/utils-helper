/**
 * Check the value is typeof string or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export const isString: (value: any) => boolean = (value) => typeof value === 'string';

/**
 * Check the value is typeof number or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export const isNumber: (value: any) => boolean = (value) => typeof value === 'number';

/**
 * Check the value is typeof bool or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export const isBoolean: (value: any) => boolean = (value) => typeof value === 'boolean';

/**
 * Check the value is typeof array or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export const isArray: (value: any) => boolean = (value) => {
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
export const isArrayLike: (value: any) => boolean = (value) => {
    if (
        value &&                                    // value is not null, undefined, etc.
        typeof value === 'object' &&                // value is an object
        isFinite(value.length) &&                   // value.length is a finite number
        value.length >= 0 &&                        // value.length is non-negative
        value.length===Math.floor(value.length) &&  // value.length is an integer
        value.length < 4294967296                   // value.length < 2^32
    ) {
        return true;
    }
    return false;
};

const IsUtil = {
    isString,
    isNumber,
    isBoolean,
    isArray,
    isArrayLike,
};

export default IsUtil;
