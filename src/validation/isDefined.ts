/**
 * Returns false if the object is `null` of `undefined`
 * @param {any} obj
 * @return {Boolean}
 */

export function isDefined(obj: any): boolean {
	return obj !== null && obj !== undefined;
}
