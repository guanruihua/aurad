import React, { useState } from "react"
import { classNames } from "harpe"
import { isUndefined } from "asura-eye"
import type { RadioProps } from './type'
import './index.less'
import { Icon } from "@/icon"

export function RadioCore(props: RadioProps) {

	const {
		children,
		className,
		label,
		name,
		checked, defaultChecked = false,
		value, onChange, setGroupValue,
		groupProps = {}
	} = props

	const [checkedStatus, setCheckedStatus] = useState<boolean>(
		isUndefined(checked) ? defaultChecked : checked
	)

	const isButton = (groupProps.type) && groupProps.type === 'button'

	const handleClick = () => {
		const newCheckedStatus = !checkedStatus
		const event = {
			target: {
				checked: newCheckedStatus,
				value,
			}
		}
		if (setGroupValue) {
			setGroupValue(newCheckedStatus, { value, setCheckedStatus })
			onChange && onChange(event)
			return;
		}
		if (!isUndefined(checked)) return
		setCheckedStatus(newCheckedStatus)
		onChange && onChange(event)
		return;
	}

	return (
		<span
			className={classNames('au-radio', { 'au-radio-button': isButton }, className)}
		>
			{isButton
				? <label
					className={classNames("au-radio-label", { 'au-radio-select': checkedStatus })}
					onClick={() => handleClick()}>{children || label}</label>
				: <React.Fragment>
					<input
						name={name}
						style={{ visibility: 'hidden' }}
						type="radio"
						onChange={() => { handleClick() }}
						checked={checkedStatus} />
					<div
						className={classNames("au-radio-icon", { 'au-radio-select': checkedStatus })}
						onClick={() => { handleClick() }} >
						{checkedStatus && <Icon type="radio" fill="#1890ff" />}
					</div>
					<label onClick={() => handleClick()}>{children || label}</label>
				</React.Fragment>
			}
		</span>
	)
}