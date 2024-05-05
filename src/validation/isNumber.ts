/**
 * Checks if the value is a number. This function does not consider NaN a
 * number like many other `isNumber` functions do.
 * @param value
 * @return {Boolean}
 */

export function isNumber(value: any): boolean {
	return typeof value === 'number' && !isNaN(value);
}
