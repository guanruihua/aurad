/* eslint-disable*/
import React, { CSSProperties, DetailedHTMLProps, TdHTMLAttributes } from "react"
import { isNumber, ObjectType } from "abandonjs"
import { classNames, ComponentBaseProps } from "@/assets"
import './index.less'

export interface Table extends ComponentBaseProps {
	/**
	 * @description 序号
	 * @default false
	 */
	serialNumber?: boolean
	name?: string
	marge?: ObjectType<{
		row?: number,
		col?: number
	}>
	columns: ObjectType<any>[]
	dataSource: ObjectType<any>[]
	rowSelection?: {
		onChange?: (selectedRowKeys: string[], selectedRows: ObjectType<any>[]) => void;
		getCheckboxProps?: (record: ObjectType<any>) => { disabled: boolean }
	}
}

export function Table(props: Table) {
	const {
		serialNumber = false, rowSelection,
		columns = [], dataSource = [], marge = {},
		className, style,
	} = props
	return <table
		cellSpacing={0}
		className={classNames('table', className)}
		style={style}
	>
		{/* <caption>Color names and values</caption> */}
		{/* <colgroup>
			<col span={1} className="order" />
			<col span={1} className="batman" />
			<col span={1} className="flash" />
			<col span={1} className="batman" />
			<col span={1} className="flash" />
		</colgroup> */}
		<thead>
			<tr>
				{rowSelection && <th>
					<input type={'checkbox'} />
				</th>}
				{serialNumber && <th>No.</th>}
				{columns.map((item, index) => {
					const { title = '', key = index } = item
					return <th key={key}>
						{title}
					</th>
				})}
			</tr>
		</thead>
		<tbody>
			{dataSource.map((item, index) => {
				const { key = index, ...rest } = item
				return <tr key={key}>
					{rowSelection && <td style={{ width: 30 }}>
						<input type={'checkbox'} />
					</td>}
					{serialNumber && <td style={{ width: 30 }}>{index + 1}</td>}
					{columns.map((column, cIndex) => {
						const { dataIndex, render, key = cIndex } = column
						const itemProps = {} as DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>
						const { col, row } = marge[`${index}-${cIndex}`] || {}
						if (isNumber(col)) itemProps['colSpan'] = col
						if (isNumber(row)) itemProps['rowSpan'] = row

						return <td key={key} {...itemProps}>
							{render ? render(rest[dataIndex], item, index) : rest[dataIndex] || ''}
						</td>
					})}
				</tr>
			})}

		</tbody>
	</table>
}
