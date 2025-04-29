import React, { CSSProperties, useState } from 'react'
import { isUndefined } from 'asura-eye'
import { useLayout } from '../hook'
import { ClassNameType } from 'harpe'

export interface WaterfallProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  count?: number
  type?: 'x'
  xGap?: number | string
  yGap?: number | string
}

export function Waterfall(props: WaterfallProps) {
  const {
    count = 2,
    xGap = 10,
    yGap = 10,
    children,
    style = {},
    type,
    ...rest
  } = props

  const [newCount, setCount] = useState<number>(count)

  const { ref, props: newProps } = useLayout<HTMLDivElement, number>({
    callback: (value: number) => {
      setCount(value)
    },
    defaultValue: count,
    defaultEffectKey: 'count',
    props: rest,
  })

  if (type === 'x') {
    const list = new Array(count).fill('').map(() => new Array())
    React.Children.map(children, (item, i) => {
      list[i % count].push(item)
    })

    return (
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${count}, 1fr)`,
          gap: xGap,
          ...style,
        }}
        {...(newProps as any)}>
        {list.map((item, k) => {
          return (
            <div key={k}>
              {item.map((item: any, j) => {
                const exStyle: CSSProperties = {
                  marginBottom: yGap,
                }

                return (
                  <div key={j} style={exStyle}>
                    {item}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      style={{
        columnCount: newCount,
        gap: xGap,
        ...style,
      }}
      {...(newProps as any)}>
      {React.Children.map(children, (item) => {
        const exStyle: CSSProperties = {
          overflow: 'hidden',
          breakInside: 'avoid',
          marginBottom: yGap,
        }

        if (!isUndefined(yGap)) {
          exStyle['marginBottom'] = yGap
        }

        if (React.isValidElement(item)) {
          const newProps = { ...item.props }
          newProps.style = { ...exStyle, ...newProps.style }
          return React.cloneElement(item, newProps)
        }

        return <div style={exStyle}>{item}</div>
      })}
    </div>
  )
}
