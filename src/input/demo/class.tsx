/* eslint-disable*/
import React, { createContext, useState, useContext } from "react"
import { Input, InputChangeEvent } from '@/input'
import { Container, Unit } from "unit-testing-react"
import { Button } from "@/button"
import { Form, FormItem, useClassForm, useForm } from "@/form"
import { Space } from "@/layout"


function inject(CMM: any): any {
	function Dom(props: any): any {
		const form = useForm()
		return <CMM form={form} />
	}
	// console.log(this)
	return Dom
}

@inject
class App extends React.Component {
	state = {
		value: 'value1'
	}

	setValue = (value: string) => {
		this.setState({ value })
	}
	render() {
		const { state, setValue, props }: any = this
		const { form } = props
		console.log(this)
		// const [value, setValue] = useState<string>('value1')

		// const form = useForm()

		return <Container>
			<Unit title="Input & Form & class">
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
				<Button type="primary" onClick={() => {
					form.setFieldValue('fi-1', 'new Value')
				}
				}>set value(new Value)</Button>

			</Unit>
			<Unit title="Input set value">
				<Input
					value={state.value}
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
}


export default App