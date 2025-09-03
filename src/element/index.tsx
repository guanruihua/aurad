import React from 'react'
import type {
  DivProps,
  OListProps,
  PProps,
  SpanProps,
  UListProps,
} from './type'
import { classNames as _classNames } from 'harpe'
import { isEffectObject, isString } from 'asura-eye'
import './index.less'

export * from './type'

const getConf = (props: any, { expandClassName }: any = {}) => {
  const { className, classNames, hidden, none, disabled, children, ...rest } =
    props
  return {
    className: _classNames(className, classNames, {
      expandClassName,
      hidden,
      none,
      'au-element-disabled': disabled,
    }),
    children,
    rest,
  }
}

export function Div(props: DivProps) {
  const { className, children, rest } = getConf(props)

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

export type BoxProps = DivProps

export function Box(props: BoxProps) {
  const { className, children, rest } = getConf(props, {
    expandClassName: 'au-box',
  })

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

export function Span(props: SpanProps) {
  const { className, children, rest } = getConf(props)

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

export function P(props: PProps) {
  const { className, children, rest } = getConf(props)

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  )
}

export function Ul(props: UListProps) {
  const { items, ..._props } = props
  const { className, children, rest } = getConf(_props)

  return (
    <ul className={className} {...rest}>
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
  const { items, ..._props } = props
  const { className, children, rest } = getConf(_props)

  return (
    <ol className={className} {...rest}>
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
