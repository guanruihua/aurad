import React, { useState } from 'react'
import type { CheckboxGroupContextProps, CheckboxGroupProps, CheckboxProps, CheckboxValue } from './type'
import { CheckboxGroupContext } from './context'
import { equal } from 'abandonjs'
import { isEffectArray, isEffectObject, isUndefined } from 'asura-eye'
import { Checkbox } from '.'

export function Group<T = any>(props: CheckboxGroupProps<T>) {

	const { options, children, value, defaultValue = [], onChange } = props

	const [groupValue, updateGroupValue] = useState<CheckboxValue<T>[]>(isUndefined(value) ? defaultValue : value)

	const setGroupValue = (
		checkedStatus: CheckboxValue<T>,
		itemProps: CheckboxProps<T>
	) => {
		const { setCheckedStatus, value } = itemProps
		if (isUndefined(value)) return;
		setCheckedStatus(checkedStatus)
		if (groupValue.includes(value)) {
			const newGroupValue = groupValue.filter(v => !equal(v, value))
			updateGroupValue(newGroupValue)
			onChange && onChange(newGroupValue)
			return;
		}

		const newGroupValue = groupValue.concat(value)
		updateGroupValue(newGroupValue)
		onChange && onChange(newGroupValue)
	}



	const groupProps = {
		...props,
		groupValue, setGroupValue,
	}
	const contextValue: CheckboxGroupContextProps<T> = {
		name: 'CheckboxGroupContext',
		groupValue, setGroupValue,
		groupProps,
	}

	return (<CheckboxGroupContext.Provider value={contextValue}>
		{isEffectArray(options) && options.map((item: string | number | CheckboxProps<T>, index: number) => {
			const key = 'checkbox-option-' + index
			
			if (isEffectObject(item)) {
				return <Checkbox key={key} {...item} />
			}

			return <Checkbox
				key={key}
				label={item}
				value={item} />
		})}
		{children}
	</CheckboxGroupContext.Provider>)
}