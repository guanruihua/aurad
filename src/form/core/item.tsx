import React, { ReactNode, useEffect } from "react"
import { FormContext } from './context'
import type { FormAction } from './hook/type'
import { classNames } from "harpe"
import { isString, isUndefined } from "asura-eye"

export interface ItemProps {
	name?: string
	label?: string | ReactNode
	rules?: any[]
	[key: string]: any
}

function ItemContent(props: ItemProps & FormAction) {

	const {
		label,
		name,
		register,
		validateField,
		children,
		values = {},
		setValues,
		validStatus = {},
	} = props

	if (!name) {
		return <div className="au-form-item">
			{label && <label style={{ display: 'block', marginRight: 4, marginBottom: 8 }}>{label}:</label>}
			{children}
		</div>
	}

	const {
		value: orValue = undefined, defaultValue = undefined,
		onChange, ...rest
	} = children.props

	useEffect(() => {
		if (!name) return;
		register(name, props)
		setValues({ [name]: isUndefined(orValue) ? defaultValue : orValue })
	}, [name])

	const newProps = {
		...rest,
		value: name && values[name] || '',
		onChange: (e: any) => {
			onChange && onChange(e)
			if (!isString(name)) return;
			let v = undefined
			if (e.target) v = e.target.value
			validateField && validateField(name, v)
			setValues({ [name]: v })
		},
	}

	const { errorStatus = false, errorMsg = '' } = validStatus[name] || {}

	const newClassName = classNames("au-form-item", {
		['au-form-item-error-status']: errorStatus
	})

	return (
		<div className={newClassName}>
			{label && <label className="au-form-item-label" >{label}:</label>}
			{children && React.cloneElement(children, newProps)}
			<div className="au-form-item-error-status-message" >{errorStatus && errorMsg}</div>
		</div>
	)
}

export function Item(props: ItemProps) {
	return <FormContext.Consumer>
		{(target: FormAction) => <ItemContent {...target} {...props} />}
	</FormContext.Consumer >
}
