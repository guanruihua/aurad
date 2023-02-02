import { ComponentBaseProps } from '../assets'

export interface SelectProps extends ComponentBaseProps {
	prefix?: string
	value?: string | string[]
	defaultValue?: string | string[]
	disabled?: boolean
	options?: { value: string, label: string }[]
	mode?: "multiple" | "simple"
	children?: any
	open?: boolean
	placeholder?: string
	/**
	 * @description 结合Form组件使用
	 */
	name?: string
	[key: string]: any
}