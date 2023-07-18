import React from "react"
import { Group } from './group'
import type { RadioGroupContextProps, RadioProps } from './type'
import { RadioGroupContext } from './context'
import { equal, stringify } from 'abandonjs'
import './index.less'
import { RadioCore } from './core'
export * from './type'

export function Radio(props: RadioProps) {
	return <RadioGroupContext.Consumer>
		{(handler: RadioGroupContextProps) => {
			if (handler.name) {
				const {
					groupValue, setGroupValue,
					groupProps = {}
				} = handler
				const { value } = props
				const newProps = { ...props, setGroupValue, groupProps }
				newProps.checked = equal(groupValue, value)
				return (<RadioCore key={stringify(groupValue)} {...newProps} />)
			}
			return (<RadioCore {...props} />)
		}}
	</RadioGroupContext.Consumer>
}

Radio.Group = Group