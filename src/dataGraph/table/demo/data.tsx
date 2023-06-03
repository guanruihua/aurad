export const dataSource = [
	{ key: '1', name: '小月月', age: 32, address: '西湖区湖底公园1号' },
	{ key: '2', name: '小月月', age: 42, address: '西湖区湖底公园1号' },
	{ key: '3', name: '小月月', age: 42, address: '西湖区湖底公园1号' },
	{ key: '4', name: '小月月', age: 42, address: '西湖区湖底公园1号' },
];

export const columns = [{
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