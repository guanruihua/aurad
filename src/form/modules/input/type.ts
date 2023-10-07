import { InputHTMLAttributes, ChangeEvent } from 'react'
import { ComponentProps } from "@/assets"


type InputMode = 'text' | 'number' | 'tags'
type excludeInputType = 'children' | 'style' | 'defaultChecked' | 'value' | 'defaultValue' | 'className'

type InputValue =
	number
	| string
	| number[]
	| string[]
	| {
		id?: string | number
		label?: string | React.ReactNode
		value?: string | number
	}[]

export interface InputProps extends Omit<Partial<InputHTMLAttributes<HTMLInputElement>>, excludeInputType>, ComponentProps {
	value?: InputValue
	defaultValue?: InputValue
	mode?: InputMode
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement>