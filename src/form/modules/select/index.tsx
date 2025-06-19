import React from "react"
import { classNames } from 'harpe'
import { OneSelect, MultipleSelect } from './components'
import { SelectProps } from './type'
import './style/index.less'
import './style/night.less'

export type Select = SelectProps

export function Select(props: Select) {
	const { mode, className, ...rest } = props
	if (mode == 'multiple') {
		return <MultipleSelect
			className={classNames('au-select', className)}
			{...rest}
		/>
	}
	return <OneSelect
		className={classNames('au-select', className)}
		{...rest}
	/>
}

Select.Option = Option