import React, { ButtonHTMLAttributes } from "react"
import { classNames, ComponentBaseProps } from '@/assets'
import type { } from '@/assets/type'
import './index.less'

/**
 *  缺少点击后状态 outline 
 */

export interface ButtonProps extends ComponentBaseProps, Partial<HTMLButtonElement> {

	/**
	 * @description 按钮类型
	 * @default: 'default'
	 */
	type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
	ghost?: boolean
	block?: boolean
	/**
	 * @default ''
	 */
	children?: any
}

export function Button(props: ButtonProps) {

	const { children = '', ghost = false, block, className, type = 'default', prefixCls = 'rh', ...rest } = props
	// console.log(props)

	return <button
		className={classNames(
			{
				[`${prefixCls}-btn-ghost`]: ghost,
				[`${prefixCls}-btn-ghost`]: block,
			},
			`${prefixCls}-btn`,
			`${prefixCls}-btn-${type}`,
			className
		)}
		{...rest as ButtonHTMLAttributes<unknown>}
	>
		{children}
	</button>
}