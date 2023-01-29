import { ObjectType } from "abandonjs";
import React from "react"
import { Table } from '..'
import './index.less'

const dataSource = [
	{ key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
	{ key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号' },
	{ key: '3', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号' },
	{ key: '4', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号' },
];

const columns = [{
	title: '姓名',
	dataIndex: 'name',
	key: 'name',
	render: (text: any) => {
		return text + '(name)'
	}
}, {
	title: '年龄',
	dataIndex: 'age',
	key: 'age',
}, {
	title: '住址',
	dataIndex: 'address',
	key: 'address',
}];

const rowSelection = {
	onChange: (selectedRowKeys: string[], selectedRows: ObjectType<any>[]) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record: ObjectType<any>) => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
	}),
};

export default function () {
	return <div>
		<h2>Table</h2>
		<Table
			serialNumber
			rowSelection={rowSelection}
			columns={columns}
			dataSource={dataSource} />
	</div>
}
