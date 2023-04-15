const fs = require('fs')
const path = require('path')

module.exports = function switchTSConfig(env = 'dev') {
	fs.copyFileSync(
		path.resolve(__dirname, `./${env}.json`), './tsconfig.json', 0)
}