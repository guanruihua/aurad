/* eslint-disable*/
import React, { useState } from "react"
import { FormContext } from './context'
import {useSetState} from '../assets'
import { Item } from './item'
import type { FormAction, FormRecord } from './type'

export interface FormProps {
	onSubmit?: (values: FormRecord) => void
	[key: string]: any
}


export function Form(props: FormProps) {
	const { children, onSubmit } = props
	const [values, setValues] = useSetState<FormRecord>({})
	
	return <FormContext.Provider value={{ values, setValues }}>
		<form
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit && onSubmit(values)
				// console.log({ values })
			}}
		>
			{children}
		</form>
	</FormContext.Provider>
}

Form.Item = Item