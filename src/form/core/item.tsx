import React, { ReactNode } from "react"
import { FormContext } from './context'
import type { FormAction, UseForm } from './hook/type'
import { classNames } from "harpe"
import { ComponentProps } from "@/assets"
import { isEffectArray, isEmpty } from "asura-eye"
import { toString } from "abandonjs"

export interface FormItemProps extends ComponentProps {
	name?: string
	label?: ReactNode
	rules?: any[]
	/**
	 * @description 直接控件的值的索引
	 * @default 'value'
	 */
	valueIndex?: 'value' | 'checked' | string
	[key: string]: any
}


export interface ItemCoreProps extends FormItemProps {
	__form__: UseForm
}


function FormItemCore(props: FormItemProps) {
	const { className, label, name, valueIndex = 'value', rules, __form__, children, ...rest } = props

	React.useEffect(() => {
		if (name && __form__) {
			__form__.fieldAction.set(name, { name, rules })
			isEffectArray(rules) && __form__.ruleAction.set(name, rules)
		}
	}, [toString(rules), name])


	if (__form__ && name && React.isValidElement(children)) {
		const { values, errorState = {} } = __form__
		const { onChange, ...childRest } = children.props
		
		// console.log(childRest, values)
		
		const newProps = {
			...childRest,
			[valueIndex]: values[name],
			onChange: (e: React.ChangeEvent<any>) => {
				onChange && onChange(e)
				const value = e.target[valueIndex]
				__form__.validateField(name, value)
				__form__.setValues({ [name]: value })
			}
		}

		if (isEmpty(values[name])) delete newProps[valueIndex]

		const hasError = errorState[name] && errorState[name].error && errorState[name].error.length > 0

		const newClassName = classNames("au-form-item", className, {
			['au-form-item-error-status']: hasError
		})

		const renderError = () => {
			const { error = [] } = errorState[name] || {}
			if (error.length > 0) {
				return error.join(', ')
			}
			return ''
		}


		return (
			<div className={newClassName} {...rest}>
				{label && <label className="au-form-item-label">{label}</label>}
				<div className="au-form-item-control">
					{React.cloneElement(children, newProps)}
				</div>
				<div className="au-form-item-error-status-message" >
					{renderError()}
				</div>
			</div>
		)
	}

	return (
		<div
			className={classNames("au-form-item", className)}
			{...rest}>
			{label && <label>{label}</label>}
			{children}
		</div>
	)
}


/**
 * @title  FormItem
 * @description 受控子组件必须拥有value, 若值发生改变, 需要受控onChange
 * @param props {FormItemProps}
 * @returns 
 */
export function FormItem(props: FormItemProps) {
	return <FormContext.Consumer>
		{(target: FormAction) => <FormItemCore {...target} {...props} />}
	</FormContext.Consumer >
}
