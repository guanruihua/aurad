
import React from "react"
import type { InputProps } from './type'

import { InputText } from "./text"
import { InputTag } from "./tag"
import { InputNumber, InputNumberProps } from "./number"

export * from './number'
export * from './type'

export function Input(props: InputProps) {

	const { mode = 'text', ...rest } = props

	switch (mode) {
		case 'number':
			return <InputNumber {...rest as InputNumberProps} />
		case 'tags':
			return <InputTag {...rest} />
		default:
			return <InputText {...rest} />
	}
}