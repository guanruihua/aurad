/* eslint-disable*/
import React from "react"
import { classNames } from '@/assets'
import RcSelect, { Option, SelectProps as RcSelectProps } from 'rc-select'
import './index.less'

interface SelectProps extends RcSelectProps {
	children?: any
	[key: string]: any
}

export function Select(props: SelectProps) {
	const { className, children, ...rest } = props
	return <RcSelect
		className={classNames('zero-select', className)}
		{...rest}
	>
		{children}
	</RcSelect>
}

Select.Option = Option