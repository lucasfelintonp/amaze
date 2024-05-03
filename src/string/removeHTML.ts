import { isEmpty } from '../validation/isEmpty';

export const HTML_PATTERN = /(<([^>]+)>)/ig;

export function removeHTML(html: string): string {
	if (isEmpty(html)) {
		return '';
	}

	// Regular expression to identify HTML tags in
	// the input string. Replacing the identified
	// HTML tag with a null string.
	return html.replace(HTML_PATTERN, '');
}
