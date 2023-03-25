import React from "react"
import { Radio } from '..'

export default function () {
	return <div className="unit">
		<div>
			<Radio>Default</Radio>
			<Radio checked>Value</Radio>
			<Radio label="Label"></Radio>
			<Radio<number>
				value={123}
				onChange={(checked: boolean, value: number) => {
					console.log({ checked, value })
				}} >onChange</Radio>
		</div>
		<div>
			<div>
				<Radio.Group value={'a1'}>
					<Radio value='a1'>a1</Radio>
					<Radio value='a2'>a2</Radio>
					<Radio value='a3'>a3</Radio>
				</Radio.Group>
			</div>
			<div>
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
			</div>
		</div>
	</div>
}
