import React, { useState } from "react";

const ThemeContext = React.createContext<any>({})

function Button(props: any) {
	return <div>
		{JSON.stringify(props)}<br />
		<button onClick={() => {
			props?.theme?.handleTheme()
		}}>BTN</button>
	</div>
}

function Toolbar() {
	return (
		<div>
			<ThemedButton />
		</div>
	);
}

function ThemedButton() {
	return <ThemeContext.Consumer>
		{(value: any) => {
			console.log(value)
			return <Button theme={value} />
		}}
	</ThemeContext.Consumer>
}

// async function as() {
// 	function* asyncGen(n: any) {
// 		for (let i = 0; i < n; i++)
// 			yield i * 2;
// 	}
// 	// arr 将变为 [0, 2, 4, 6]`
// 	const arr: any[] = [];
// 	for await (const v of asyncGen(4)) {
// 		console.log(v)
// 		arr.push(v);
// 	}
// 	console.log(arr)
// 	// const arr = await Array.fromAsync(asyncGen(4));
// }
// as();

export function Demo1() {

	const [theme, setTheme] = useState<string>("dark")

	return <div>
		Demo1
		<ThemeContext.Provider value={{
			theme,
			handleTheme: () => {
				setTheme('light')
			}
		}}>
			<Toolbar />
		</ThemeContext.Provider>
	</div>
}

