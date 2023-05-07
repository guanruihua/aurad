const { input, execSync } = require('../../hook')
const { getGitBranch, getPackage } = require('./util')
const handleNewBranch = require('./handleNewBranch')
const handleCommit = require('./handleCommit')

async function handlePush(tag) {

	try {
		let tmp_b_t = getGitBranch().trimEnd()
		const { version } = getPackage()
		if (tag) {
			const { newTag } = await input([{
				type: 'input',
				name: 'newTag',
				message: 'Add to a new Tag',
				default: `v${version}`
			}])
			tmp_b_t += (' ' + newTag)
			execSync(`git tag ${newTag}`)
		}
		execSync(`git push -u origin ${tmp_b_t}`)
	} catch (error) {
		console.log('Error: Cannot Push modification to Repositories')
		console.error(error)
	}
}

module.exports = async function (action) {
	const { commit = false, push = false, branch = false, tag = false } = action || {}

	if (branch) await handleNewBranch()
	if (commit) await handleCommit()
	if (push) await handlePush(tag)
}