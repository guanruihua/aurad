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
			<FormItem name="array" label={'MyName1'}>
				<Input
					type='text'
					defaultValue="1"
					onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>

			<FormItem name="array" label={'MyName1'}>
				<Input
					defaultValue='2'
					type='text' onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>

			<FormItem name="myName1" label={'MyName1'}>
				<Input type='text'
					defaultValue="3"
					onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>
			<FormItem name="myName2" label={'MyName2'}>
				<Input defaultValue='4' type='text' />
			</FormItem>
			<FormItem name="myName3" label={'MyName3'}>
				<Input type='text' defaultValue='5' />
			</FormItem>
			<button type="submit">Submit</button>
		</Form>

	</div>
}
