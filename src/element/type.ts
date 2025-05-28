import { ClassNameType } from 'harpe'
import React from 'react'

export interface DivProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  children?: React.ReactNode
}

export interface SpanProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'> {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  children?: React.ReactNode
}
