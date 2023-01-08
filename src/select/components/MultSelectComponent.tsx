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
	const { options = [], placeholder = '', open = false, defaultValue, disabled = false } = props
	const [isHover, setHover] = useState<boolean>(open)

	const [isLeave, setLeave] = useSetState<Record<string, boolean>>({ input: false, options: false })

	const [selectValues, setSelectValues] = useState<string[]>([].concat(defaultValue))

	const [value, setValue] = useState<string>('')

	return <div className={classNames("select", { hidden: disabled })}>
		<div
			tabIndex={999}
			className={classNames(
				'select-mult-input', 'select-input',
				{ isHover: isHover && !disabled }
			)}
			onMouseLeave={() => setLeave({ inputBox: true })}
			onClick={() => { setLeave({ inputBox: false }); setHover(true) }}
			onBlur={() => { !Object.values(isLeave).includes(false) && setHover(false); }}
		>
			{selectValues.map((item: string, index: number) => {
				if (item!)
					return <span
						className="select-item"
						key={index.toString()}>
						<span>{item}</span>
						<span
							className="icon-close"
							style={{ cursor: 'pointer' }}
							onClick={() => {
								console.log(item)
							}}>
							<svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="9px" height="9px" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
						</span>
					</span>
			})}
			<input
				onMouseLeave={() => setLeave({ input: true })}
				onMouseEnter={() => setLeave({ input: false })}
				key={selectValues.join(',')}
				placeholder={placeholder}
				value={value}
				onChange={(e) => {
					setValue(e.target.value)
				}}
				onClick={() => {
					setLeave({ input: true })
					setHover(true)
				}}
				onBlur={() => {
					!Object.values(isLeave).includes(false) && setHover(false)
				}}
			// readOnly
			// unselectable="on" 
			/>
		</div>
		{
			!disabled && <div
				className={classNames('select-options', { 'select-options-hover': isHover })}
				onMouseLeave={() => setLeave({ options: true })}
				onMouseEnter={() => setLeave({ options: false })} >
				{options?.map((item, index) => {
					const { value, label } = item
					return <div
						tabIndex={index + 999}
						key={index.toString()}
						onBlur={() => { !Object.values(isLeave).includes(false) && setHover(false) }}
						onClick={() => { setSelectValues(selectValues.concat(value)) }}
						className={classNames('select-options-item', { 'selected': selectValues.includes(value) })}>
						{label}
					</div>
				})}
			</div>
		}
	</div >
}