/* eslint-disable*/
import React, { FC, forwardRef, Ref, useId, useState } from "react"
import { FormContext } from './context'
import { useSetState } from '../assets'
import type { FormRecord } from './type'
import { getFormValues } from './util'
import './index.less'
import { UseForm } from "./hook"

export * from './hook'
export { Item as FormItem } from './item'
import type { ItemProps as FormItemProps } from './item'
import { ObjectType } from "abandonjs"
import { isUndefined } from "asura-eye"

export type { FormItemProps }

export interface FormProps {
	form?: UseForm
	layout?: 'horizontal' | 'vertical' | 'inline'
	onReset?: (e?: any) => void
	onSubmit?: (values: FormRecord) => void
	[key: string]: any
}

type FieldProps = ObjectType<Partial<FormItemProps>>

function handleResetForm(names: string[], fields: FieldProps) {
	names.forEach(name => {
		const { onFormItemChange } = fields[name]
		onFormItemChange && onFormItemChange('', 'reset')
	})
}

function useFormValidator(values: any, fields: ObjectType<Partial<FormItemProps>>) {
	for (let name in values) {
		const { onFormItemChange } = fields[name]
		const result = onFormItemChange && onFormItemChange(values[name])
	}
	return values
}

// 没有编辑过的控件无法辨别''和undefined
export const Form: FC<FormProps> = forwardRef((props: FormProps, ref: Ref<HTMLFormElement>) => {

	const { name = useId(), children, onSubmit, onReset, form, ...rest } = props
	const [values, setValues] = (!form || isUndefined(form.useValue)) ? useSetState<FormRecord>({}) : form.useValue
	const [fields, register] = useSetState<ObjectType<Partial<FormItemProps>>>({})

	return <FormContext.Provider
		value={{ values, setValues, register }}>
		<form
			name={name}
			ref={ref || form?.ref}
			onReset={(e: any) => {
				// console.log(nameList)
				handleResetForm(Object.keys(fields), fields)
				const newRecord: FormRecord = {}
				Object.keys(fields).forEach(name => {
					newRecord[name] = undefined
				})
				setValues(newRecord)
				onReset && onReset(e)
			}}
			onSubmit={(e: any) => {
				e.preventDefault()
				// onSubmit && onSubmit(useFormValidator(getFormValues(e), fields))
				onSubmit && onSubmit(useFormValidator(values, fields))
			}}
			{...rest}
		>
			{children}
		</form>
	</FormContext.Provider>
})