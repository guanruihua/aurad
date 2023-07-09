import { ComponentProps } from '@/assets'
import React from 'react'
import { StepStatus } from './type'
import { classNames } from 'harpe'
import { Icon } from '@/icon'
import { isEmpty } from 'asura-eye'

const IconStatus = {
	wait: <Icon type='block' />,
	process: <div style={{
		width: 30,
		height: 30,
		background: 'var(--disabled-color)',
		borderRadius: '50%',
		border: 'none',
	}} />,
	finish: <Icon type='yes' />,
	error: <Icon type='no' />,
}

export interface StepItemProps extends ComponentProps {
	status?: StepStatus
	__first__?: boolean
}

const prefix = 'au-step-item'
const Prefix = (name?: string) => `${prefix}${isEmpty(name) ? '' : ('-' + name)}`

export function Item(props: StepItemProps) {
	const { status = 'process', __first__ = false, children } = props
	return (
		<>
			{!__first__ && <div className={classNames(Prefix('line'))} />}
			<div className={classNames(Prefix())}>
				<div className={Prefix('icon')}>
					{IconStatus[status]}
				</div>
				<div className={Prefix('content')}>
					{children}
				</div>
			</div>
		</>
	)
}