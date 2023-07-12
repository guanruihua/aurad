import React, { useState } from "react";
import './variable.css'

export interface ThemeProps {
	[key: string]: any
}

export function Theme(props: ThemeProps){
	const {} = props
	return <div>
		Theme
		{JSON.stringify(Object.keys(props))}
	</div>
}

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

