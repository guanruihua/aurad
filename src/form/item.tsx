/* eslint-disable*/
import React, { useEffect } from "react"
import { FormContext } from './context'
import type { FormAction, FormRecord } from './type'

export interface ItemProps {
	name: string
	label?: any
	rules?: any[]
	[key: string]: any
}

function ItemContent(props: ItemProps & FormAction) {
	const {
		values = {},
		setValues = (newValues: FormRecord) => { },
		name, label, rules,
		children
	} = props


	useEffect(() => {
		rules && console.log(rules);
		if (values && setValues) {
			setValues({ [name]: undefined })
		}
	}, [])

	return <div className="form-item">
		{label && <label style={{ display: 'block', marginRight: 4, marginBottom: 8 }}>{label}:</label>}
		{children && React.cloneElement(children, { name, })}
	</div>
}

export function Item(props: ItemProps) {
	return <FormContext.Consumer>
		{(target: FormAction) => <ItemContent {...target}{...props}></ItemContent>}
	</FormContext.Consumer >
}
