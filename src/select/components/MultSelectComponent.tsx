import React, { useState } from "react"
import { classNames, useSetState } from "@/assets"
import { SelectProps } from '../type'
import { Icon } from '../../icon'
import { isArray } from "check-it-type"

export function MultSelectComponent(props: SelectProps) {
	const { options = [], placeholder = '', open = false, defaultValue = [], disabled = false } = props
	const [isHover, setHover] = useState<boolean>(open)

	const [isLeave, setLeave] = useSetState<Record<string, boolean>>({ input: false, options: false })

	const [selectValues, setSelectValues] = useState<string[]>(isArray(defaultValue) ? defaultValue : [defaultValue])

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
							<Icon type="close" size={9} fill={'#8a8a94'} />
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