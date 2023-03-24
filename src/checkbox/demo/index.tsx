import React from "react"
import { Checkbox } from '..'



export default function () {
	return <div>
		<div>
			<Checkbox>Default</Checkbox>
			<Checkbox checked>Value</Checkbox>
			<Checkbox<number>
				value={123}
				onChangeBefore={(checked: boolean, value: number) => {
					console.log({ checked, value })
					return {
						checked: !checked,
						value: value + 1
					}
				}} >onChangeBefore</Checkbox>
			<Checkbox label="Label"></Checkbox>
			<Checkbox<number>
				value={123}
				onChange={(checked: boolean, value: number) => {
					console.log({ checked, value })
				}} >onChange</Checkbox>
			<Checkbox label="Label"></Checkbox>
		</div>
		<div>
			<Checkbox.Group value={['a1', 'a2']}>
				<Checkbox name='a1'>a1</Checkbox>
				<Checkbox value='a2'>a2</Checkbox>
				<Checkbox name='a3'>a3</Checkbox>
			</Checkbox.Group>
		</div>
	</div>
}
