import React, { ButtonHTMLAttributes } from "react"
import { classNames, ComponentBaseProps } from '@/assets'
import type { } from '@/assets/type'
import './index.less'

export interface ButtonProps extends ComponentBaseProps, Partial<HTMLButtonElement> {

	/**
	 * @description 按钮类型
	 * @default: 'default'
	 */
	type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
	/**
	 * @default ''
	 */
	children?: any
}

export function Button(props: ButtonProps) {

	const { children = '', className, type = 'default', prefixCls = 'rh', ...rest } = props
	// console.log(props)

	return <button
		className={classNames(
			`${prefixCls}-btn`,
			`${prefixCls}-btn-${type}`,
			className
		)}
		{...rest as ButtonHTMLAttributes<unknown>}
	>
		{children}
	</button>
}