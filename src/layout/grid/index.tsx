import React, { CSSProperties } from 'react'
import { isNumber } from 'asura-eye'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import { getGridSpanLayout, initIgnore } from './util'
import type { GridProps } from './type'
import './index.less'
export { GridProps }

export function Grid(props: GridProps) {
  const {
    className,
    fill = true,
    merge = {},
    columns = 12,
    rows = 'auto',
    maxRows = 'auto',
    childClassName,
    childStyle = {},
    fillChildClassName,
    style = {},
    children,
    ...rest
  } = props
  const useRows = rows === 'auto' ? maxRows : rows
  const count = React.Children.count(children)
  let total =
    useRows == 'auto' || fill === false
      ? Math.ceil(count / columns) * columns
      : useRows * columns

  let extra = total - count
  if (isNumber(useRows)) {
    total = useRows * columns
    extra = 0
  }
  const getSpanLayout = getGridSpanLayout(merge, columns)
  const ignore = initIgnore(merge, columns)

  return (
    <div
      className={classNames('au-grid', className)}
      style={
        {
          gridTemplateColumns: `repeat(${columns},1fr)`,
          ...style
        } as CSSProperties
      }
      {...(rest as any)}>
      {React.Children.map(children, (child, index: number) => {
        if (index + 1 > total || (ignore as number[]).includes(index)) return

        if (React.isValidElement<ComponentProps>(child)) {
          const {
            className: unitClassName,
            style: unitStyle,
            ...unitRest
          } = child.props

          return React.cloneElement(child, {
            className: classNames(childClassName, unitClassName),
            style: {
              ...getSpanLayout(index),
              ...childStyle,
              ...unitStyle
            },
            ...unitRest
          })
        }

        return <div className={classNames(childClassName)}>{child}</div>
      })}
      {fill &&
        isNumber(extra) &&
        extra > 0 &&
        new Array(extra).fill(null).map((child, i: number) => {
          const index = i + count
          return (
            <div
              style={{
                ...childStyle
              }}
              key={index}
              className={classNames(fillChildClassName, childClassName)}
            />
          )
        })}
    </div>
  )
}
