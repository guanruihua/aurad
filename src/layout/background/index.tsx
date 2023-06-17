import React from "react"
import { ComponentProps } from "@/assets"
import { classNames } from "harpe"
import './index.less'

export interface BackgroundProps extends ComponentProps {
	size?: string | number
}

export function Background(props: BackgroundProps) {
	const { children, className } = props

	return (<div
		className={classNames("au-background", className)}
	>
		<div className="au-background-content">
			{children}
		</div>
	</div>)
}
