import { ClassNameType } from 'harpe'
import React from 'react'

interface ExtendElement {
  disabled?: boolean
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
}

export type DivProps = ExtendElement &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>

export type SpanProps = ExtendElement &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'>

export type PProps = ExtendElement &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className'>

export type DataListObjectProps = ExtendElement &
  Omit<React.HTMLAttributes<HTMLDataListElement>, 'className'>

export type UListProps = {
  items?: (string | DataListObjectProps)[]
} & ExtendElement &
  Omit<React.HTMLAttributes<HTMLUListElement>, 'className'>

export type OListProps = {
  items?: (string | DataListObjectProps)[]
} & ExtendElement &
  Omit<React.HTMLAttributes<HTMLOListElement>, 'className'>
