/**
 * Copy a given string to user's clipboard
 *
 * @example
 * ```ts
 * import { copyToClipboard } from 'amaze/clipboard';
 *
 * copyToClipboard('Some text!');
 * ```
 *
 * @param {String} text
 */

export function copyToClipboard(text: string) {
	const _window: any = window;
	if (_window['clipboardData'] && _window['clipboardData'].setData) {
		// IE specific code path to prevent textarea being shown while dialog is visible.
		return _window['clipboardData'].setData('Text', text);
	} else if (
		document.queryCommandSupported &&
		document.queryCommandSupported('copy')
	) {
		let textarea = document.createElement('textarea');
		textarea.textContent = text;
		textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
		document.body.appendChild(textarea);
		textarea.select();

		try {
			return document.execCommand('copy'); // Security exception may be thrown by some browsers.
		} catch (ex) {
			console.warn('Copy to clipboard failed.', ex);
			return false;
		} finally {
			document.body.removeChild(textarea);
		}
	}
}
