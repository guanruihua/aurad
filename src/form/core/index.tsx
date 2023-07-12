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


export type FormHandle =
	((form: UseForm) => void | Promise<void>)
	| (() => void | Promise<void>)
export interface FormProps extends ComponentProps {
	form?: UseForm
	layout?: 'horizontal' | 'vertical' | 'inline'
	onReset?: FormHandle
	onSubmit?: FormHandle
	rules?: Record<string, Rule>
	[key: string]: any
}

export function Form(props: FormProps) {

	const { children, onSubmit, onReset, form = useForm(), ...rest } = props

	const {
		register, useValue, resetErrorStatus,
		validateField, validStatus
	} = form

	const [values, setValues, reset] = useValue

	return (<FormContext.Provider
		value={{ values, setValues, register, validateField, validStatus }}>
		<form
			noValidate
			onReset={(e) => {
				reset()
				resetErrorStatus()
				onReset && onReset(form)
			}}
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit && onSubmit(form)
			}}
			{...rest}
		>
			{children}
		</form>
	</FormContext.Provider>)
}

Form.Item = FormItem