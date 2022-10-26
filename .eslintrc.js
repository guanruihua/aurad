module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	// files: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.tsx'],
	// parserOptions: {
	// 	project: ['../tsconfig.json'],
	// 	ecmaVersion: 2022,
	// 	sourceType: 'module',
	// 	ecmaFeatures: {
	// 		experimentalObjectRestSpread: true,
	// 		jsx: true
	// 	}
	// },
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-prototype-builtins': 'off',
		// '@typescript-eslint/no-unused-vars':'off',
		// '@typescript-eslint/no-inferrable-types': 'off',
		'no-empty-pattern': 'off',
		'prefer-const': 'off',
		'prefer-rest-params': 'off',
		// '@typescript-eslint/no- inferable -types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		"@typescript-eslint/no-non-null-assertion": 'off'
	}, // 自定
}