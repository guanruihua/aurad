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
	const { options = [], placeholder = '', open = false, defaultValue } = props
	const [isHover, setHover] = useState<boolean>(open)
	const [isLeave, setLeave] = useState<boolean>(false)
	const [selectValue, setSelectValue] = useState<string>(defaultValue)
	const selectOptionsClassName = classNames('select-options', {
		'select-options-hover': isHover
	})
	const inputRef: any = useRef(null)

	return <div className="select">
		<div>
			<input
				ref={inputRef}
				key={selectValue}
				className="select-input"
				placeholder={placeholder}
				value={selectValue}
				onFocus={() => {
					setHover(true)
				}}
				onBlur={() => {
					console.log('blur')
					isLeave && setHover(false)
				}}
				readOnly
				unselectable="on" />
		</div>
		<div className={selectOptionsClassName}
			onMouseLeave={() => setLeave(true)}
		>
			{options?.map((item, index) => {
				const { value, label } = item
				return <div
					key={index.toString()}
					onClick={() => {
						setSelectValue(value)
						inputRef.current.focus()
						// inputRef.focus()
						setHover(false)
					}}
					className={classNames('select-options-item', {
						'selected': selectValue === value
					})}>
					{label}
				</div>
			})}
		</div>
	</div>
}