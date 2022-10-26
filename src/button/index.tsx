import React from "react"
import { classNames, ComponetBaseProps } from '@/assets'
import type {} from '@/assets/type'
import styles from './index.module.less'

export interface ButtonProps extends ComponetBaseProps, Partial<HTMLButtonElement> {

	/**
	 * @description 按钮类型
	 */
	type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
	/**
	 * @default ''
	 */
	children?: any
}

export function Button(props: ButtonProps) {

	const { children = '', className, type = 'default', prefixCls = 'rh' } = props
	console.log(props)

	return <button
		className={classNames(
			styles[`${prefixCls}-btn`],
			styles[`${prefixCls}-btn-${type}`],
			className
		)}>
		{children}
	</button>
}