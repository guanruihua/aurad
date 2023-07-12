import React from "react"
import type { ComponentProps } from "@/assets"
import './index.less'
import { classNames } from "harpe"
import { type SkeletonItemProps, Item } from './item'
import { SkeletonChildDefault } from "./constant"

export { SkeletonItemProps }

export interface SkeletonProps extends ComponentProps {
	size?: 'small' | 'default' | 'large'
	active?: boolean
}

export function Skeleton(props: SkeletonProps) {
	const {
		size = 'default',
		active = true,
		className,
		children = SkeletonChildDefault,
		style = {},
		...rest
	} = props

	const newStyle: React.CSSProperties = {
		'--size': `var(--size-${size})`,
		...style,
	} as React.CSSProperties

	return (
		<div className={classNames("au-skeleton",
			className,
			{
				'au-skeleton-active': active
			})}
			style={newStyle}
			{...rest}>
			{children}
		</div>
	)
}

Skeleton.Item = Item