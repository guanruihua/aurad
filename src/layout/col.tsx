import React from "react"
import { ObjectType } from 'abandonjs'
import { classNames } from 'harpe'

export interface Col extends ObjectType {
	className?: string
	children?: any
}

export function Col(props: Col) {
	const { className, children, ...rest } = props
	return <div
		className={classNames(className, 'col')}
		{...rest}>
		{children}
	</div>
}
