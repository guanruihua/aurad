import type { CSSProperties, ReactNode } from 'react'
import { ClassNameType } from 'harpe'

export interface ComponentProps
  extends Omit<React.BaseHTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * @description
   * @default ''
   */
  prefixCls?: string
  className?: ClassNameType
  style?: CSSProperties
  children?: ReactNode | string | any
  [key: string]: any
}
