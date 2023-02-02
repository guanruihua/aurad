import React, { ButtonHTMLAttributes } from "react"
import { classNames, ComponentBaseProps } from '@/assets'
import type { } from '@/assets/type'
import './index.less'

/**
 *  缺少点击后状态 outline 
 */
//  Partial<HTMLButtonElement>
export interface ButtonProps extends ComponentBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
	htmlType?: 'submit' | 'reset' | 'button'
	/**
	 * @description 按钮类型
	 * @default: 'default'
	 */
	type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
	ghost?: boolean
	block?: boolean
	onClick?: (e?: any) => void
	// ButtonHTMLAttributes<HTMLButtonElement>
}

export function Button(props: ButtonProps) {

	const { htmlType = 'button', children = '', ghost = false, block, className, type = 'default', prefixCls = 'mo', ...rest } = props

	return <button
		type={htmlType}
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