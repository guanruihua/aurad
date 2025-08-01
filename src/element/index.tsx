import React from 'react'
import type { DivProps, OListProps, PProps, SpanProps, UListProps } from './type'
import { classNames as _classNames } from 'harpe'
import { isEffectObject, isString } from 'asura-eye'

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

export function Ul(props: UListProps) {
  const { className, classNames, hidden, none, items, children, ...rest } =
    props

  return (
    <ul
      className={_classNames(className, classNames, { hidden, none })}
      {...rest}>
      {items
        ?.map((item, i) => {
          if (isString(item)) return <li key={i}>{item}</li>
          if (isEffectObject(item)) {
            const { className, classNames, hidden, none, children, ...rest } =
              item

            return (
              <li
                key={i}
                className={_classNames(className, classNames, { hidden, none })}
                {...(rest as any)}>
                {children as any}
              </li>
            )
          }
        })
        ?.filter(Boolean)}
      {children}
    </ul>
  )
}

export function Ol(props: OListProps) {
  const { className, classNames, hidden, none, items, children, ...rest } =
    props

  return (
    <ol
      className={_classNames(className, classNames, { hidden, none })}
      {...rest}>
      {items
        ?.map((item, i) => {
          if (isString(item)) return <li key={i}>{item}</li>
          if (isEffectObject(item)) {
            const { className, classNames, hidden, none, children, ...rest } =
              item

            return (
              <li
                key={i}
                className={_classNames(className, classNames, { hidden, none })}
                {...(rest as any)}>
                {children as any}
              </li>
            )
          }
        })
        ?.filter(Boolean)}
      {children}
    </ol>
  )
}
