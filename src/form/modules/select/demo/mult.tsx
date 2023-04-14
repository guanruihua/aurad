import React from "react"
import { Select } from '..'
import { options } from './data'
import { Container, Unit } from "unit-testing-react"

export default function () {
	return <Container columns={3} grid>
		<Unit title="基础使用">
			<Select
				mode="multiple"
				defaultValue={['lucy1', 'lucy2', 'lucy1']}
				options={options}
				placeholder='name'
			/>
		</Unit>
		<Unit title="基础使用">
			<Select
				mode="multiple"
				defaultValue={['lucy1', 'lucy2', 'lucy1',
					'lucy2', 'lucy1', 'lucy2', 'lucy1', 'lucy2',
				]}
				options={options}
				placeholder='name'
			/>
		</Unit>
		<Unit title="禁用">
			<Select
				mode="multiple"
				disabled
				placeholder='name'
				options={options}
			/>
		</Unit>
	</Container>
}
