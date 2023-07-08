import React from "react"
import type { ComponentProps } from "@/assets"
import { classNames } from "harpe"
import "./index.less"

export interface FusionProps extends ComponentProps {
	[key: string]: any
}

const prefix = 'au-effect-border-fusion'
const toPrefix = (name: string = '') => {
	if (name) {
		return prefix + '-' + name
	}
	return prefix
}

export function BorderFusion(props: FusionProps) {
	const { children, className, style = {} } = props
	return (
		<div style={style}>
			<div className={classNames(prefix, className)}>
				<div className={classNames(toPrefix('content'), toPrefix('layout'))}>
					{children}
				</div>
				<div className={classNames(toPrefix('background'), toPrefix('layout'))}>
					{children}
				</div>
			</div>
		</div>
	)
}
