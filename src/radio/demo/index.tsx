import React from "react"
import { Radio } from '..'
import { Container, Unit } from "unit-testing-react"
import { Space } from "@/layout"

export default function () {
	return <Container>
		<Unit title="Radio">
			<Radio>Default</Radio>
			<Radio checked>Value</Radio>
			<Radio label="Label"></Radio>
			<Radio<number>
				value={123}
				onChange={(checked: boolean, value: number) => {
					console.log({ checked, value })
				}} >onChange</Radio>
		</Unit>
		<Unit title="RadioGroup(type=radio)">
			<Radio.Group value={'a1'}>
				<Radio value='a1'>a1</Radio>
				<Radio value='a2'>a2</Radio>
				<Radio value='a3'>a3</Radio>
			</Radio.Group>
			<Radio.Group
				// value={{ a: 12 }}
				value={{ a: 123 }}
				onChange={(v) => {
					console.log(v)
				}}
			>
				<Radio value='a1'>a1</Radio>
				<Radio value={{ a: 123 }}>a2</Radio>
				<Radio value='a3'>a3</Radio>
			</Radio.Group>
		</Unit>
		<Unit title="RadioGroup(type=button)">
			<Space direction="vertical">
				<Radio.Group
					type="button"
					value={{ a: 123 }}
					onChange={(v) => {
						console.log(v)
					}}
				>
					<Radio value='a1'>a1</Radio>
				</Radio.Group>
				<Radio.Group
					type="button"
					value={{ a: 123 }}
					onChange={(v) => {
						console.log(v)
					}}
				>
					<Radio value='a1'>a1</Radio>
					<Radio value={{ a: 123 }}>a2</Radio>
				</Radio.Group>
				<Radio.Group
					type="button"
					value={{ a: 123 }}
					onChange={(v) => {
						console.log(v)
					}}
				>
					<Radio value='a1'>a1</Radio>
					<Radio value={{ a: 123 }}>a2</Radio>
					<Radio value='a3'>a3</Radio>
				</Radio.Group>

				<Radio.Group
					type="button"
					value={{ a: 123 }}
					onChange={(v) => {
						console.log(v)
					}}
				>
					<Radio value='a1'>a1</Radio>
					<Radio value={{ a: 123 }}>a2</Radio>
					<Radio value='a3'>a3</Radio>
					<Radio value='a4'>a4</Radio>
					<Radio value='a5'>a5</Radio>
					<Radio value='a6'>a6</Radio>
					<Radio value='a7'>a7</Radio>
				</Radio.Group>
			</Space>
		</Unit>
	</Container >
}
