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
		<Form.Item
			label='box2'
			name="box2">
			<Checkbox.Group>
				<Checkbox.Item value={'aaa'}>aaa</Checkbox.Item>
				<Checkbox.Item value={'bbb'}>bbb</Checkbox.Item>
			</Checkbox.Group>
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
