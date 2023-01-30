import React from "react"
import { Select } from '..'

const options = [
	{ value: 'lucy1', label: 'Lucy1', },
	{ value: 'lucy2', label: 'Lucy2', },
	{ value: 'lucy3', label: 'Lucy3', },
	{ value: 'lucy4', label: 'Lucy4', },
	{ value: 'lucy5', label: 'Lucy5', },
	{ value: 'lucy6', label: 'Lucy6', },
	{ value: 'lucy7', label: 'Lucy7', },
	{ value: 'lucy8', label: 'Lucy8', },
	{ value: 'lucy9', label: 'Lucy9', },
	{ value: 'lucy10', label: 'Lucy10', },
	{ value: 'lucy11', label: 'Lucy11', },
	{ value: 'lucy12', label: 'Lucy12', },
	{ value: 'lucy13', label: 'Lucy13', },
]

export default function SelectPage() {
	return <div style={{ background: '#fff', padding: 10 }}>
		<div style={{
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr 1fr',
			gap: 8
		}}>
			<div>
				<h3>基础使用</h3>
				<Select
					// defaultOpen={true}
					// open={true}
					options={options}
					placeholder='name'
				/>
			</div>
			<div>
				<h3>基础使用(value)</h3>
				<Select
					value={'lucy1'}
					// defaultOpen={true}
					// open={true}
					options={options}
					placeholder='name'
				/>
			</div>
			<div>
				<h3>禁用</h3>
				<Select
					// defaultOpen={true}
					disabled
					placeholder='name'
					options={options}
				/>

			</div>


		</div>
		<div style={{
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
	</div>
}
