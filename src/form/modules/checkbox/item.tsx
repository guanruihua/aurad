import React from "react"
import { CheckboxGroupContext } from './context'
import { stringify } from "abandonjs"
import { isEmpty, isObject } from "asura-eye"
import { CheckboxCore } from './core'
import type { CheckboxGroupContextProps, CheckboxItemProps } from './type'

export function CheckboxItem(props: CheckboxItemProps) {
	return (
		<CheckboxGroupContext.Consumer>
			{(handler: CheckboxGroupContextProps) => {
				if (handler.name) {
					const {
						groupValue,
						setGroupValue,
						groupProps = {}
					} = handler
					const { value } = props
					const newProps = { ...props, setGroupValue, groupProps }
					if (!isEmpty(value))
						if (isObject(value)) {
							newProps.checked = groupValue.map((_) => stringify(_)).includes(stringify(value))
						} else {
							newProps.checked = groupValue.includes(value)
						}
					return (<CheckboxCore {...newProps} />)
				}
				return (<CheckboxCore {...props} />)
			}}
		</CheckboxGroupContext.Consumer>
	)
}
