import React, { useState } from "react"
import { classNames } from 'harpe'
import { SelectProps } from '../type'
import { isArray } from "asura-eye"
import { getSelectValue } from '../util'

export function SelectComponent(props: SelectProps) {

	const {
		className,
		name, 
		options = [],
		placeholder = '',
		open = false,
		defaultValue,
		disabled = false,
		onChange,
	} = props

	const [isHover, setHover] = useState<boolean>(open)
	const [isLeave, setLeave] = useState<boolean>(false)

	const [selectValue, setSelectValue] = useState<string | undefined>(isArray(defaultValue) ? defaultValue[0] : defaultValue)

	return <div className={classNames(className, { hidden: disabled })}>
		<div className={classNames("au-select-input", { isHover: isHover && !disabled })}>
			<input
				key={selectValue}
				placeholder={placeholder}
				value={getSelectValue(options, selectValue)}
				onFocus={() => setHover(true)}
				onClick={() => setHover(true)}
				onMouseLeave={() => setLeave(true)}
				onBlur={() => isLeave && setHover(false)}
				readOnly
				unselectable="on" />
			{name && <input
				name={name}
				style={{ display: 'none' }} />}
		</div>
		{!disabled && <div
			className={classNames('au-select-options', { 'au-select-options-hover': isHover })}
			onMouseEnter={() => setLeave(false)}
			onMouseLeave={() => setLeave(true)}
		>
			{options?.map((item, index) => {
				const { value, label } = item
				return <div
					key={index.toString()}
					title={label}
					onClick={(e) => {
						onChange && onChange(e)
						setSelectValue(value)
						setHover(false)
						
					}}
					className={classNames('au-select-options-item', { 'selected': selectValue === value })}>
					{label}
				</div>
			})}
		</div>}
	</div>
}