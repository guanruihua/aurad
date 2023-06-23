import React from "react"
import type { ComponentProps } from "@/assets"
import './index.less'
import { classNames } from "harpe"

export interface SkeletonItemProps extends ComponentProps {
	type?: 'square' | 'round' | 'circle' | 'round-circle'
}

export function Item(props: SkeletonItemProps) {
	const { type = 'square', children, className, ...rest } = props
	return (
		<span
			className={classNames(
				'au-skeleton-item',
				`au-skeleton-${type}`,
				className
			)}
			{...rest}>
			{children}
		</span>
	)
}