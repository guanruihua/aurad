/* eslint-disable*/
import React, { useState } from "react"
import { classNames } from "harpe"
import './index.less'
import { Icon } from '../icon'
import { isBoolean, isObject, isUndefined } from "asura-eye"
import { Group } from './group'
import type { CheckboxGroupContextProps, CheckboxProps, CheckboxValue } from './type'
import { CheckboxGroupContext } from './context'

export * from './type'

export function CheckboxCore<T>(props: CheckboxProps<T>) {

	console.log(props)

	const {
		children,
		className,
		label,
		name,
		checked, defaultChecked = false,
		value,
		onChangeBefore, onChange
	} = props

	const [checkboxValue, setCheckboxValue] = useState<CheckboxValue<T>>(
		isUndefined(value) ? (name || true) : value
	)
	const [checkedStatus, setCheckedStatus] = useState<boolean>(
		isUndefined(checked) ? defaultChecked : checked
	)

	const handleClick = () => {
		// console.log('click')
		if (!isUndefined(checked)) return;

		if (isUndefined(onChangeBefore)) {
			const newCheckedStatus = !checkedStatus
			setCheckedStatus(newCheckedStatus)
			onChange && onChange(newCheckedStatus, checkboxValue)
			return;
		}

		const changeValue = onChangeBefore(checkedStatus, checkboxValue)
		if (isBoolean(changeValue)) {
			setCheckedStatus(changeValue)
			onChange && onChange(changeValue, checkboxValue)
			return;
		}
		if (isObject(changeValue)) {
			const { checked = checkedStatus, value = checkboxValue } = changeValue
			setCheckedStatus(checked)
			setCheckboxValue(value)
			onChange && onChange(checked, value)
			return;
		}
	}

	return (
		<span className={classNames('au-checkbox', className)}>
			<input
				name={name}
				style={{ visibility: 'hidden' }}
				type="checkbox"
				onChange={() => { handleClick() }}
				checked={checkedStatus} />
			<div
				className={classNames("au-checkbox-icon", { 'au-checkbox-select': checkedStatus })}
				onClick={() => { handleClick() }}>
				{checkedStatus && <Icon type='yes' size={12} fill='#fff' />}
			</div>
			<label onClick={() => handleClick()}>{children || label}</label>
		</span>
	)

}

export function Checkbox<T>(props: CheckboxProps<T>) {
	return <CheckboxGroupContext.Consumer>
		{(handler: CheckboxGroupContextProps) => {
			if (handler.name) {
				const {
					groupValue, setGroupValue,
					groupProps = {}, registerCheckbox
				} = handler
				registerCheckbox(props)
				const { value, name } = props
				const newProps = { ...props, setGroupValue, groupProps }
				if (
					groupValue.includes(name) ||
					groupValue.includes(value)
				) {
					newProps.checked = true
				}
				return (<CheckboxCore {...newProps} />)
			}
			return (<CheckboxCore {...props} />)
		}}
	</CheckboxGroupContext.Consumer>
}

Checkbox.Group = Group