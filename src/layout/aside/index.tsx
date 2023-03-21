import React from "react"

export interface SideProps {
	[key: string]: any
}

export function Side(props: SideProps){
	const {} = props
	return <div>
		Side
		{JSON.stringify(Object.keys(props))}
	</div>
}
