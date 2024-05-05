/**
 * Check if a given string matchs with a pattern.
 * @param {String} value
 * @param {RegExp} pattern
 * @return {Boolean}
 */

export function isPattern(value: string, pattern: RegExp): boolean {
	return pattern.test(value);
}
