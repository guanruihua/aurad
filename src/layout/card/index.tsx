import React, { ReactNode } from "react"
import { classNames } from 'harpe'
import './index.less'
import { ComponentProps } from "@/assets"
import { isNoEmpty } from "asura-eye"

export interface CardProps extends ComponentProps {
	header?: ReactNode
	footer?: ReactNode
}

export function Card(props: CardProps) {

	const { footer, header, className, children, ...rest } = props

	return <div
		className={classNames("au-card", className)}
		{...rest}>
		{isNoEmpty(header) && <div className="au-card-header">{header}</div>}
		<div className="au-card-content">
			{children}
		</div>
		{isNoEmpty(footer) && <div className="au-card-footer">{footer}</div>}
	</div>
}