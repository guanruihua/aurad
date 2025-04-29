import { ClassNameType } from 'harpe'
import { ChangeEvent } from 'react'

type InputMode = 'text' | 'number' | 'tags' | 'password' | 'pwd' | 'textarea'

type excludeInputType =
  | 'children'
  | 'style'
  | 'defaultChecked'
  | 'value'
  | 'defaultValue'
  | 'className'

// type InputValue =
//   | number
//   | string
//   | number[]
//   | string[]
//   | {
//       id?: string | number
//       label?: string | React.ReactNode
//       value?: string | number
//     }[]

export interface InputProps<T>
  extends Omit<React.HTMLAttributes<HTMLInputElement>, excludeInputType> {
  value?: T
  defaultValue?: T
  type?: InputMode
	className?: ClassNameType
	[key: string]: any
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement>
