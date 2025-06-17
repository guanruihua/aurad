import { ClassNameType } from 'harpe'
import React from 'react'

export type DivProps = {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>

export type SpanProps = {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'>

export type PProps = {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className'>

export type DataListObjectProps = {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLDataListElement>, 'className'>


export type UListProps = {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
  items?: (string | DataListObjectProps)[]
} & Omit<React.HTMLAttributes<HTMLUListElement>, 'className'>

export type OListProps = {
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
  items?: (string | DataListObjectProps)[]
} & Omit<React.HTMLAttributes<HTMLOListElement>, 'className'>
