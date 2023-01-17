/* eslint-disable*/
import React from "react"
import { FormContext } from './context'
import { useSetState } from '../assets'
import { Item } from './item'
import type { FormRecord } from './type'
import { getFormValues } from './util'
import './index.less'

export * from './hook'
export interface FormProps {
	form?: any
	onSubmit?: (values: FormRecord) => void
	[key: string]: any
}

export function Form(props: FormProps) {

	const { children, onSubmit, form, ...rest } = props
	const [values, setValues] = useSetState<FormRecord>({})

	// console.log({ form })

	return <FormContext.Provider value={{ values, setValues }}>
		<form
			ref={form}
			// ref={ref => form=ref}
			// encType="application/x-www-form-urlencoded"
			onReset={(e: any) => {
				console.log(e.target.elements)
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
}

Form.Item = Item