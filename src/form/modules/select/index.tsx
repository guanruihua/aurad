import React from "react"
import { classNames } from 'harpe'
import { SelectComponent, MultipleSelectComponent } from './components'
import { SelectProps } from './type'
import './style/index.less'

export type Select = SelectProps

export function Select(props: Select) {
	const { mode, className, ...rest } = props
	if (mode == 'multiple') {
		return <MultipleSelectComponent
			className={classNames('au-select', className)}
			{...rest}
		/>
	}
	return <SelectComponent
		className={classNames('au-select', className)}
		{...rest}
	/>
}

Select.Option = Option