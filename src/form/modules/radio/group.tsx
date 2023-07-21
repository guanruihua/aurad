import React, { useState } from 'react'
import type { RadioGroupContextProps, RadioGroupProps, RadioProps, RadioValue } from './type'
import { RadioGroupContext } from './context'
import { isEffectArray, isEffectObject, isUndefined } from 'asura-eye'
import { Radio } from '.'
import { classNames } from 'harpe'

export function Group(props: RadioGroupProps) {

	const { className, options, children, value, defaultValue = [], onChange } = props

	const [groupValue, updateGroupValue] = useState<RadioValue>((isUndefined(value) ? defaultValue : value) as RadioValue)

	const setGroupValue = (
		checkedStatus: RadioValue,
		itemProps: RadioProps
	) => {
		const { setCheckedStatus, value } = itemProps
		if (isUndefined(value)) return;
		setCheckedStatus(checkedStatus)
		updateGroupValue(value)
		const event = {
			target: {
				value,
			}
		}
		onChange && onChange(event)
		return
	}

	const groupProps = {
		...props,
		groupValue, setGroupValue,
	}
	const contextValue: RadioGroupContextProps = {
		name: 'RadioGroupContext',
		groupValue, setGroupValue,
		groupProps,
	}

	return (<RadioGroupContext.Provider value={contextValue}>
		<div className={classNames(className, 'au-radio-group')}>
			{isEffectArray(options) && options.map((item: string | number | RadioProps, index: number) => {
				const key = 'radio-option-' + index

				if (isEffectObject(item)) {
					return <Radio key={key} {...item} />
				}

				return <Radio
					key={key}
					label={item}
					value={item} />
			})}
			{children}
		</div>
	</RadioGroupContext.Provider>)
}