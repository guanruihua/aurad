/* eslint-disable*/
import React, { useEffect, useState } from "react"
import { ObjectType } from "abandonjs"
import { FormContext } from './context'
import type { FormAction } from './type'
import { useValidator } from './hook'
import { classNames } from "harpe"
import { isString, isUndefined } from "asura-eye"
export interface ItemProps {
	name?: string
	label?: any
	rules?: any[]
	[key: string]: any
}

function ItemContent(props: ItemProps & FormAction) {
	const {
		fname, name,
		register,
		onFormItemChange,
		children,
		setValues,
	} = props

	const { value: orValue = undefined, defaultValue = undefined, onChange, ...rest } = children.props

	useEffect(() => {
		if (name) {
			register({ [name]: props })
			setValues({ [name]: isUndefined(orValue) ? defaultValue : orValue })
		}
	}, [])

	const newProps = {
		...rest,
		onChange: (e: any) => {
			onFormItemChange && onFormItemChange(e)
			onChange && onChange(e)
			if (e.target && isString(name)) {
				const v = e.target.value
				console.log(name, v)
				setValues({ [name]: v })
			}
		},
		name, fname,
	}

	return <React.Fragment>
		{children && React.cloneElement(children, newProps)}
	</React.Fragment>
}

export function Item(props: ItemProps) {
	const { name, label, rules = [], children } = props
	const { errorStatus, errorMsg, expandProps, resetErrorStatus } = useValidator(rules)
	const { onValidatorChange } = expandProps || {}

	const onFormItemChange = (e: any, flag?: string) => {
		if (flag === 'reset') return resetErrorStatus()
		return onValidatorChange(e)
	}

	const newProps = {
		...props,
		onFormItemChange,
	}

	if (name)

		return <FormContext.Consumer>
			{(target: FormAction) => {
				return (
					<div className={classNames("form-item",
						{
							['form-item-error-status']: errorStatus
						}
					)}>
						{label && <label style={{ display: 'block', marginRight: 4, marginBottom: 8 }}>{label}:</label>}
						<ItemContent {...target} {...newProps} />
						{errorStatus && <div className="form-item-error-status-message" >{errorMsg}</div>}
					</div>
				)
			}
			}
		</FormContext.Consumer >
	return <div className="form-item">
		{children}
	</div>
}
