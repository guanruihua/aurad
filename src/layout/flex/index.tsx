import React from 'react'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'

export interface FlexProps extends ComponentProps {
  [key: string]: any
}

export function Flex(props: FlexProps) {
  const { className, children, ...rest } = props

  return (
    <div className={classNames(className, 'au-flex')} {...rest}>
      {children}
    </div>
  )
}
