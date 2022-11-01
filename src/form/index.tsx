import React from "react"

export interface FormProps {
	[key: string]: any
}

export function Form(props: FormProps){
	const {} = props
	return <div>
		Form
		{JSON.stringify(Object.keys(props))}
	</div>
}
