import React from "react"
import { classNames } from 'harpe'
import { FormAction, FormRecord } from "../form/type"
import './index.less'

export interface InputProps extends Partial<HTMLInputElement> {
	[key: string]: any
}

export interface InputExpandProps extends Partial<FormAction> {
	setValueBefore?: (newValues: FormRecord) => void
	[key: string]: any
}

// function handleAction<T = any>(actions: Record<string, any> = {}, e: T) {
// 	const { before, action, after } = actions
// 	before && before(e)
// 	action && action(e)
// 	after && after(e)
// }

// type InputChangeEvent = ChangeEvent<HTMLInputElement>

export function Input(props: InputProps) {
	// const { name, setValueBefore, onChange, oninput, ...rest } = props
	const { className, ...rest } = props
	// const [labelClassName, setLabelClassName] = useState<string>('userNameTip')
	// console.log(setValueBefore)
	// const before = (e: InputChangeEvent) => {
	// console.log('before', e.target?.value)
	// name && setValueBefore && setValueBefore({ [name]: e.target.value })
	// }
	return <input
		className={classNames("input", className)}
		// onInput={(e: InputChangeEvent) => handleAction<InputChangeEvent>({ before, action: onChange }, e)}
		{...rest as any}
	/>
	// return <div className="test-content">
	// 	<div className="user_name">
	// 		<label htmlFor="userName" className={labelClassName}>请输入您的用户名</label>
	// 		<input type="text" id="userName"
	// 			onFocus={() => {
	// 				setLabelClassName('userNameTip userNameTipA')
	// 			}}
	// 			onBlur={() => {
	// 				setLabelClassName('userNameTip')
	// 			}}
	// 		/>
	// 	</div>
	// </div>
}
