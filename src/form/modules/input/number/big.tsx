import React from "react"
import { classNames } from 'harpe'
import type { InputNumberProps } from './type'
import './index.less'
import { isEmpty, isNumber } from "asura-eye"

export * from './type'

/**
 * 大数字
 * @param props 
 * @returns 
 */
export function InputBigNumber(props: InputNumberProps) {
	const {
		value: originValue = '',
		defaultValue,
		className,
		onBlur,
		onChange = () => { },
		...rest
	} = props

	const [value, setValue] = React.useState<number | string | ''>(originValue)

	const newChange = (e: any) => {

		const val = Number(e.target.value)
		if (!isNumber(val)) return;
		const value = val
		const event = {
			target: {
				value,
			}
		}
		setValue(value)
		onChange && onChange(event)
	}

	React.useEffect(() => {
		if (originValue === value) return;
		if (isEmpty(originValue) || originValue === '') {
			setValue('')
			return
		}
		if (isNumber(originValue)) {
			setValue(originValue)
			return
		}
	}, [originValue])


	return (
		<input
			value={value}
			type="tel"
			inputMode="numeric"
			className={classNames("au-input-big-number", className)}
			onBlur={(e) => {
				onBlur && onBlur(e)
				const newValue = Number(value).toString()
				setValue(newValue)
			}}
			onChange={newChange}
			{...rest as React.InputHTMLAttributes<HTMLInputElement>} />
	)
}