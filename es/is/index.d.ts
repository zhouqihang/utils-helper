/**
 * Check the value is typeof string or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export declare const isString: (value: any) => boolean;
/**
 * Check the value is typeof number or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export declare const isNumber: (value: any) => boolean;
/**
 * Check the value is typeof bool or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export declare const isBoolean: (value: any) => boolean;
/**
 * Check the value is typeof array or not
 * @param value Any value you want check
 * @returns A boolean value
 */
export declare const isArray: (value: any) => boolean;
/**
 * Check the value is an ArrayList
 * @param value Any value you want check
 * @returns A boolean value
 */
export declare const isArrayLike: (value: any) => boolean;
declare const IsUtil: {
    isString: (value: any) => boolean;
    isNumber: (value: any) => boolean;
    isBoolean: (value: any) => boolean;
    isArray: (value: any) => boolean;
    isArrayLike: (value: any) => boolean;
};
export default IsUtil;
