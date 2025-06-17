import React from 'react'
import { Div, DivProps } from '@/element'
import './index.less'

export interface EmptyProps extends DivProps {
  [key: string]: any
}

export function Empty(props: EmptyProps) {
  const { className ,children = 'Data Not Found', ...rest } = props
  return <Div className={['au-empty', className]} {...rest}>{children}</Div>
}
