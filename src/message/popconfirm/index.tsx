import React from "react"
import type { ComponentProps } from "@/assets"
import './index.less'

export interface PopConfirmProps extends ComponentProps {
	open?: boolean
	/**
	 * @description 
	 * @default 'top'
	 */
	placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | 'center'
	content?: React.ReactNode
}

export function PopConfirm(props: PopConfirmProps) {

	const { placement = 'top', children, content = '' } = props



	return (
		<div className="au-popConfirm-box">
			{children}
			<div
				className="au-popConfirm">
				<div className="au-popConfirm-arrow" />
				<div className="au-popConfirm-inner">
					{content}
				</div>
			</div>
		</div>
	)
}
