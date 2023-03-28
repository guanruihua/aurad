import React from "react";
import { InputProps } from '@/input/type'

export interface InputNumberProps extends InputProps {
	[key: string]: any
}

export function InputNumber(props: InputNumberProps) {
	console.log(props)
	return <div></div>
}