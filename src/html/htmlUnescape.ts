import { escapeChars } from './html.types';

export function htmlUnescape(text: string): string {
	return text.replace(/\&([^;]+);/g, function(entity, entityCode){
		var match;

		if (entityCode in escapeChars) {
			return escapeChars[entityCode];
		} else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
			return String.fromCharCode(parseInt(match[1], 16));
		} else if (match = entityCode.match(/^#(\d+)$/)) {
			return String.fromCharCode(~~match[1]);
		} else {
			return entity;
		}
	});
}
