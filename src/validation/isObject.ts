/**
 * Uses the `Object` function to check if the given argument is an object.
 * @param {any} obj
 * @return {Boolean}
 */

export function isObject(obj: any): boolean {
	return obj === Object(obj);
}
