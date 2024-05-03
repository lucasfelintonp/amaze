// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'crlf',
	printWidth: 80,
	semi: true,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
};

export default config;
