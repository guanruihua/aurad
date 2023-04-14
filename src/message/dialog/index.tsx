import React, { ReactNode } from "react"
import { classNames } from "harpe"
import { ComponentProps } from "@/assets"
import { Icon } from '@/icon'
import { Button } from '@/form'
import './index.less'
import { isNoEmpty } from "asura-eye"

export interface DialogProps extends ComponentProps {
	title?: string | ReactNode
	open?: boolean
	onCancel?: () => void
	onOk?: () => void
}

export function Dialog(props: DialogProps) {
	const { open = false, children, className, title, onCancel, onOk } = props
	if (open === false) return <div />
	return <dialog className={classNames('au-dialog', className)} open={open}>
		<div className="au-dialog-layout">
			{isNoEmpty(title) && <div className="au-dialog-header">
				<div className="au-dialog-header-label">{title}</div>
				<div className="au-dialog-header-logo-close"
					onClick={() => {
						onCancel && onCancel()
					}}
				>
					<Icon type="no" size={16} fill="currentColor" />
				</div>
			</div>}
			<div className="au-dialog-body">
				{children}
			</div>
			<div className="au-dialog-footer">
				<div className="au-dialog-footer-controls">
					<Button
						onClick={() => {
							onCancel && onCancel()
						}}
					>Cancel</Button>
					<Button
						type="primary"
						onClick={() => {
							onCancel && onCancel()
							onOk && onOk()
						}}
					>OK</Button>
				</div>
			</div>
		</div>
	</dialog>

}