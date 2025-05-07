import { ClassNameType } from 'harpe'
import React from 'react'

export interface DivProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  // style?: React.CSSProperties
  children?: React.ReactNode
}
