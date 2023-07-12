import React from "react"
import { InputNumber } from '..'
import { Table } from "@/dataGraph"

export default function () {
	const [value, setValue] = React.useState<number | string>(0)
	return (
			<Table
				noBorder
				dataSource={[
					{ component: <InputNumber />, prop: 'Empty', desc: '默认', },
					{ component: <InputNumber defaultValue={13} />, prop: 'defaultValue ', desc: '设置默认值', },
					{
						component: <InputNumber value={14} />,
						prop: 'value',
						desc: '设置值, 可以通过onChange回调设置该值',
					},
					{
						component: <InputNumber defaultValue={14} step={3} />,
						prop: 'defaultValue,step=3',
						desc: '设置值, 可以通过onChange回调设置该值',
					},
					{
						component: <InputNumber
							value={value}
							onChange={(e) => {
								setValue(e.target.value)
							}}
						/>,
						prop: 'value, onChange',
						desc: '设置值, 通过onChange回调设置该值',
					},

				]}
				columns={[
					{ title: 'Component', dataIndex: 'component' },
					{ title: 'Props', dataIndex: 'prop' },
					{ title: 'Description', dataIndex: 'desc' },
				]}
			/>
	)
}
