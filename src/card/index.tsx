import React from "react"
import { ObjectType } from "abandonjs"
import { classNames } from '@/assets'
import './index.less'

export function Card(props: ObjectType) {
	const { className, children, ...rest } = props
	return <div
		className={classNames("card", className as string)}
		{...rest}>
		{children as any}
	</div>
}