import { ComponentProps } from '@/assets'
import React from 'react'
import { StepStatus } from './type'
import { classNames } from 'harpe'


export interface StepItemProps extends ComponentProps {
	first?: boolean
	status?: StepStatus
}

export function Item(props: StepItemProps) {
	const { first = false, status, children } = props
	return (
		<>
			{!first && <span className='au-step-item-line' />}
			<label className={classNames(status, 'au-step-item')}>
				{children}
			</label>
		</>
	)
}