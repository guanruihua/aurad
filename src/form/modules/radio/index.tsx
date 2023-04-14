import React, { useState } from "react"
import { classNames } from "harpe"
import { isUndefined } from "asura-eye"
import { Group } from './group'
import type { RadioGroupContextProps, RadioProps } from './type'
import { RadioGroupContext } from './context'
import { equal, stringify } from 'abandonjs'
import './index.less'
import { Icon } from "@/icon"

export * from './type'

export function RadioCore<T>(props: RadioProps<T>) {

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