import React, { useState } from 'react'
import type {
	CheckboxGroupContextProps,
	CheckboxGroupProps,
	CheckboxProps,
	CheckboxValue
} from './type'
import { CheckboxGroupContext } from './context'
import { equal } from 'abandonjs'
import { isEffectArray, isEffectObject, isUndefined } from 'asura-eye'
import { Checkbox } from '.'

export function Group(props: CheckboxGroupProps) {

	const { options, children, value, defaultValue = [], onChange: originOnChange } = props

	const [groupValue, updateGroupValue] = useState<CheckboxValue[]>(isUndefined(value) ? defaultValue : value)

	const onChange = (value: CheckboxValue[]) => {
		if (!originOnChange) return;
		const event = {
			target: {
				value
			}
		}
		originOnChange(event)
	}

	const setGroupValue = (
		checkedStatus: CheckboxValue,
		itemProps: CheckboxProps
	) => {

		const { setCheckedStatus, value } = itemProps
		if (isUndefined(value)) return;
		setCheckedStatus(checkedStatus)
		if (groupValue.includes(value)) {
			const newGroupValue: CheckboxValue[] = groupValue.filter(v => !equal(v, value))
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
		groupValue,
		setGroupValue,
	}
	const contextValue: CheckboxGroupContextProps = {
		name: 'CheckboxGroupContext',
		groupValue,
		setGroupValue,
		groupProps,
	}

	return (<CheckboxGroupContext.Provider value={contextValue}>
		{isEffectArray(options) && options.map(
			(item: string | number | CheckboxProps, index: number) => {

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