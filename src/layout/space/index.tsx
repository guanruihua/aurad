import React, { CSSProperties } from 'react'
import type { Direction, Align } from '../type'
import { FlexAlign } from '../constant'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'

export interface SpaceProps extends ComponentProps {
  /**
   * @description 间距方向
   * @default 'horizontal'
   */
  direction?: Direction
  /**
   * @description 水平对齐方式
   */
  align?: Align
  /**
   * @description 换行
   * @default true
   */
  wrap?: boolean
  /**
   * @description 间隔大小
   * @default 10px
   * @example '10px 5px': 垂直间隔10px, 水平间隔5px
   */
  gap?: number | string
}

/**
 * @description flex 布局
 * @param {SpaceProps} props
 * @returns {React.ReactNode}
 */
export function Space(props: SpaceProps): React.ReactNode {
  const {
    direction = 'horizontal',
    className,
    style,
    children,
    align = 'start',
    wrap = true,
    gap = 10,
    ...rest
  } = props

  const newStyles: CSSProperties = {
    gap,
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    justifyContent: FlexAlign[align],
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...style,
  }

  if (direction === 'vertical') {
    newStyles['alignItems'] = FlexAlign[align]
  }

  return (
    <div
      className={classNames('au-space', className)}
      style={newStyles}
      {...rest}>
      {children}
    </div>
  )
}

export function ColumnCount(props: ComponentProps & { column?: number }) {
  const { className, column, children, ...rest } = props
  if (column && column > 0) {
    if (rest.style) {
      rest.style.columnCount = column
    } else {
      rest.style = {
        columnCount: column,
      }
    }
  }

  return (
    <div className={classNames('au-column-count', className)} {...rest}>
      {children}
    </div>
  )
}

export function ColumnCountItem(
  props: ComponentProps & { title?: React.ReactNode },
) {
  const { className, title, children, ...rest } = props
  return (
    <div className={classNames('au-column-count-item', className)} {...rest}>
      {title && <h2 className='au-column-count-item-title'>{title}</h2>}
      {children}
    </div>
  )
}

ColumnCount.Item = ColumnCountItem
