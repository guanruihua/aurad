import React from "react"
import { ObjectType } from "abandonjs"
import { FormContext } from './context'
import type { FormAction } from './type'
import { useValidator } from './hook'
export interface ItemProps {
	name: string
	label?: any
	rules?: any[]
	[key: string]: any
}

function childPropsHoc(oldProps: ObjectType, expandProps: ObjectType) {
	return {
		...oldProps,
		...expandProps
	}
}

function ItemContent(props: ItemProps & FormAction) {
	const {
		// values = {},
		// setValues = (newValues: FormRecord) => { },
		name, label, rules = [],
		children
	} = props

	const { errorStatus, errorMsg, expandProps } = useValidator(rules)

	const newProps = childPropsHoc(children.props, { name, ...expandProps })

	return <div className="form-item">
		{label && <label style={{ display: 'block', marginRight: 4, marginBottom: 8 }}>{label}:</label>}
		{children && React.cloneElement(children, newProps)}
		{errorStatus && <div>{errorMsg}</div>}
	</div>
}

export function Item(props: ItemProps) {
	return <FormContext.Consumer>
		{(target: FormAction) => <ItemContent {...target}{...props} />}
	</FormContext.Consumer >
}
