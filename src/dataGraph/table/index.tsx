import React, {
  CSSProperties,
  DetailedHTMLProps,
  TdHTMLAttributes,
} from 'react'
import { ObjectType, stringify } from 'abandonjs'
import { isNumber } from 'asura-eye'
import { classNames, ClassNameType } from 'harpe'
import './index.less'
import { Div } from '@/element'

export type ColumnsType<DataType extends ObjectType = ObjectType> = {
  title?: string
  dataIndex?: string
  prop?: string
  key?: string | number
  render?(text?: any, record?: DataType, index?: number): React.ReactNode
}[]

export interface Table<DataType extends ObjectType = ObjectType>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  /**
   * @description 序号
   * @default false
   */
  serialNumber?: boolean
  name?: string
  marge?: ObjectType<{
    row?: number
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
    onChange?: (selectedRowKeys: string[], selectedRows: DataType[]) => void
    getCheckboxProps?: (record: ObjectType<any>) => { disabled: boolean }
  }
}

export function Table<DataType extends ObjectType = ObjectType>(
  props: Table<ObjectType>,
) {
  const {
    noBorder = false,
    serialNumber = false,
    rowSelection,
    columns = [],
    dataSource = [],
    marge = {},
    className,
    style,
    ...rest
  } = props

  return (
    <Div
      className={['au-table', className, { noBorder }]}
      style={style}
      {...rest}>
      <table cellSpacing={0}>
        <thead>
          <tr>
            {rowSelection && (
              <th>
                <input type={'checkbox'} />
              </th>
            )}
            {serialNumber && <th>No.</th>}
            {columns.map((item, index) => {
              const { title = '', key = index } = item
              return <th key={key}>{title}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => {
            const { key = index, ...rest } = item
            return (
              <tr key={stringify(key)}>
                {rowSelection && (
                  <td style={{ width: 30 }}>
                    <input type={'checkbox'} />
                  </td>
                )}
                {serialNumber && <td style={{ width: 30 }}>{index + 1}</td>}
                {columns.map((column, cIndex) => {
                  const { dataIndex, prop, render, key = cIndex } = column
                  const itemProps = {} as DetailedHTMLProps<
                    TdHTMLAttributes<HTMLTableCellElement>,
                    HTMLTableCellElement
                  >
                  const { col, row } = marge[`${index}-${cIndex}`] || {}

                  if (isNumber(col)) itemProps['colSpan'] = col
                  if (isNumber(row)) itemProps['rowSpan'] = row

                  const dataKey: string = dataIndex || prop || ''
                  const Render = render
                    ? render(rest[dataKey], item, index)
                    : (rest[dataKey] as React.ReactNode)

                  return (
                    <td key={key} {...itemProps}>
                      {Render}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Div>
  )
}
