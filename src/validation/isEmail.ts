/**
 * RegExp pattern to validate email
 */
export const EMAIL_PATTERN =
	/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Check if a given value is a valid email
 * @param {String} value
 * @return {Boolean}
 */

export function isEmail(value: string): boolean {
	return this.isPattern(value, EMAIL_PATTERN);
}
