module.exports.input = require('./input')
module.exports.select = require('./select')

module.exports.execSync = function (command, config = {}) {
	const { logCommand = true, logResult = true } = config
	logCommand && console.log("Command: ", command);
	const result = require('child_process').execSync(command).toString()
	logResult && result && console.log(result)
	return result
}
