import React from 'react'
import './index.less'
import { classNames, ClassNameUnit } from 'harpe'

export interface PieHalfProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'className'> {
  /**
   * @description 图表尺寸大小
   */
  size?: number
  total: number
  value: number
  className?: ClassNameUnit
  style?: React.CSSProperties
  [key: string]: any
}

export function PieHalf(props: PieHalfProps) {
  const {
    className,
    size = 200,
    style = {},
    total = 0,
    value = 0,
    ...rest
  } = props

  const angle = value > total ? 135 : (value * 180) / (total || 1) - 45

  return (
    <div
      className={classNames('au-pie-half', className)}
      style={
        {
          '--s': size + 'px',
        } as React.CSSProperties
      }
      {...rest}>
      <span className='au-pie-half-value'>{value}</span>
      <span className='au-pie-half-split'>/</span>
      <span className='au-pie-half-total'>{value > total ? value : total}</span>
      <div className='rang'></div>
      <div
        className='value'
        style={{
          transform: `rotate(${angle}deg)`,
        }}></div>
    </div>
  )
}
