/* eslint-disable*/
import React from "react"
import { Input } from '../..'
import { Button } from "../../button"
import { Form, FormItem, useForm } from "@/form"
import { Space } from "@/layout"

export default function () {
	const form = useForm()

	return (
		<Form
			form={form}
			initialValues={{
				name: '123'
			}}
			onSubmit={() => {
				console.log(form.values)
				// form.validateFields()
				// console.log(form.getValues())
			}}>
			<FormItem
				label="name"
				name="name"
				rules={[{ required: true }]}>
				<Input placeholder="name" />
			</FormItem>
			<FormItem
				label="name2"
				name="name2" >
				<Input placeholder="name2" />
			</FormItem>
			<FormItem>
				<Space>
					<Button htmlType="submit">
						Submit
					</Button>
					<Button htmlType="reset">
						Reset
					</Button>
					<Button
						onClick={() =>
							form.setValue('name', 'new Value')
						}>Form Set value</Button>
				</Space>
			</FormItem>
		</Form>
	)
}
