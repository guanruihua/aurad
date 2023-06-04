import React from "react"
import { Input } from '../..'
import { Container, Unit } from "unit-testing-react"
import { Button } from "../../button"
import { Form, FormItem, useForm } from "@/form"
import { Space } from "@/layout"

function Test() {
	return <div>test</div>
}

export default function () {

	const form = useForm()

	return <Container>
		<Unit title="Input & Form & FC">
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
						<Button htmlType="submit" type="primary">
							Submit
						</Button>
						<Button htmlType="reset">
							Reset
						</Button>
						<Button
							onClick={() =>
								form.setFieldValue('name', 'new Value')
							}>Form Set value</Button>
					</Space>
				</FormItem>
			</Form>
		</Unit>
	</Container>
}
