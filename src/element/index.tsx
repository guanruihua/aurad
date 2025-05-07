import React from 'react'
import type { DivProps, SpanProps } from './type'
import { classNames } from 'harpe'

export * from './type'

export function Div(props: DivProps) {
  const { className, children, ...rest } = props

  return (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  )
}

export function Span(props: SpanProps) {
  const { className, children, ...rest } = props

  return (
    <span className={classNames(className)} {...rest}>
      {children}
    </span>
  )
}