import { ComponentBaseProps } from '../assets'

export interface SelectProps extends ComponentBaseProps {
	prefix?: string
	value?: string | string[]
	defaultValue?: string | string[]
	disabled?: boolean
	options?: { value: string, label: string }[]
	mode?: "multiple"
	children?: any
	open?: boolean
	placeholder?: string
	[key: string]: any
}