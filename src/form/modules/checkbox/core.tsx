import React, { useState } from "react"
import { classNames } from "harpe"
import { Icon } from '@/icon'
import { isUndefined } from "asura-eye"
import type { CheckboxItemProps } from './type'

export function CheckboxCore(props: CheckboxItemProps) {

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