class MyPlugin {     // 插件名称
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {  // apply方法
		console.log("This is My Plugin!");
		compiler.hooks.done.tap("My Plugin", stats => {   // 监听hooks
			console.log("My author is " + this.options.name) // 处理逻辑
		})
	}
}

module.exports = MyPlugin;
