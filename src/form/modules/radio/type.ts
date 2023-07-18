import { ReactNode } from 'react'
import { ComponentProps } from "@/assets"

export type RadioValue = boolean | string | any

export type RadioChangeEvent = {
	target: {
		value: RadioValue | RadioValue[]
		checked?: boolean
	}
}

/**
 * @description 复选框属性
 */
export interface RadioProps extends ComponentProps {
	/**
	 * @description input[type="radio"] 的 name 属性, 也作为非单一组件时候的 value
	 */
	name?: string
	/**
	 * @description 选中状态(默认)
	 */
	defaultChecked?: boolean
	/**
	 * @description 选中状态
	 */
	checked?: boolean
	/**
	 * @description 选中当前复选框值, 结合Radio.Group使用
	 */
	value?: RadioValue
	/**
	 * @description 
	 */
	label?: string | number
	disabled?: boolean
	/**
	 * @description 值发生改变而触发
	 * @returns 
	 */
	onChange?: (event: RadioChangeEvent) => void
	[key: string]: any
}


/**
 * @description 复选框组属性
 */
export interface RadioGroupProps extends ComponentProps {
	/**
	 * @description 单选框类型
	 * @default 'radio'
	 */
	type?: 'radio' | 'button'
	value?: RadioValue
	onChange?: (event: RadioChangeEvent) => void
	defaultValue?: RadioValue
	options?: (string | number | { value: RadioValue, label: string | number } | RadioProps)[]
	children?: ReactNode
}


export interface RadioGroupContextProps {
	name: string
	groupProps?: RadioGroupProps
	groupValue: RadioValue
	setGroupValue: (value: RadioValue, itemProps: RadioProps) => void
	[key: string]: any
}