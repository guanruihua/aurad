import React from "react"
import { classNames } from 'harpe'
import './index.less'
import { setDefault } from "../util"
import type { InputTextProps } from './type'

export function InputText(props: InputTextProps) {

	const getNewProps = () => {
		const { mode = 'text', className, ...rest } = props
		const newProps: InputTextProps = {
			inputMode: "text",
			className: classNames("au-input", className as any),
			...rest
		}

		setDefault(newProps)

		return newProps
	}

	return <input {...getNewProps()} />

}