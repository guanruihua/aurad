import type { CSSProperties, ReactNode } from 'react'
import { ClassNameType } from 'harpe'

export interface ComponentProps {
  /**
   * @description
   * @default ''
   */
  prefixCls?: string
  className?: ClassNameType
  style?: CSSProperties
  children?: ReactNode | any
  [key: string]: any
}
