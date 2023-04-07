/* eslint-disable*/
import React, { FC, forwardRef, Ref } from "react"
import { FormContext } from './context'
import type { FormRecord, UseForm } from './type'
import './index.less'
import { useForm } from "./hook"

export * from './hook'
export { Item as FormItem } from './item'
import type { ItemProps as FormItemProps } from './item'

export type { FormItemProps }

export interface FormProps {
	form?: UseForm
	layout?: 'horizontal' | 'vertical' | 'inline'
	onReset?: (e?: any) => void
	onSubmit?: (values: FormRecord) => void
	[key: string]: any
}

// 没有编辑过的控件无法辨别''和undefined
export const Form: FC<FormProps> = forwardRef((props: FormProps, ref: Ref<HTMLFormElement>) => {

	const { children, onSubmit, onReset, form, ...rest } = props
	const {
		register, useValue,  resetErrorStatus,
		validateField, validStatus, validateFieldsValue,
	} = form || useForm()
	const [values, setValues, reset] = useValue

	return <FormContext.Provider
		value={{ values, setValues, register, validateField, validStatus }}>
		<form
			onReset={(e: any) => {
				reset()
				resetErrorStatus()
				onReset && onReset(e)
			}}
			onSubmit={(e: any) => {
				e.preventDefault()
				onSubmit && onSubmit(validateFieldsValue())
			}}
			{...rest}
		>
			{children}
		</form>
	</FormContext.Provider>
})