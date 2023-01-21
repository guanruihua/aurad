/* eslint-disable*/
import { ObjectType } from "abandonjs"
import React, { RefObject, useEffect, useRef, useState } from "react"
import { FormContext } from './context'
import type { FormAction } from './type'
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

	const ref: RefObject<any> = useRef(null)
	// const ref: RefObject<HTMLDivElement> = useRef(null)
	const [errorStatus, setErrorStatus] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<any>('')

	useEffect(() => {
		if (ref.current === null) return;
		rules.forEach((rule: ObjectType, index: number) => {
			const { required = false, message = '', trigger = 'onChange' } = rule
			// const { required = false, message = '', trigger = 'onChange' } = rule
			ref.current?.addEventListener('change', (e:any) => {
			// ref.current?.addEventListener(trigger as keyof ElementEventMap, (e:any) => {
				console.log(trigger, e)
			})
		})
		// ref && console.log(ref);

	}, [ref.current, rules.length])
	useEffect(() => {
		// rules && console.log(rules, ref);

		// if (values && setValues) {
		// 	setValues({ [name]: undefined })
		// }
	}, [])

	// console.log(children)
	const expandProps = {
		ref,
		name,
		onChange: (e: any) => {
			const value: string = e.target.value || ''
			if (value.trim() === '') {
				setErrorStatus(true)
				setErrorMsg('不可以为空')
			} else {
				setErrorStatus(false)
			}
		}
	}
	const { type, props: childProps } = children

	return <div className="form-item">
		{label && <label style={{ display: 'block', marginRight: 4, marginBottom: 8 }}>{label}:</label>}
		{type(childPropsHoc(childProps, expandProps))}
		{/* {children && React.cloneElement(children, { name })} */}
		{errorStatus && <div>{errorMsg}</div>}
	</div>
}

export function Item(props: ItemProps) {
	return <FormContext.Consumer>
		{(target: FormAction) => <ItemContent {...target}{...props} />}
	</FormContext.Consumer >
}
