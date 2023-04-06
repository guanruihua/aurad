/* eslint-disable*/
import React, { useEffect, useRef } from "react"
import { classNames } from 'harpe'
import { InputProps, InputChangeEvent } from './type'
import './index.less'

export type * from './type'

export function Input(props: InputProps) {

	const inputRef = useRef<HTMLInputElement>(null)
	const { className, onChange, ...rest } = props

	return (<input
		ref={inputRef}
		className={classNames("au-input", className)}
		onChange={(e: InputChangeEvent) => {
			onChange && onChange(e)
		}}
		{...rest}
	/>)
}