/* eslint-disable*/
import React, { forwardRef, Ref } from "react"
import { FormContext } from './context'
import { useSetState } from '../assets'
import { Item } from './item'
import type { FormRecord } from './type'
import { getFormValues } from './util'
import './index.less'

export * from './hook'
export interface FormProps {
	form?: any
	onReset?: (e?: any) => void
	onSubmit?: (values: FormRecord) => void
	[key: string]: any
}

export const Form: any = forwardRef((props: FormProps, ref: Ref<any>) => {

	const { children, onSubmit, onReset, form = {}, ...rest } = props
	const [values, setValues] = useSetState<FormRecord>({})

	return <FormContext.Provider
		value={{ values, setValues }}>
		<form
			ref={ref || form.ref}
			onReset={(e: any) => {
				onReset && onReset(e)
			}}
			onSubmit={(e: any) => {
				e.preventDefault()
				onSubmit && onSubmit(getFormValues(e))
			}}
			{...rest}
		>
			{children}
		</form>
	</FormContext.Provider>
})

Form.Item = Item