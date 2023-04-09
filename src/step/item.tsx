import { ComponentProps } from '@/assets'
import React from 'react'
import { StepStatus } from './type'
import { classNames } from 'harpe'


export interface StepItemProps extends ComponentProps {
	first?: boolean
	status?: StepStatus
}

export function Item(props: StepItemProps) {
	const { status, children } = props
	return <div className={classNames(status, 'au-step-item')}>
		<span className='au-step-item-line' />
		<label>
			{children}
		</label>
	</div>
}

// Item.displayName = 'au-step-item'