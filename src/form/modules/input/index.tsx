import React from "react"
import { classNames } from 'harpe'
import { InputProps, InputChangeEvent } from './type'
import './index.less'

export * from './type'

export function Input(props: InputProps) {

	const { className, onChange, ...rest } = props

	return (
		<input
			inputMode="text"
			className={classNames("au-input", className)}
			onChange={(e: InputChangeEvent) => {
				onChange && onChange(e)
			}}
			{...rest}
		/>
	)
}