import React, { useState } from "react"
import { Input, InputChangeEvent } from '@/input'
import { Container, Unit } from "unit-testing-react"
import { Button } from "@/button"
import { Form, FormItem, useForm } from "@/form"
import { Space } from "@/layout"

export default function () {

	const [value, setValue] = useState<string>('value1')

	const form = useForm()

	return <Container>
		<Unit title="Input & Form">
			<Form
				form={form}
				onSubmit={(values) => {
					console.log(values)
				}}>
				<FormItem name="fi-1" rules={[{ required: true }]}>
					<Input onChange={(e: InputChangeEvent) => {
						console.log(e.target.value)
					}} />
				</FormItem>
				<FormItem>
					<Space>
						<Button htmlType="submit">
							Submit
						</Button>
						<Button htmlType="reset">
							Reset
						</Button>
					</Space>
				</FormItem>
			</Form>
			<Button type="primary" onClick={() =>
				form.setFieldValue('fi-1', 'new Value')
			}>set value(new Value)</Button>

		</Unit>
		<Unit title="Input set value">
			<Input
				value={value}
				onChange={(e: InputChangeEvent) => {
					setValue(e.target.value)
				}}
			/>
			<Button type="primary" onClick={() => setValue('new Value')}>set value(new Value)</Button>
		</Unit>
		<Unit title="Input set defaultValue">
			<Input defaultValue="value2" />
		</Unit>
	</Container>
}
