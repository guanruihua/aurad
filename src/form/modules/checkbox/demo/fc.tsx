import { Form, FormItem, useForm } from "@/form/core"
import React from "react"
import { Checkbox } from ".."
import { Space } from "@/layout"
import { Button } from "../../button"

export default function () {
	const form = useForm()

	return <Form
		form={form}
		onSubmit={(form) => {
			console.log(form.getValues())
		}}
	>
		<Form.Item
			label='box1'
			valueIndex='checked'
			name="box1">
			<Checkbox>box1</Checkbox>
		</Form.Item>
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


}
