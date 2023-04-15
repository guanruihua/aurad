import { ReactNode } from 'react'
import { ComponentProps } from '@/assets'

export interface SelectProps extends ComponentProps {
	prefix?: string
	value?: string | string[]
	defaultValue?: string | string[]
	disabled?: boolean
	options?: { value: string, label: string }[]
	mode?: "multiple" | "simple"
	children?: ReactNode
	open?: boolean
	placeholder?: string
	onChange?: (e: any) => void
	/**
	 * @description 结合Form组件使用
	 */
	name?: string
	[key: string]: any
}