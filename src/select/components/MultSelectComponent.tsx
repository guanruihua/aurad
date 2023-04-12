/* eslint-disable*/
import React, { useState } from "react"
import { useSetState } from "@/assets"
import { classNames } from 'harpe'
import { SelectProps } from '../type'
import { isArray } from "asura-eye"
import { unique } from "abandonjs"
import { Icon } from '@/icon'

export function MultSelectComponent(props: SelectProps) {
	
	const { className, options = [], placeholder = '', open = false, defaultValue = [], disabled = false } = props

	const [isHover, setHover] = useState<boolean>(open)
	const [isLeave, setLeave] = useSetState<Record<string, boolean>>({ options: true })

	const [selectValues, setSelectValues] = useState<string[]>(isArray(defaultValue) ? unique(defaultValue) : [defaultValue])

	return <div className={classNames(className, { hidden: disabled })}>
		<div
			tabIndex={999}
			className={classNames(
				'au-select-mult-input', 'au-select-input',
				{ isHover: isHover && !disabled }
			)}
			onMouseLeave={() => setLeave({ inputBox: true })}
			onClick={() => { setLeave({ inputBox: false }); setHover(true) }}
			onBlur={() => { !Object.values(isLeave).includes(false) && setHover(false); }}
		>
			{selectValues.length === 0 && <div style={{ color: 'rgb(117,117,117)' }}>{placeholder}</div>}
			{selectValues.map((item: string, index: number) => {
				if (item!)
					return <span
						className="au-select-item"
						key={index.toString()}>
						<span>{item}</span>
						<span
							className="icon-close"
							style={{ cursor: 'pointer', paddingRight: 5 }}
							onClick={() => {
								const newSelectValues: string[] = selectValues.filter(v => v !== item)
								setSelectValues(newSelectValues)
							}}>
							<Icon type="no" size={9} fill={'#8a8a94'} />
						</span>
					</span>
			})}
			{/* <input
				style={{
					width: '100%',
					display: isHover ? 'inline-block' : 'none',
				}}
				onMouseLeave={() => setLeave({ input: true })}
				onMouseEnter={() => setLeave({ input: false })}
				key={selectValues.join(',')}
				placeholder={placeholder}
				// value={value}
				// onChange={(e) => {
				// 	const value = e.target.value
				// 	// setValue(value)
				// }}
				onClick={() => {
					setLeave({ input: true })
					setHover(true)
				}}
				onBlur={() => {
					!Object.values(isLeave).includes(false) && setHover(false)
				}}
			/> */}
		</div>
		{/* 下拉框 */}
		{
			!disabled && <div
				className={classNames('au-select-options', { 'au-select-options-hover': isHover })}
				onMouseLeave={() => setLeave({ options: true })}
				onMouseEnter={() => setLeave({ options: false })} >
				{options?.map((item, index) => {
					const { value, label } = item
					return <div
						tabIndex={index + 999}
						key={index.toString()}
						onBlur={() => { !Object.values(isLeave).includes(false) && setHover(false) }}
						onClick={() => {
							const newSelectValues: string[] = selectValues.includes(value)
								? selectValues.filter(v => v !== value)
								: selectValues.concat(value)
							setSelectValues(newSelectValues)
						}}
						className={classNames('au-select-options-item', { 'selected': selectValues.includes(value) })}>
						{label}
					</div>
				})}
			</div>
		}
	</div >
}