import React from "react"
import { classNames } from 'harpe'
import { InputProps } from '../input/type'
import './index.less'

export interface InputNumberProps extends InputProps {
	/**
	 * @default 'number'
	 */
	formValueType?: 'number' | 'string' | string
	[key: string]: any
}

export function InputNumber(props: InputNumberProps) {
	const {
		className,
		valueType = 'number',
		onChange = () => { },
		...rest
	} = props

	return (
		<input
			type="number"
			inputMode="decimal"
			className={classNames("au-input-number", className)}
			onChange={onChange}
			{...rest as React.InputHTMLAttributes<HTMLInputElement>} />
	)
}