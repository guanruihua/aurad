import React from "react"
import { classNames } from '@/assets'
import { SelectComponent, MultSelectComponent } from './components'
import { SelectProps } from './type'
import './style/index.less'

export type Select = SelectProps

export function Select(props: Select) {
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