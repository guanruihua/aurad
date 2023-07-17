import React from "react"
import { InputNumber } from '../..'
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
			<FormItem name="num" rules={[{ required: true, message: '不可以为空' }]}>
				<InputNumber placeholder="num" min={0} max={99} step={13} />
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
							form.setValue('num', 3)
						}>
						Form Set value(3)
					</Button>
				</Space>
			</FormItem>
		</Form>
	)
}
