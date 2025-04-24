import React from 'react'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'

export interface FlexProps extends ComponentProps {
  row?: boolean
  column?: boolean
  [key: string]: any
}

export function Flex(props: FlexProps) {
  const { row, column, className, children, ...rest } = props

  return (
    <div
      className={classNames(
        'au-flex',
        {
          row,
          column,
        },
        className,
      )}
      {...rest}>
      {children}
    </div>
  )
}
