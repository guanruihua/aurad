import React from "react"
import { Checkbox } from '..'
import { Container, Unit } from 'unit-testing-react'

export default function () {
	return <Container>
		<Unit title='Checkbox'>
			<div>
				<Checkbox>Default</Checkbox>
				<Checkbox checked>Value</Checkbox>
				<Checkbox label="Label"></Checkbox>
				<Checkbox<number>
					value={123}
					onChange={(checked: boolean, value: number) => {
						console.log({ checked, value })
					}} >onChange</Checkbox>
			</div>
			<div>
				<div>
					<Checkbox.Group value={['a1', 'a2']}>
						<Checkbox value='a1'>a1</Checkbox>
						<Checkbox value='a2'>a2</Checkbox>
						<Checkbox value='a3'>a3</Checkbox>
					</Checkbox.Group>
				</div>
				<div>
					<Checkbox.Group
						value={['a1', 'a3']}
						onChange={(v) => {
							console.log(v)
						}}
					>
						<Checkbox value='a1'>a1</Checkbox>
						<Checkbox value={{ a: 123 }}>a2</Checkbox>
						<Checkbox value='a3'>a3</Checkbox>
					</Checkbox.Group>
				</div>
			</div>
		</Unit>
	</Container>
}
