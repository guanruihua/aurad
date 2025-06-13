import React from 'react'
import type { DivProps, PProps, SpanProps } from './type'
import { classNames as _classNames } from 'harpe'

export * from './type'

export function Div(props: DivProps) {
  const { className, classNames, hidden, none, children, ...rest } = props

  return (
    <div
      className={_classNames(className, classNames, { hidden, none })}
      {...rest}>
      {children}
    </div>
  )
}

export function Span(props: SpanProps) {
  const { className, classNames, hidden, none, children, ...rest } = props

  return (
    <span
      className={_classNames(className, classNames, { hidden, none })}
      {...rest}>
      {children}
    </span>
  )
}

export function P(props: PProps) {
  const { className, classNames, hidden, none, children, ...rest } = props

  return (
    <p
      className={_classNames(className, classNames, { hidden, none })}
      {...rest}>
      {children}
    </p>
  )
}
