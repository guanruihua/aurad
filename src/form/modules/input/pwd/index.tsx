import React from "react"
import { classNames } from 'harpe'
import { setDefault } from "../util"
import type { InputPasswordProps } from './type'
// import './index.less'

export function InputPassword(props: InputPasswordProps) {

	const getNewProps = () => {
		const { mode = 'text', className, ...rest } = props
		const newProps: InputPasswordProps = {
			inputMode: "text",
			className: classNames("au-input", className as any),
			...rest
		}

		setDefault(newProps)

		return newProps
	}

	return <input {...getNewProps()} />

}