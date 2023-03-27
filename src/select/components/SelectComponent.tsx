import React, { RefObject, useEffect, useRef, useState } from "react"
import { classNames } from 'harpe'
import { SelectProps } from '../type'
import { isArray } from "asura-eye"
import { getSelectValue } from '../util'

export function SelectComponent(props: SelectProps) {

	const {
		className,
		name, formName,
		options = [],
		placeholder = '',
		open = false,
		defaultValue,
		disabled = false,
		onChange,
	} = props
	const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

	const [isHover, setHover] = useState<boolean>(open)
	const [isLeave, setLeave] = useState<boolean>(false)

	const [selectValue, setSelectValue] = useState<string | undefined>(isArray(defaultValue) ? defaultValue[0] : defaultValue)

	useEffect(() => {
		if (formName === undefined || name == undefined) return;
		(window as any)[`${formName}__${name}`] = (value: any) => {
			console.log('aaa', formName, name, value, ref)
		}
		return () => {
			delete (window as any)[`${formName}__${name}`]
		}
	}, [ref.current])

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
				ref={ref}
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
					onClick={() => {
						console.log(ref)
						onChange && onChange(ref)
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