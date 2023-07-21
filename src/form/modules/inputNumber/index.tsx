import React, { EventHandler } from "react"
import { classNames } from 'harpe'
import { InputProps } from '../input/type'
import './index.less'
import { isEmpty, isNumber } from "asura-eye"

export type InputNumberEvent = {
	target: {
		value: number
	}
}

export interface InputNumberProps extends Omit<InputProps, 'onChange' | 'value'> {
	value?: number
	onChange?(event?: InputNumberEvent): void
	[key: string]: any
}

export function InputNumber(props: InputNumberProps) {
	const {
		value: originValue = '',
		defaultValue,
		className,
		onChange = () => { },
		...rest
	} = props

	const [value, setValue] = React.useState<number | ''>(originValue)

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
			type="number"
			inputMode="decimal"
			className={classNames("au-input-number", className)}
			onChange={newChange}
			{...rest as React.InputHTMLAttributes<HTMLInputElement>} />
	)
}