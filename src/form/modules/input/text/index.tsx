import React from "react"
import { classNames } from 'harpe'
import { InputProps } from '../type'
import './index.less'
import { setDefault } from "../util"

export function InputText(props: InputProps) {

	const getNewProps = () => {
		const { mode = 'text', className, ...rest } = props
		const newProps: InputProps = {
			inputMode: "text",
			className: classNames("au-input", className),
			...rest
		}

		setDefault(newProps)

		return newProps
	}

	return <input {...getNewProps()} />

}