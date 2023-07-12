import React, { CSSProperties, DetailedHTMLProps, TdHTMLAttributes } from "react"
import { ObjectType, stringify } from "abandonjs"
import { isNumber } from 'asura-eye'
import { ComponentProps } from "@/assets"
import { classNames } from "harpe"
import './index.less'

export type ColumnsType<DataType extends ObjectType = ObjectType> = {
	title?: string
	dataIndex?: string
	key?: string | number
	render?(text?: any, record?: DataType, index?: number): React.ReactNode;
}[]

export interface Table<DataType extends ObjectType = ObjectType> extends ComponentProps {
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
	/**
	 * @description 边框
	 * @default false
	 */
	noBorder?: boolean
	columns: ColumnsType<DataType>
	dataSource: DataType[]
	rowSelection?: {
		onChange?: (selectedRowKeys: string[], selectedRows: DataType[]) => void;
		getCheckboxProps?: (record: ObjectType<any>) => { disabled: boolean }
	}
}

export function Table<DataType extends ObjectType = ObjectType>(props: Table<ObjectType>) {

	const {
		noBorder = false,
		serialNumber = false, rowSelection,
		columns = [], dataSource = [], marge = {},
		className, style, ...rest
	} = props

	const newClassName = classNames('au-table', className)

	return (
		<div
			className={newClassName}
			style={{
				'--border': noBorder ? 'none' : '1px solid #e9e9e9',
				'--border-radius': noBorder ? '0' : '12px',
				...style
			} as CSSProperties}
			{...rest}
		>
			<table cellSpacing={0}>
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
						return <tr key={stringify(key)}>
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


								const Render = render
									? render(rest[dataIndex as string], item, index)
									: (rest[dataIndex as string]) as React.ReactNode

								return (
									<td key={key} {...itemProps}>
										{Render}
									</td>
								)
							})}
						</tr>
					})}
				</tbody>
			</table>
		</div>
	)
}
