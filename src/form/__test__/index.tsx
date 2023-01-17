/* eslint-disable*/
import React, { useRef } from "react"
import { Form, useForm } from '..'
import { Input, Button } from '../..'
import { getFormValues2 } from '../util'

const FormItem = Form.Item

export default function FormTestPage() {
	// const form = useForm()
	let form: any = useRef()
	const [result, setResult] = React.useState<string>('')

	return <div style={{ margin: 10 }}>
		<Form
			// ref={(ref: any) => form = ref}
			form={form}
			// ref={form}
			onSubmit={(values) => {
				console.log(values)
				setResult(JSON.stringify(values, null, 4))
			}}>
			<FormItem name="array" label={'MyName1(array)'}>
				<Input
					type='text'
					defaultValue="1"
					onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>

			<FormItem name="array" label={'MyName1(array)'}>
				<Input
					defaultValue='2'
					type='text' onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>

			<FormItem name="myName1" label={'MyName1(myName1)'}>
				<Input type='text'
					defaultValue="3"
					onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>
			<FormItem name="myName2" label={'MyName2(myName2)'}>
				<Input defaultValue='4' type='text' />
			</FormItem>
			<FormItem name="myName3" label={'MyName3(myName3)'}>
				<Input type='text' defaultValue='5' />
			</FormItem>
			<Button htmlType="submit" onClick={(e) => {
				e.preventDefault()
			}}>Submit</Button>
			<Button htmlType="reset">Reset</Button>
			<Button onClick={(e) => {
				const els = form.current.elements
				console.log(els)
				if (els)
					for (let item of els) {
						const { type, name } = item as any
						if(name === 'myName1'){
							item.value = '123'
						}
						// console.log(name, type)
						// if (type !== 'submit') continue;
						// console.log(type, Object.keys(item), (item as any).onclick())

					}
			}}>
				set myName1
			</Button>
			<Button onClick={(e) => {
				e.preventDefault()
				// console.log(e)
				// form.current.preventDefault()
				// console.log(Object.keys(form.current || {}))
				// form.current?.submit()
				// form.current?.submit()
				// console.log({ form }, form.current?.elements)
				// console.log(form.current, form.current?.elements)
				console.log(getFormValues2(form.current))
				// if (form.current?.elements)
				// 	for (let item of form.current.elements) {
				// 		const { type } = item as any
				// 		if (type !== 'submit') continue;
				// 		// console.log(type, Object.keys(item), (item as any).onclick())

				// 	}
			}}>btn submit</Button>
		</Form>
		<div>{result}</div>
	</div>
}
