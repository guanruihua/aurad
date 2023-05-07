const { Select } = require('enquirer')


// 	const color = await select({
// 		name: 'color',
// 		message: 'Pick a flavor',
// 		choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
// 	})
// 	console.log(name, color);

module.exports = function select(options = {}) {
	return new Select(options).run()
}