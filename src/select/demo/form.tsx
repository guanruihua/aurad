import React from "react"
import { Button } from "@/button"
import { Form, useForm } from "@/form"
import { FormRecord } from "@/form/type"
import { Select } from '..'
import { options } from './data'

export default function () {
	const form = useForm()

	return <div>
		<div>
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
				<div>
					<Button htmlType="submit">Submit</Button>
					<Button htmlType="reset">Reset</Button>
				</div>
			</Form>
		</div>
	</div>
}
