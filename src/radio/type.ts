import { ReactNode } from 'react'
import { ComponentProps } from "@/assets"

export type RadioValue<T = never> = boolean | string | T

/**
 * @description 复选框属性
 */
export interface RadioProps<T = never> extends ComponentProps {
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
	value?: RadioValue<T>
	/**
	 * @description 
	 */
	label?: string | number
	disabled?: boolean
	/**
	 * @description 值发生改变而触发
	 * @param checked 
	 * @param value 
	 * @returns 
	 */
	onChange?: (checked: boolean, value?: RadioValue<T>) => void | { checked: boolean, value: boolean | T } | boolean

	[key: string]: any
}


/**
 * @description 复选框组属性
 */
export interface RadioGroupProps<T = any> extends ComponentProps {
	value?: RadioValue<T>
	onChange?: (value: RadioValue<T>) => void
	defaultValue?: RadioValue<T>
	options?: (string | number | { value: T, label: string | number } | RadioProps<T>)[]
	children?: ReactNode
}


export interface RadioGroupContextProps<T = any> {
	name: string
	groupProps?: RadioGroupProps<T>
	groupValue: RadioValue<T>
	setGroupValue: (value: RadioValue<T>, itemProps: RadioProps<T>) => void
	[key: string]: any
}