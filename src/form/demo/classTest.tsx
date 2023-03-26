import React from 'react'
import { Form, useClassForm } from '..'
import { FormRecord } from '../type'
import { initChildren } from './initChildren'
import { Container, Unit } from 'unit-testing-react'

export default class TestFormClass extends React.Component {

	form = useClassForm()

	render(): React.ReactNode {
		return <Container columns={1}>
			<Unit>
				<Form
					form={this.form}
					onSubmit={(values: FormRecord) => {
						console.log(values)
					}}>
					{initChildren(this.form)}
				</Form>
			</Unit>
		</Container>
	}
}