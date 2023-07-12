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
			onSubmit={(form) => {
				form.validateFields()
				console.log(form.getValues())
			}}>
			<FormItem name="name" rules={[{ required: true }]}>
				<Input placeholder="name" />
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
