import React from "react"
import { Button } from "@/button"
import { Form, useForm } from "@/form"
import { FormRecord } from "@/form/type"
import { Select } from '..'
import { options } from './data'
import { Container, Unit } from "unit-testing-react"

export default function () {
	const form = useForm()

	return <Container columns={1}>
		<Unit>
			<h3>结合Form</h3>
			<Form
				form={form}
				onSubmit={(values: FormRecord) => {
					console.log(values)
				}}
			>
				<Form.Item name="select-name">
					<Select
						options={options}
					/>
				</Form.Item>
				<Button
					onClick={() => {
						form.setFieldValue('select-name', 'lucy2')
					}}>
					setFieldValue('select-name', 'lucy2')
				</Button>
				<div>
					<Button htmlType="submit">Submit</Button>
					<Button htmlType="reset">Reset</Button>
				</div>
			</Form>

		</Unit>
	</Container>
}
