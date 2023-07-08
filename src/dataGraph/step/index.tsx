import React from "react"
import { ComponentProps } from "@/assets"
import { Item } from './item'
import { classNames } from "harpe"
import './index.less'

export type { StepItemProps } from './item'
export interface StepProps extends ComponentProps {
	direction?: 'horizontal' | 'vertical'
	initial?: number
}

export function Step(props: StepProps) {
	const { className, children, style, ...rest } = props
	
	const count = React.Children.count(children)

	return <div
		className={classNames(className, 'au-step')}
		style={{
			gridTemplateColumns: `auto ${new Array(count-1).fill('1fr auto').join(' ')}`,
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