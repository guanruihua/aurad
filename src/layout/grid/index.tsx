import React from "react"
import { ObjectType } from 'abandonjs'
import { classNames, ComponentBaseProps } from '@/assets'

function Item(props: ComponentBaseProps) {
	const { className, children, ...rest } = props
	return <div
		className={classNames('grid-item', className)}
		{...rest}>
		{children}
	</div>
}


export interface Grid extends ObjectType {
	className?: string
	children?: any
}

export function Grid(props: Grid) {
	const { className, children, ...rest } = props
	return <div
		className={classNames('grid', className)}
		{...rest}>
		{children}
	</div>
}

Grid.Item = Item

