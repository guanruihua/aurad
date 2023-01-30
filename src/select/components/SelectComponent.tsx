/* eslint-disable*/
import React, { useRef, useState } from "react"
import { classNames } from "@/assets"
import { SelectProps } from '../type'
import { isArray } from "check-it-type"

const getSelectValue = (list: { value: string, label: string }[], value?: string) => {
	if (value === undefined) return undefined
	for (let i = 0; i < list.length; i++) {
		if (list[i].value === value) return list[i].label
	}
}

export function SelectComponent(props: SelectProps) {
	const {
		options = [],
		placeholder = '',
		open = false,
		defaultValue,
		disabled = false
	} = props

	const [isHover, setHover] = useState<boolean>(open)
	const [isLeave, setLeave] = useState<boolean>(false)

	const [selectValue, setSelectValue] = useState<string | undefined>(isArray(defaultValue) ? defaultValue[0] : defaultValue)

	// console.log({ isHover, isLeave, selectValue })

	return <div className={classNames("select", { hidden: disabled })}>
		<div className={classNames("select-input", { isHover: isHover && !disabled })}>
			<input
				key={selectValue}
				placeholder={placeholder}
				// value={selectValue}
				value={getSelectValue(options, selectValue)}
				onFocus={() => setHover(true)}
				onClick={() => setHover(true)}
				onMouseLeave={() => setLeave(true)}
				onBlur={() => isLeave && setHover(false)}
				readOnly
				unselectable="on" />
		</div>
		{!disabled && <div
			className={classNames('select-options', { 'select-options-hover': open || isHover })}
			onMouseEnter={() => setLeave(false)}
			onMouseLeave={() => setLeave(true)}
		>
			{options?.map((item, index) => {
				const { value, label } = item
				return <div
					key={index.toString()}
					onClick={() => {
						setSelectValue(value)
						setHover(false)
					}}
					className={classNames('select-options-item', { 'selected': selectValue === value })}>
					{label}
				</div>
			})}
		</div>}
	</div>
}