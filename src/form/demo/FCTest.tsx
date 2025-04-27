import React from "react"
import { Form, useForm } from '..'
import { initChildren } from './initChildren'
import { Docs } from '@/layout'

export default function TestFormFunc() {
	const form = useForm()
	const [result, setResult] = React.useState<string>('')

	return <Docs>
			<Form
				form={form}
				onSubmit={() => {
					// console.log(values)
					// setResult(JSON.stringify(values, null, 4))
				}}>
				{initChildren(form)}
			</Form>
			<div>{result}</div>
	</Docs>
}
