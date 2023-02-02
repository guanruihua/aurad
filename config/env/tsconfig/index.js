const fs = require('fs')
const path = require('path')

module.exports = function switchTSConfig(env = 'dev') {
	fs.copyFileSync(
		path.resolve(__dirname, `./${env}.json`),
		// path.resolve(__dirname, './tsconfig.json'),
		'./tsconfig.json', 0)
}