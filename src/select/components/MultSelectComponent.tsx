/* eslint-disable*/
import React, { LegacyRef, Ref, useEffect, useRef, useState } from "react"
import { useSetState } from "@/assets"
import { classNames } from 'harpe'
import { SelectProps } from '../type'
import { Icon } from '../../icon'
import { isArray } from "asura-eye"
import { unique } from "abandonjs"

export function MultSelectComponent(props: SelectProps) {
	const { className, options = [], placeholder = '', open = false, defaultValue = [], disabled = false } = props
	const [isHover, setHover] = useState<boolean>(open)

	const [isLeave, setLeave] = useSetState<Record<string, boolean>>({ input: false, options: false })

	const [selectValues, setSelectValues] = useState<string[]>(isArray(defaultValue) ? unique(defaultValue) : [defaultValue])
	const [childWidth, setChildWidth] = useState<number>(0)
	const [inputWidth, setInputWidth] = useState<number | string>(100)
	const [inputTextWidth, setInputTextWidth] = useState<number>(0)
	const [inputWrap, setInputWrap] = useState<boolean>(false)
	const ref: any = useRef(null)
	const inputRef: any = useRef(null)

	const handleInputWidth = () => {
		if (!ref.current) return;
		const { width = 0 } = ref.current.getBoundingClientRect()
		const { childNodes = [], childElementCount = 1 } = ref.current
		if (childElementCount === 1) {
			setInputWrap(false)
			setInputWidth('100%')
		}
		let childWidth = 0
		childNodes.forEach((item: any) => {
			const { localName } = item
			if (localName !== 'span') {
				return
			}
			const { width = 0 } = item.getBoundingClientRect()
			childWidth += width + 10
		})
		let targetWidth = width - (childWidth % width) - 18
		setChildWidth(childWidth % width)
		if (targetWidth < 0) targetWidth = 120
		// console.log(width, childWidth, targetWidth)
		setInputWidth(targetWidth)
		setInputWrap(false)
	}

	useEffect(() => {
		handleInputWidth()
	}, [ref.current])

	const [value, setValue] = useState<string>('')

	return <div className={classNames(className, { hidden: disabled })}>
		<div
			ref={ref}
			tabIndex={999}
			className={classNames(
				'au-select-mult-input', 'au-select-input',
				{ isHover: isHover && !disabled }
			)}
			onMouseLeave={() => setLeave({ inputBox: true })}
			onClick={() => { setLeave({ inputBox: false }); setHover(true) }}
			onBlur={() => { !Object.values(isLeave).includes(false) && setHover(false); }}
		>
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
								handleInputWidth()
							}}>
							<Icon type="no" size={9} fill={'#8a8a94'} />
						</span>
					</span>
			})}
			<input
				ref={inputRef}
				style={{
					minWidth: inputWidth,
					display: inputWrap ? 'block' : 'inline-block',
					marginTop: inputWrap ? 6 : 0,
				}}
				onMouseLeave={() => setLeave({ input: true })}
				onMouseEnter={() => setLeave({ input: false })}
				key={selectValues.join(',')}
				placeholder={placeholder}
				value={value}
				onChange={(e) => {
					const value = e.target.value
					const valueLength = value.length || 0
					const newWrapStatus = inputRef.current.getBoundingClientRect().width < (inputRef.current.scrollWidth + childWidth)

					if (newWrapStatus !== inputWrap) {
						if (valueLength > inputTextWidth && newWrapStatus === true) {
							setInputWrap(true)
							setInputWidth('100%')
						}

						if (valueLength < inputTextWidth && newWrapStatus === false) {
							handleInputWidth()
						}
					}
					setInputTextWidth(valueLength)
					setValue(value)
				}}
				onClick={() => {
					setLeave({ input: true })
					setHover(true)
				}}
				onBlur={() => {
					!Object.values(isLeave).includes(false) && setHover(false)
				}}
			/>
		</div>
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
							handleInputWidth()
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