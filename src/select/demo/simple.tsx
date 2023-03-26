/* eslint-disable*/
import React from "react"
import { Select } from '..'
import { options } from './data'
import { UnitMsg } from './UnitMsg'

export default function () {
	return <div style={{
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gap: 8
	}}>
		<UnitMsg>
			{({ log }: any) => {
				return <div>
					<h3>基础使用</h3>
					<Select
						options={options}
						placeholder='name'
						onChange={() => {
							log('a')
						}}
					/>
				</div>
			}}
		</UnitMsg>

		<div className="unit">
			<h3>基础使用</h3>
			<Select
				options={options}
				placeholder='name'
				onChange={() => {
				}}
			/>
		</div>
		<div className="unit">
			<h3>基础使用(value)</h3>
			<Select
				value={'lucy1'}
				options={options}
				placeholder='name'
			/>
		</div>
		<div className="unit">
			<h3>禁用</h3>
			<Select
				disabled
				placeholder='name'
				options={options}
			/>
		</div>
		<div className="unit">
			<h3>打开</h3>
			<Select
				open={true}
				options={options}
				placeholder='name'
			/>
		</div>
	</div>
}
