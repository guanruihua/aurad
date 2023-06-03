import React from "react"
import { ObjectType } from "abandonjs"
import { Container, Unit } from 'unit-testing-react'
import { Table } from '..'
import './index.less'
import { columns, dataSource } from './data'

const rowSelection = {
	onChange: (selectedRowKeys: string[], selectedRows: ObjectType<any>[]) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record: ObjectType<any>) => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
	}),
};

export default function () {
	return (
		<Container>
			<Unit title="Table(default)">
				<Table
					columns={columns}
					dataSource={dataSource} />
			</Unit>
			<Unit title="Table(noBorder)">
				<Table
					noBorder
					columns={columns}
					dataSource={dataSource} />
			</Unit>
			<Unit title="Table">
				<Table
					serialNumber
					rowSelection={rowSelection}
					columns={columns}
					dataSource={dataSource} />
			</Unit>
		</Container>
	)
}
