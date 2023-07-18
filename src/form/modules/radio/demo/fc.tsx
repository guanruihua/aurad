import React from "react"
import { Container, Unit } from "unit-testing-react"
import { Form, useForm, FormItem } from '@/form'
import { Radio } from '..'
import { Button } from "../../button"

export default function () {
	const form = useForm()
	return <Container>
		<Unit title="Radio with Form(FC)">
			<Form
				form={form}
				onSubmit={(form) => {
					console.log(form.values)
				}}
			>
				<FormItem
					valueIndex="checked"
					name="aa">
					<Radio value="a">a</Radio>
				</FormItem>
				<FormItem name="bb">
					<Radio value="b">b</Radio>
				</FormItem>
				<FormItem name="cc">
					<Radio.Group>
						<Radio value="a">a</Radio>
						<Radio value="b">b</Radio>
						<Radio value="c">c</Radio>
						<Radio value="d">d</Radio>
					</Radio.Group>
				</FormItem>
				<FormItem>
					<Button htmlType="submit">
						Submit
					</Button>
				</FormItem>
			</Form>
		</Unit>
	</Container>
}
