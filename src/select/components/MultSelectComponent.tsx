/* eslint-disable*/
import React, { useRef, useState } from "react"
import { classNames, useSetState } from "@/assets"

export interface MultSelectComponentProps {
	open?: boolean
	options?: { value: string, label: string }[]
	placeholder?: string
	prefix?: string
	children?: any
	[key: string]: any
}

export function MultSelectComponent(props: MultSelectComponentProps) {
	const { options = [], placeholder = '', open = false, defaultValue } = props
	const [isHover, setHover] = useState<boolean>(open)

	const [isLeave, setLeave] = useSetState<Record<string, boolean>>({ input: false, options: false })

	const [selectValues, setSelectValues] = useState<string[]>([].concat(defaultValue))
	const selectOptionsClassName = classNames('select-options', {
		'select-options-hover': isHover
	})
	const inputRef: any = useRef(null)

	return <div
		className="select"
	>
		<div>
			<input
				onMouseLeave={() => setLeave({ input: true })}
				onMouseEnter={() => setLeave({ input: false })}
				ref={inputRef}
				key={selectValues.join(',')}
				className="select-input"
				placeholder={placeholder}
				value={selectValues.join(',')}
				onClick={() => {
					setLeave({ input: true })
					setHover(true)
				}}
				onBlur={() => {
					!Object.values(isLeave).includes(false) && setHover(false)
				}}
				readOnly
				unselectable="on" />
		</div>
		<div className={selectOptionsClassName}
			onMouseLeave={() => setLeave({ options: true })}
			onMouseEnter={() => setLeave({ options: false })}
		>
			{options?.map((item, index) => {
				const { value, label } = item
				return <div
					tabIndex={index + 999}
					key={index.toString()}
					onBlur={() => {
						!Object.values(isLeave).includes(false) && setHover(false)
					}}
					onClick={() => {
						setSelectValues(selectValues.concat(value))
					}}
					className={classNames('select-options-item', {
						'selected': selectValues.includes(value)
					})}>
					{label}
				</div>
			})}
		</div>
	</div>
}