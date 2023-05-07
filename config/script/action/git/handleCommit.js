const { input, execSync } = require('../../hook')
const timeString = new Date().toDateString()

module.exports = async function handleCommit() {

	try {
		const { commitMessage } = await input([{
			type: 'input',
			name: 'commitMessage',
			message: 'Add Commit Message',
			default: ("feat: " + timeString)
		}])
		execSync('git add .')
		const myCommand = `git commit -m  "${commitMessage}"`
		execSync(myCommand)

	} catch (error) {
		console.log('Commit Message Error')
	}
}