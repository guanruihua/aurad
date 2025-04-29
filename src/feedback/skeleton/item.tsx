import React from "react"
import './index.less'
import { classNames, ClassNameType } from "harpe"

export interface SkeletonItemProps    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
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