/**
 * Copy a given string to user's clipboard
 * @param {String} str
 */

const TYPE_TEXT_PLAIN = 'text/plain';

export async function copyToClipboard(str: string) {
	const blob = new Blob([str], { type: TYPE_TEXT_PLAIN });
	const data = [new ClipboardItem({ [TYPE_TEXT_PLAIN]: blob })];
	await navigator.clipboard.write(data);
}
