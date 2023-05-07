const { execSync } = require('child_process')
const { MultiSelect, Input } = require('enquirer')
const pkg = require('../../package.json')
const version = pkg.version || '0.0.1'

// console.log(execSync, version, Select)

async function run() {
	const prompt = await new MultiSelect({
		name: 'Command',
		message: 'Select Commands',
		choices: [
			{ name: 'New Branch', value: 'branch' },
			{ name: 'Add Tag', value: 'tag' },
			{ name: 'Not Commit', value: 'notCommit' },
			{ name: 'Not Add', value: 'notAdd' },
			{ name: 'Not Push', value: 'notPush' },
		],
	})
	// prompt.clear()
	const res = await prompt.run()
	const commitMsg = await new Input({
		message: 'Input Command Message'
	}).run();

	console.log(res, commitMsg);
}

run().catch(console.error)