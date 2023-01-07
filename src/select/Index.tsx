/* eslint-disable*/
import React from "react"
import { classNames } from '@/assets'
import { SelectComponent, MultSelectComponent } from './components'
import './style/index.less'

interface SelectProps {
	prefix?: string
	disabled?: boolean
	options?: { value: string, label: string }[]
	mode?: "multiple"
	children?: any
	[key: string]: any
}

export function Select(props: SelectProps) {
	const { mode, className, ...rest } = props
	if (mode == 'multiple') {
		return <MultSelectComponent
			className={classNames('zero-select', className)}
			{...rest}
		/>
	}
	return <SelectComponent
		className={classNames('zero-select', className)}
		{...rest}
	/>
}

Select.Option = Option