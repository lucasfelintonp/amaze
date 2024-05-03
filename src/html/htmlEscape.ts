import { reversedEscapeChars } from './html.types';

export function htmlEscape(text: string): string {
	return text.replace(/[&<>"']/g, function(m) {
		return '&' + reversedEscapeChars[m] + ';';
	});
}
