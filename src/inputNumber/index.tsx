import React from "react"
import { isNumber } from "asura-eye"
import { classNames } from 'harpe'
import { InputProps } from '../input/type'
import './index.less'

export interface InputNumberProps extends Omit<InputProps, 'min' | 'max'> {
	min?: number
	max?: number
	step?: number
	[key: string]: any
}

export function InputNumber(props: InputNumberProps) {
	const { className, min, max, ...rest } = props

	if (isNumber(min)) rest.min = min.toString()
	if (isNumber(max)) rest.max = max.toString()

	return (<input type="number" className={classNames("au-input-number", className)} {...rest as any} />)
}