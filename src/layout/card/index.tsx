import React, { ReactNode } from "react"
import { classNames } from 'harpe'
import './index.less'
import { ComponentProps } from "@/assets"
import { isNoEmpty } from "asura-eye"

export interface CardProps extends ComponentProps {
	header?: ReactNode
	headerStyle?: React.CSSProperties
	footer?: ReactNode
	footerStyle?: React.CSSProperties
}

export function Card(props: CardProps) {

	const {
		footer, footerStyle,
		header, headerStyle,
		className, children, ...rest
	} = props

	return <div
		className={classNames("au-card", className)}
		{...rest}>
		{
			isNoEmpty(header) &&
			<div
				className="au-card-header"
				style={headerStyle}>
				{header}
			</div>
		}
		<div className="au-card-content">
			{children}
		</div>
		{
			isNoEmpty(footer) &&
			<div
				className="au-card-footer"
				style={footerStyle}>
				{footer}
			</div>
		}
	</div>
}