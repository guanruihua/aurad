import React from "react"
import { Button, Form, FormItem, injectForm, InputNumber } from '@/form'
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
				<FormItem name="name" rules={[{ required: true, message: '不可以为空' }]}>
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
							onClick={() => form.setValue('name', 3)
							}>
							From Set Value(3)
						</Button>
					</Space>
				</FormItem>
			</Form>
		)
	}
}