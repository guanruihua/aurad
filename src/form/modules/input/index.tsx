/* eslint-disable*/
import React from "react"
import { classNames } from 'harpe'
import { InputProps, InputChangeEvent } from './type'
import './index.less'

export * from './object'
export * from './type'

export function Input(props: InputProps) {

	const { className, onChange, ...rest } = props
	
	return (<input
		className={classNames("au-input", className)}
		onChange={(e: InputChangeEvent) => {
			onChange && onChange(e)
		}}
		{...rest}
	/>)
}