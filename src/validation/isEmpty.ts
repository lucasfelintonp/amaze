import { isArray } from './isArray';
import { isDate } from './isDate';
import { isDefined } from './isDefined';
import { isFunction } from './isFunction';
import { isObject } from './isObject';
import { isString } from './isString';

/**
 * RegExp pattern to empty string pattern
 */
const EMPTY_STRING_PATTERN = /^\s*$/;

/**
 * Check if a given string matchs with a pattern.
 * @param {String} value
 * @return {Boolean}
 */

export function isEmpty(value: any): boolean {
	var attr: any;

	// Null and undefined are empty
	if (!isDefined(value)) {
		return true;
	}

	// functions are non empty
	if (isFunction(value)) {
		return false;
	}

	// Whitespace only strings are empty
	if (isString(value)) {
		return EMPTY_STRING_PATTERN.test(value);
	}

	// For arrays we use the length property
	if (isArray(value)) {
		return value.length === 0;
	}

	// Dates have no attributes but aren't empty
	if (isDate(value)) {
		return false;
	}

	// If we find at least one property we consider it non empty
	if (isObject(value)) {
		for (attr in value) {
			return false;
		}
		return true;
	}

	return false;
}
