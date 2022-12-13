import React from "react"
import { Select } from '..'

export default function SelectPage() {
	return <div>
		<Select
			defaultOpen={true}
		>
			<Select.Option value={'12'}>msg1</Select.Option>
			<Select.Option value={'22'}>msg2</Select.Option>
			<Select.Option value={'32'}>msg3</Select.Option>
			<Select.Option value={'42'}>msg4</Select.Option>
			<Select.Option value={'52'}>msg5</Select.Option>
			<Select.Option value={'62'}>msg6</Select.Option>
			<Select.Option value={'72'}>msg7</Select.Option>
			<Select.Option value={'82'}>msg8</Select.Option>
			<Select.Option value={'92'}>msg9</Select.Option>
			<Select.Option value={'102'}>msg10</Select.Option>
			<Select.Option value={'112'}>msg11</Select.Option>
			<Select.Option value={'122'}>msg12</Select.Option>
			<Select.Option value={'132'}>msg13</Select.Option>
		</Select>
	</div>
}
