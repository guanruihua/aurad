import { ReactNode } from 'react'
import { ComponentProps } from "@/assets"
import { ObjectType } from 'abandonjs'

export type CheckboxValue = boolean | string | number | ObjectType

/**
 * @description 复选框属性
 */
export interface CheckboxProps extends ComponentProps {
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
	value?: CheckboxValue
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
	onChange?: (checked: boolean, value?: CheckboxValue) => void | { checked: boolean, value: boolean | CheckboxValue } | boolean

	[key: string]: any
}

export type CheckboxChangeEvent = {
	target: {
		value: CheckboxValue | CheckboxValue[]
	}
}

/**
 * @description 复选框组属性
 */
export interface CheckboxGroupProps extends ComponentProps {
	value?: CheckboxValue[]
	onChange?: (event: CheckboxChangeEvent) => void
	defaultValue?: CheckboxValue[]
	options?: (string | number | { value: CheckboxValue, label: string | number } | CheckboxProps)[]
	children?: ReactNode
}


export interface CheckboxGroupContextProps{
	name: string
	groupProps?: CheckboxGroupProps
	groupValue: CheckboxValue[]
	setGroupValue: (value: CheckboxValue, itemProps: CheckboxProps) => void
	[key: string]: any
}