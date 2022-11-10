import React from "react"

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
