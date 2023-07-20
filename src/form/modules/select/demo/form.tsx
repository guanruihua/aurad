import React from "react"
import { Button } from "../../button"
import { Select } from '..'
import { Form, useForm, FormItem } from "../../../core"
import { options } from './data'
import { Container, Unit } from "unit-testing-react"

export default function () {
	const form = useForm()

	return <Container columns={1}>
		<Unit>
			<h3>结合Form</h3>
			<Form
				form={form}
				onSubmit={(form) => {
					console.log(form.values)
				}}
			>
				<FormItem name="select-name">
					<Select
						options={options}
					/>
				</FormItem>
				<FormItem name="select-name2">
					<Select
						mode="multiple"
						options={options}
					/>
				</FormItem>
				<Button
					onClick={() => {
						form.setValue('select-name', 'lucy2')
					}}>
					setValue('select-name', 'lucy2')
				</Button>
				<Button
					onClick={() => {
						form.setValue('select-name2', 'lucy2')
					}}>
					setValue('select-name2', 'lucy2')
				</Button>
				<div>
					<Button htmlType="submit">Submit</Button>
					<Button htmlType="reset">Reset</Button>
				</div>
			</Form>

		</Unit>
	</Container>
}
