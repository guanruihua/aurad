import React, { useState } from "react"
import './index.less'

export interface InputProps {
	[key: string]: any
}

export function Input(props: InputProps) {
	const { } = props
	const [labelClassName, setLabelClassName] = useState<string>('userNameTip')

	return <div className="test-content">
		<div className="user_name">
			<label htmlFor="userName" className={labelClassName}>请输入您的用户名</label>
			<input type="text" id="userName"
				onFocus={() => {
					setLabelClassName('userNameTip userNameTipA')
				}}
				onBlur={() => {
					setLabelClassName('userNameTip')
				}}
			/>
		</div>
	</div>
}
