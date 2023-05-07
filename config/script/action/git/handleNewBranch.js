const { input, execSync } = require('../../hook')
const { getPackage } = require('./util')

module.exports = async function () {

	try {
		const { version } = getPackage()
		const { newBranch } = await input([{
			type: 'input',
			name: 'newBranch',
			message: 'Switched to a new branch',
			default: version
		}])

		const tmp_newBranch = newBranch
		execSync(`git checkout -b ${tmp_newBranch}`)
	} catch (error) {
		console.log('Error: Cannot switch to new branch')
	}
}