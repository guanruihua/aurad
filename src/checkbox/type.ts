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
	 * @description 当前控制值, 若不指定则为name的值, name若不指定就为checked状态
	 */
	value?: CheckboxValue<T>
	/**
	 * @description 
	 */
	label?: string
	disabled?: boolean
	/**
	 * @description onChange 前触发
	 * @param checked 
	 * @param value 
	 * @returns 
	 * 废弃掉
	 */
	onChangeBefore?: (checked: boolean, value: CheckboxValue<T>) => { checked: boolean, value: boolean | T } | boolean | void
	/**
	 * @description 值发生改变而触发
	 * @param checked 
	 * @param value 
	 * @returns 
	 */
	onChange?: (checked: boolean, value: CheckboxValue<T>) => void | { checked: boolean, value: boolean | T } | boolean

	[key: string]: any
}


/**
 * @description 复选框组属性
 */
export interface CheckboxGroupProps<T = any> extends ComponentProps {
	value?: CheckboxValue<T>[]
	onChange?: (value: CheckboxValue<T>[]) => void
	defaultValue?: CheckboxValue<T>[]
	options?: string[] | number[] | CheckboxProps<T>[]
	children?: ReactNode
}


export interface CheckboxGroupContextProps<T = any> {
	name: string
	groupProps?: CheckboxGroupProps<T>
	groupValue: (string | boolean | any)[]
	setGroupValue: (value: (string | boolean | T)[]) => void
	registerCheckbox: (itemProps: CheckboxProps<T>) => void
	[key: string]: any
}