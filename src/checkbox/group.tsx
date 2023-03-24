/* eslint-disable*/
import React, { useState } from 'react'
import type { CheckboxGroupContextProps, CheckboxGroupProps, CheckboxProps, CheckboxValue } from './type'
import { CheckboxGroupContext } from './context'
import { isNoEmpty, isUndefined } from 'asura-eye'

export function Group<T = any>(props: CheckboxGroupProps<T>) {

	const { children, value, defaultValue = [] } = props

	const [groupValue, updateGroupValue] = useState<CheckboxValue<T>[]>(isUndefined(value) ? defaultValue : value)
	const privateCheckboxState = []
	const privateCheckboxProps = []

	const setGroupValue = (value: CheckboxValue<T>[]) => {
		updateGroupValue(value)
	}


	const registerCheckbox = (itemProps: CheckboxProps<T>) => {
		// console.log(itemProps)
		privateCheckboxProps.push(itemProps)
		const { checked, defaultChecked, name, value } = itemProps
		const checkboxStatus = isUndefined(checked) ? defaultChecked : checked
		if (checkboxStatus) {
			isNoEmpty(name) && privateCheckboxState.push(name)
			isNoEmpty(value) && privateCheckboxState.push(value)
		}
		return
	}

	const groupProps = {
		...props,
		groupValue, setGroupValue,
	}
	const contextValue: CheckboxGroupContextProps<T> = {
		name: 'CheckboxGroupContext',
		groupValue, setGroupValue,
		groupProps,
		registerCheckbox,
	}

	return (<CheckboxGroupContext.Provider value={contextValue}>
		{children}
	</CheckboxGroupContext.Provider>)
}