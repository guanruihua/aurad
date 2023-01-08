/* eslint-disable*/
import React, { useRef, useState } from "react"
import { classNames } from "@/assets"

export interface SelectComponentProps {
	open?: boolean
	options?: { value: string, label: string }[]
	placeholder?: string
	prefix?: string
	children?: any
	[key: string]: any
}

export function SelectComponent(props: SelectComponentProps) {
	const {
		options = [],
		placeholder = '',
		open = false,
		defaultValue,
		disabled = false
	} = props

	const [isHover, setHover] = useState<boolean>(open)
	const [isLeave, setLeave] = useState<boolean>(false)
	const [selectValue, setSelectValue] = useState<string>(defaultValue)

	console.log({ isHover, isLeave, selectValue })

	return <div className={classNames("select", { hidden: disabled })}>
		<div className={classNames("select-input", { isHover: isHover && !disabled })}>
			<input
				key={selectValue}
				placeholder={placeholder}
				value={selectValue}
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