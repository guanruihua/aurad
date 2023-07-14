import React from "react"
import { FormContext } from './context'
import type { Rule, UseForm } from './hook/type'
import { useForm } from "./hook"
import { ComponentProps } from '@/assets'
import { FormItem } from './item'
import './index.less'
import { ObjectType, toString } from "abandonjs"

export type FormHandle =
	((form: UseForm) => void | Promise<void>)
	| (() => void | Promise<void>)

export interface FormProps extends ComponentProps {
	form?: UseForm
	layout?: 'horizontal' | 'vertical' | 'inline'
	onReset?: FormHandle
	onSubmit?: FormHandle
	rules?: Record<string, Rule>
	initialValues?: ObjectType<any>
	[key: string]: any
}

export function Form(props: FormProps) {
	const { children, initialValues, onSubmit, onReset, form = useForm(), ...rest } = props

	React.useEffect(() => {
		if (initialValues) {
			form.setInitialValues(initialValues)
			form.setValues(initialValues)
		}
	}, [toString(initialValues)])


	return <FormContext.Provider
		value={{ __form__: form }}
	>
		<form
			noValidate
			onReset={(e) => {
				if (onReset) {
					onReset(form)
				} else {
					form.resetFields()
				}
			}}
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit && onSubmit(form)
			}}
			{...rest}
		>
			{children}
		</form>
	</FormContext.Provider>

}

Form.Item = FormItem