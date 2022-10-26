import React from "react"

export interface MessageProps {
	[key: string]: any
}

export function Message(props: MessageProps){
	const {} = props
	return <div>
		Message
		{JSON.stringify(Object.keys(props))}
	</div>
}
