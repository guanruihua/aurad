import React from 'react'
import { classNames, ClassNameType } from 'harpe'
import './index.less'

export interface ColumnCountProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  column?: number
}

export function ColumnCount(props: ColumnCountProps) {
  const { className, column, children, ...rest } = props
  if (column && column > 0) {
    if (rest.style) {
      rest.style.columnCount = column
    } else {
      rest.style = {
        columnCount: column,
      }
    }
  }

  return (
    <div className={classNames('au-column-count', className)} {...rest}>
      {children}
    </div>
  )
}

export interface ColumnCountItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  className?: ClassNameType
  title?: React.ReactNode
}

export function ColumnCountItem(props: ColumnCountItemProps) {
  const { className, title, children, ...rest } = props
  return (
    <div className={classNames('au-column-count-item', className)} {...rest}>
      {title && <h2 className='au-column-count-item-title'>{title}</h2>}
      {children}
    </div>
  )
}

ColumnCount.Item = ColumnCountItem
