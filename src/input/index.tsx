import React from "react"
import { classNames } from 'harpe'
import './index.less'
import { InputProps } from './type'

export type { InputProps }

export function Input(props: InputProps) {
	const { className, ...rest } = props
	return (<input className={classNames("au-input", className)} {...rest as any} />)
}



