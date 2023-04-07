/* eslint-disable*/
import React, { ReactNode, useEffect } from "react"
import { FormContext } from './context'
import type { FormAction } from './type'
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
		rules = [],
		validateField,
		// onFormItemChange,
		children,
		values = {},
		setValues,
		validStatus = {},
	} = props

	if (!name) {
		return <div className="form-item">
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
			// onFormItemChange && onFormItemChange(e)
			onChange && onChange(e)
			if (e.target && isString(name)) {
				const v = e.target.value
				// console.log(validateField)
				validateField && validateField(name, v)
				setValues({ [name]: v })
			}
		},
	}

	const { errorStatus = false, errorMsg = '' } = validStatus[name] || {}
	const newClassName = classNames("form-item", {
		['form-item-error-status']: errorStatus
	})
	return <div className={newClassName}>
		{label && <label className="form-item-label" >{label}:</label>}
		{children && React.cloneElement(children, newProps)}
		{errorStatus && <div className="form-item-error-status-message" >{errorMsg}</div>}
	</div>

}

export function Item(props: ItemProps) {
	// const { name, label, rules = [], children } = props
	// const { errorStatus, errorMsg, expandProps, resetErrorStatus } = useValidator(rules)
	// const { onValidatorChange } = expandProps || {}

	// const onFormItemChange = (e: any, flag?: string) => {
	// 	if (flag === 'reset') return resetErrorStatus()
	// 	return onValidatorChange(e)
	// }

	// const newProps = {
	// ...props,
	// onFormItemChange,
	// }

	return <FormContext.Consumer>
		{(target: FormAction) => <ItemContent {...target} {...props} />}
	</FormContext.Consumer >

}
