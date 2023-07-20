import React, { useState } from "react"
import { useSetState } from "@/assets"
import { classNames } from 'harpe'
import { SelectProps } from '../type'
import { isArray, isEmpty, isString } from "asura-eye"
import { toString, unique } from "abandonjs"
import { Icon } from '@/icon'

export function MultSelectComponent(props: SelectProps) {

	const { value, className, options = [], onChange, placeholder = '', open = false, defaultValue = [], disabled = false } = props

	const [isHover, setHover] = useState<boolean>(open)
	const [isLeave, setLeave] = useSetState<Record<string, boolean>>({ options: true })

	const [selectValues, setSelectValues] = useState<string[]>(isArray(defaultValue) ? unique(defaultValue) : [defaultValue])

	React.useEffect(() => {
		if (toString(selectValues) === toString(value)) return
		if (isEmpty(value)) {
			setSelectValues([])
			return;
		}

		if (isArray(value)) {
			setSelectValues(unique(value))
			return
		}
		if (isString(value)) {
			setSelectValues([value])
		}
	}, [value])


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
				if (isString(item))
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
								const event = {
									target: {
										value: newSelectValues
									}
								}
								onChange && onChange(event)
							}}>
							<Icon type="no" size={9} fill={'#8a8a94'} />
						</span>
					</span>
			})}
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
							const event = {
								target: {
									value: newSelectValues
								}
							}
							onChange && onChange(event)
						}}
						className={classNames('au-select-options-item', { 'selected': selectValues.includes(value) })}>
						{label}
					</div>
				})}
			</div>
		}
	</div >
}