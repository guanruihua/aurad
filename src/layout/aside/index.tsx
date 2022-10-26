import React from "react"

export interface ASideProps {
	[key: string]: any
}

export function ASide(props: ASideProps){
	const {} = props
	return <div>
		ASide
		{JSON.stringify(Object.keys(props))}
	</div>
}
