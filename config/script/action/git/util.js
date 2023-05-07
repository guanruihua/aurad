const path = require('path')
const { execSync } = require('../../hook')
const pkg = require('../../../package.json')

module.exports.getGitHash = function () {
	return execSync('git rev-parse --short HEAD', { logCommand: false, logResult: false }).toString()
}

module.exports.getGitBranch = function () {
	return execSync('git rev-parse --abbrev-ref HEAD', { logCommand: false, logResult: false }).toString()
}

module.exports.getPackage = function () {
	try {
		const res = require(path.resolve(process.cwd(), 'package.json'))
		res.version = pkg.version
		return res
	} catch (error) {
		return pkg
	}
}