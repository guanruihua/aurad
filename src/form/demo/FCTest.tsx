import React from "react"
import { Form, useForm } from '..'
import { FormRecord } from "../type"
import { initChildren } from './initChildren'
import { Container, Unit } from "unit-testing-react"

export default function TestFormFunc() {
	const form = useForm()
	const [result, setResult] = React.useState<string>('')

	return <Container columns={1}>
		<Unit>
			<Form
				form={form}
				onSubmit={(values: FormRecord) => {
					console.log(values)
					setResult(JSON.stringify(values, null, 4))
				}}>
				{initChildren(form)}
			</Form>
			<div>{result}</div>
		</Unit>
	</Container>
}
