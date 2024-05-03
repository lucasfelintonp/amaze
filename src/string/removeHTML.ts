export const HTML_PATTERN = /(<([^>]+)>)/ig;

export function removeHTML(html: string) {
	if (html === null || html === '') return false;
	else html = html.toString();

	// Regular expression to identify HTML tags in
	// the input string. Replacing the identified
	// HTML tag with a null string.
	return html.replace(HTML_PATTERN, '');
}
