import React from 'react'
import { classNames, ClassNameType } from 'harpe'
import './index.less'
import { useState } from './util'

export interface SplitProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  /**
   * @default 10
   */
  gap?: number
  /**
   * @default 20%
   * @type {number|`{number}px`|`{number}%`}
   */
  leftMinWidth?: string | number
  /**
   * @default 20%
   * @type {number|`{number}px`|`{number}%`}
   */
  rightMinWidth?: string | number
  items?: [React.ReactNode, React.ReactNode]
  [key: string]: any
}

export function Split(props: SplitProps) {
  const { gap = 10, items = [], leftMinWidth, rightMinWidth, className, style, ...rest } = props
  const [left, right] = items

  const { boxRef, onMouseDown } = useState(props)

  return (
    <div
      ref={boxRef as any}
      className={classNames('au-split', className)}
      style={{
        gridTemplateColumns: `auto ${gap}px 1fr`,
        ...style,
      }}
      {...rest}>
      <div className={classNames('au-split-box au-split-left', className)}>
        {left}
      </div>
      <div
        className='au-split-btn'
        onMouseDown={onMouseDown}
        style={{ width: gap }}></div>
      <div className={classNames('au-split-box au-split-right', className)}>
        {right}
      </div>
    </div>
  )
}
