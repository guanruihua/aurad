import React from "react"
import { classNames } from 'harpe'
import { InputProps } from '../input/type'
import './index.less'

export interface InputNumberProps extends InputProps {
	[key: string]: any
}

export function InputNumber(props: InputNumberProps) {
	const { className, ...rest } = props
	return (<input className={classNames("au-input-number", className)} {...rest as any} />)
}
