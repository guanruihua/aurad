import React from "react"
import { classNames } from 'harpe'
import { InputProps, InputChangeEvent } from '../type'
import './index.less'

export function InputTag(props: InputProps) {

	const { className, onChange, ...rest } = props

	return (
		<input
			value=''
			inputMode="text"
			className={classNames("au-input-tags", className)}
			onChange={(e: InputChangeEvent) => {
				onChange && onChange(e)
			}}
			{...rest}
		/>
	)
}