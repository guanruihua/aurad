import React from 'react'
import { Form, useClassForm } from '..'
import { FormRecord } from '../type'
import { initChildren } from './initChildren'

export default class TestFormClass extends React.Component {

	form = useClassForm()

	render(): React.ReactNode {
		console.log('class')
		return <div style={{ margin: 10 }}>
			<Form
				form={this.form}
				onSubmit={(values: FormRecord) => {
					console.log(values)
				}}>
				{initChildren(this.form)}
			</Form>
		</div>
	}
}