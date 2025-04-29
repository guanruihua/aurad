import React from 'react'
import { prefixHoc } from '@/assets'
import './index.less'
import { SimpleNumberScroll } from './simple'
import { isNumber } from 'asura-eye'
import { padNumber } from 'abandonjs'
import { classNames, ClassNameType } from 'harpe'
import { getEffectNumber } from './util'

export * from './simple'

const prefix = prefixHoc('au-number-scroll')

export interface NumberScroll
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'className'> {
  value?: number
  /**
   * @description 位数
   * @default 4
   */
  maxLength?: number
  rootStyle?: React.CSSProperties
  style?: React.CSSProperties
  itemStyle?: React.CSSProperties
  className?: ClassNameType
}

export function NumberScroll(props: NumberScroll) {
  const {
    className,
    value: originValue = 0,
    maxLength = 4,
    rootStyle = {},
    style = {},
    itemStyle = {},
    ...rest
  } = props

  const value = getEffectNumber(originValue, maxLength)
  const valueStr = value.toString()
  const newValueStr = padNumber(valueStr, maxLength)

  return (
    <div
      className={classNames(prefix(), className)}
      style={{
        gridTemplateColumns: `repeat(${maxLength}, 30px)`,
        ...rootStyle,
      }}
      {...rest}>
      {Array.from({ length: maxLength }, (_, index) => {
        const tmp = Number(newValueStr[index])
        const val = isNumber(tmp) ? tmp : 0
        return (
          <SimpleNumberScroll
            style={style}
            itemStyle={itemStyle}
            key={index}
            value={val}
          />
        )
      })}
    </div>
  )
}
