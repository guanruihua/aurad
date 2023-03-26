import React, { ButtonHTMLAttributes } from "react"
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'


export interface ButtonProps extends ComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
	htmlType?: 'submit' | 'reset' | 'button'
	/**
	 * @description 按钮类型
	 * @default: 'default'
	 */
	type?: 'primary' | 'text' | 'default'
}

export function Button(props: ButtonProps) {

	const { htmlType = 'button', children = '', className, type = 'default', ...rest } = props

	return <button
		type={htmlType}
		className={classNames(`au-btn`, `au-btn-${type}`, className)}
		{...rest as ButtonHTMLAttributes<unknown>}
	>
		{children}
	</button>
}