import React from "react"
import { Input, InputChangeEvent, Button, Form, FormItem, injectForm } from '@/form'
import { Container, Unit } from "unit-testing-react"
import { Space } from "@/layout"

@injectForm
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