import React, { FC, forwardRef, Ref, useId } from "react"
import { FormContext } from './context'
import { useSetState } from '../assets'
import type { FormRecord } from './type'
import { getFormValues } from './util'
import './index.less'
import { UseForm } from "./hook"

export * from './hook'
export { Item as FormItem } from './item'
export type { ItemProps as FormItemProps } from './item'

export interface FormProps {
	form?: UseForm
	layout?: 'horizontal' | 'vertical' | 'inline'
	onReset?: (e?: any) => void
	onSubmit?: (values: FormRecord) => void
	[key: string]: any
}

// 没有编辑过的控件无法辨别''和undefined
export const Form: FC<FormProps> = forwardRef((props: FormProps, ref: Ref<HTMLFormElement>) => {
	
	const { name = useId(), children, onSubmit, onReset, form, ...rest } = props
	const [values, setValues] = useSetState<FormRecord>({})

	return <FormContext.Provider
		value={{ fname: name, values, setValues }}>
		<form
			name={name}
			ref={ref || form?.ref}
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