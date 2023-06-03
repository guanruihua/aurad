import React from "react"
import { Input, Button, Form, FormItem, injectForm } from '@/form'
import { Container, Unit } from "unit-testing-react"
import { Space } from "@/layout"

@injectForm
export default class extends React.Component {

	render() {
		const { props }: any = this
		const { form } = props

		return <Container>
			<Unit title="Input & Form & class">
				<Form
					form={form}
					onSubmit={(values) => {
						console.log(values)
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
								onClick={() => form.setFieldValue('name', 'new Value')
								}>From Set Value</Button>
						</Space>
					</FormItem>
				</Form>

			</Unit>
		</Container>
	}
}