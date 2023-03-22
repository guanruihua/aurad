import React from "react"
import { Form, useForm } from '..'
import { FormRecord } from "../type"
import { initChildren } from './initChildren'

export default function TestFormFunc() {
	const form = useForm()
	const [result, setResult] = React.useState<string>('')

	console.log('fc')
	return <div style={{ margin: 10 }}>
		<Form
			form={form}
			onSubmit={(values: FormRecord) => {
				console.log(values)
				setResult(JSON.stringify(values, null, 4))
			}}>
			{initChildren(form)}
		</Form>
		<div>{result}</div>
	</div>
}
