import React from "react"

interface TextEditProps {
	[key: string]: any
}

export function TextEdit(props: TextEditProps){
	return <div>
		TextEdit
		{JSON.stringify(Object.keys(props))}
	</div>
}
