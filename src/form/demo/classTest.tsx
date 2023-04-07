import React from 'react'
import { Form, injectForm } from '..'
import { FormRecord } from '../type'
import { initChildren } from './initChildren'
import { Container, Unit } from 'unit-testing-react'
@injectForm
export default class TestFormClass extends React.Component {

	render(): React.ReactNode {
		const { props }: any = this
		const { form } = props
		return <Container columns={1}>
			<Unit>
				<Form
					form={form}
					onSubmit={(values: FormRecord) => {
						console.log(values)
					}}>
					{initChildren(form)}
				</Form>
			</Unit>
		</Container>
	}
}