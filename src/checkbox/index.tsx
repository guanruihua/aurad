/* eslint-disable*/
import React, { useState } from "react"
import { classNames } from "harpe"
import './index.less'
import { Icon } from '../icon'
import { isUndefined } from "asura-eye"
import { Group } from './group'
import type { CheckboxGroupContextProps, CheckboxProps } from './type'
import { CheckboxGroupContext } from './context'

export * from './type'

export function CheckboxCore<T>(props: CheckboxProps<T>) {

	const {
		children,
		className,
		label,
		name,
		checked, defaultChecked = false,
		value, onChange, setGroupValue,
	} = props

	const [checkedStatus, setCheckedStatus] = useState<boolean>(
		isUndefined(checked) ? defaultChecked : checked
	)

	const handleClick = () => {
		const newCheckedStatus = !checkedStatus
		if (setGroupValue) {
			setGroupValue(newCheckedStatus, { value, setCheckedStatus })
			onChange && onChange(newCheckedStatus, value)
			return;
		}
		if (!isUndefined(checked)) return
		setCheckedStatus(newCheckedStatus)
		onChange && onChange(newCheckedStatus, value)
		return;
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
					groupProps = {}
				} = handler
				const { value } = props
				const newProps = { ...props, setGroupValue, groupProps }
				newProps.checked = groupValue.includes(value)
				return (<CheckboxCore {...newProps} />)
			}
			return (<CheckboxCore {...props} />)
		}}
	</CheckboxGroupContext.Consumer>
}

Checkbox.Group = Group