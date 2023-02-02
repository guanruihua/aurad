import React from "react"
import { Select } from '..'
import { options } from './data'

export default function () {
	return <div style={{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gap: 8
	}}>
		<div>
			<h3>基础使用</h3>
			<Select
				mode="multiple"
				defaultValue={['lucy1', 'lucy2', 'lucy1']}
				// defaultOpen={true}
				options={options}
				placeholder='name'
			/>
		</div>
		<div>
			<h3>基础使用</h3>
			<Select
				mode="multiple"
				defaultValue={['lucy1', 'lucy2', 'lucy1',
					'lucy2', 'lucy1', 'lucy2', 'lucy1', 'lucy2',
				]}
				// defaultOpen={true}
				options={options}
				placeholder='name'
			/>
		</div>
		<div>
			<h3>禁用</h3>
			<Select
				mode="multiple"
				// defaultOpen={true}
				disabled
				placeholder='name'
				options={options}
			/>
		</div>
	</div>
}
