import { ReactNode } from 'react'
import { ComponentProps } from "@/assets"

export type CheckboxValue<T = never> = boolean | string | T

/**
 * @description 复选框属性
 */
export interface CheckboxProps<T = never> extends ComponentProps {
	/**
	 * @description input[type="checkbox"] 的 name 属性, 也作为非单一组件时候的 value
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
	 * @description 选中当前复选框值, 结合Checkbox.Group使用
	 */
	value?: CheckboxValue<T>
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
	onChange?: (checked: boolean, value?: CheckboxValue<T>) => void | { checked: boolean, value: boolean | T } | boolean

	[key: string]: any
}


/**
 * @description 复选框组属性
 */
export interface CheckboxGroupProps<T = any> extends ComponentProps {
	value?: CheckboxValue<T>[]
	onChange?: (value: CheckboxValue<T>[]) => void
	defaultValue?: CheckboxValue<T>[]
	options?: (string | number | { value: T, label: string | number } | CheckboxProps<T>)[]
	children?: ReactNode
}


export interface CheckboxGroupContextProps<T = any> {
	name: string
	groupProps?: CheckboxGroupProps<T>
	groupValue: CheckboxValue<T>[]
	setGroupValue: (value: CheckboxValue<T>, itemProps: CheckboxProps<T>) => void
	[key: string]: any
}