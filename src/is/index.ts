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

// TODO
// isPromise
// isArray
