/* eslint-disable*/
import React, { FC } from "react"
import { ComponentProps } from "@/assets"
import { Item, StepItemProps } from './item'
import { classNames } from "harpe"
import './index.less'
import { isEffectFunction } from "asura-eye"
import { ObjectType } from "abandonjs"

export type { StepItemProps } from './item'
export interface StepProps extends ComponentProps {
	direction?: 'horizontal' | 'vertical'
	initial?: number
}

export function Step(props: StepProps) {
	const { className, children, style, ...rest } = props
	return <div
		className={classNames(className, 'au-step')}
		style={{
			gridTemplateColumns: `repeat(${React.Children.count(children)},1fr)`,
			...style,
		}}
		{...rest}>
		{React.Children.map(children, (item: any, index: number) => {
			const { className, children, ...rest } = item.props || {}
			return <Item
				first={index === 0}
				className={classNames(className)}
				key={index}
				{...rest}>
				{children}
			</Item>
		})}
	</div>
}

Step.Item = Item