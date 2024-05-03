export function slugify(text: string, replaceChar = '-'): string {
	let slug = text;
	slug = slug.trim();
	slug = slug.toLowerCase();

	const from = 'àáäâãèéëêìíïîòóöôõùúüûñç·/_,:;';
	const to = 'aaaaaeeeeiiiiooooouuuunc------';
	for (let i = 0, l = from.length; i < l; i++) {
		slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	slug = slug.replace(/[^a-z0-9 -.]/g, '') // remove invalid chars
		.replace(/\s+/g, replaceChar)        // collapse whitespace and replace by -
		.replace(/-+/g, replaceChar);        // collapse dashes

	return slug;
}
