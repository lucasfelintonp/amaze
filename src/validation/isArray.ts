/**
 * Check if a given value is a Array
 * @param value
 * @return {Boolean}
 */

export function isArray(value: any): boolean {
	return {}.toString.call(value) === '[object Array]';
}
