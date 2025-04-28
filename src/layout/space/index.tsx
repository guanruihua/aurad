import React from 'react'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'

export function ColumnCount(props: ComponentProps & { column?: number }) {
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

export function ColumnCountItem(
  props: ComponentProps & { title?: React.ReactNode },
) {
  const { className, title, children, ...rest } = props
  return (
    <div className={classNames('au-column-count-item', className)} {...rest}>
      {title && <h2 className='au-column-count-item-title'>{title}</h2>}
      {children}
    </div>
  )
}

ColumnCount.Item = ColumnCountItem
