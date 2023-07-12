import React from "react"
import { Input, Button, Form, FormItem, injectForm } from '@/form'
import { Space } from "@/layout"

@injectForm
export default class extends React.Component {

	render() {
		const { props }: any = this
		const { form } = props

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
							onClick={() => form.setValue('name', 'new Value')
							}>From Set Value</Button>
					</Space>
				</FormItem>
			</Form>
		)
	}
}