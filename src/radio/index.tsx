import React, { useState } from "react"
import { classNames } from "harpe"
import { isUndefined } from "asura-eye"
import { Group } from './group'
import type { RadioGroupContextProps, RadioProps } from './type'
import { RadioGroupContext } from './context'
import { equal, stringify } from 'abandonjs'
import './index.less'

export * from './type'

export function RadioCore<T>(props: RadioProps<T>) {

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
		<span className={classNames('au-radio', className)}>
			<input
				name={name}
				style={{ visibility: 'hidden' }}
				type="radio"
				onChange={() => { handleClick() }}
				checked={checkedStatus} />
			<div
				className={classNames("au-radio-icon", { 'au-radio-select': checkedStatus })}
				onClick={() => { handleClick() }} />
			<label onClick={() => handleClick()}>{children || label}</label>
		</span>
	)

}

export function Radio<T>(props: RadioProps<T>) {
	return <RadioGroupContext.Consumer>
		{(handler: RadioGroupContextProps) => {
			if (handler.name) {
				const {
					groupValue, setGroupValue,
					groupProps = {}
				} = handler
				const { value } = props
				const newProps = { ...props, setGroupValue, groupProps }
				newProps.checked = equal(groupValue, value)
				return (<RadioCore key={stringify(groupValue)} {...newProps} />)
			}
			return (<RadioCore {...props} />)
		}}
	</RadioGroupContext.Consumer>
}

Radio.Group = Group