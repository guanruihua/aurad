/* eslint-disable*/
import React from "react"
import { Form } from '..'
import { Input } from '../../input/index'

const FormItem = Form.Item

export default function FormTestPage() {
	return <div style={{ margin: 10 }}>
		<Form onSubmit={(values) => {
			console.log(values)
		}}>
			<FormItem name="myName1" label={'MyName1'}>
				<Input type='text' onChange={(e:any) => {
					console.log(e.target.value)
				}} />
			</FormItem>
			<FormItem name="myName2" label={'MyName2'}>
				<Input type='text' />
			</FormItem>
			<FormItem name="myName3" label={'MyName3'}>
				<Input type='text' />
			</FormItem>
			<button type="submit">Submit</button>
		</Form>
	</div>
}
