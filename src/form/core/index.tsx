import React, { FormEventHandler } from "react"
import { FormContext } from './context'
import type { FormRecord, Rule, UseForm } from './hook/type'
import { useForm } from "./hook"
import { ComponentProps } from '@/assets'
import { Item as FormItem } from './item'
import type { ItemProps as FormItemProps } from './item'
import './index.less'

export type { FormItemProps }
export * from './hook'
export * from './context'
export { Item as FormItem } from './item'

export interface FormProps extends ComponentProps {
	form?: UseForm
	layout?: 'horizontal' | 'vertical' | 'inline'
	onReset?: (e?: any) => void
	onSubmit?: (values: FormRecord) => void
	rules?: Record<string, Rule>
	[key: string]: any
}

export function Form(props: FormProps) {

	const { children, onSubmit, onReset, form, ...rest } = props
	const {
		register, useValue, resetErrorStatus,
		validateField, validStatus, validateFieldsValue,
	} = form || useForm()

	const [values, setValues, reset] = useValue

	return (<FormContext.Provider
		value={{ values, setValues, register, validateField, validStatus }}>
		<form
			onReset={(e) => {
				reset()
				resetErrorStatus()
				onReset && onReset(e)
			}}
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit && onSubmit(validateFieldsValue())
			}}
			{...rest}
		>
			{children}
		</form>
	</FormContext.Provider>)
}

Form.Item = FormItem