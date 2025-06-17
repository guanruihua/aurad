import React from 'react'
import { classNames, ClassNameType } from 'harpe'
import './index.less'

export interface FlexProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  row?: boolean
  column?: boolean
  /**
   * @description 水平对齐方式
   */
  start?: boolean
  /**
   * @description 水平对齐方式
   */
  end?: boolean
  /**
   * @description 水平对齐方式
   */
  center?: boolean
  /**
   * @description 垂直对齐方式
   */
  alginCenter?: boolean
  /**
   * @description 水平对齐方式
   */
  between?: boolean
  /**
   * @description 水平对齐方式
   */
  around?: boolean
  /**
   * @description 不换行
   */
  nowrap?: boolean

  /**
   * @description 间隔大小
   * @default 10px
   * @example '10px 5px': 垂直间隔10px, 水平间隔5px
   */
  gap?: number | string
  [key: string]: any
}

export function Flex(props: FlexProps) {
  const {
    row,
    column,
    start,
    end,
    center,
    alginCenter,
    between,
    around,
    nowrap,
    className,
    gap,
    style = {},
    children,
    ...rest
  } = props

  return (
    <div
      className={classNames(
        'au-flex',
        {
          row,
          column,
          start,
          end,
          center,
          alginCenter,
          between,
          around,
          nowrap,
        },
        className,
      )}
      style={{
        gap,
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}
