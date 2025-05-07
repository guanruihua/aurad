import { ClassNameType } from 'harpe'
import React from 'react'

export interface DivProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  children?: React.ReactNode
}

export interface SpanProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'> {
  className?: ClassNameType
  children?: React.ReactNode
}
