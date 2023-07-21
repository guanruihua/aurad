import React, { useState, ChangeEvent } from "react"
import { classNames } from "harpe"
import { ComponentProps } from "@/assets"
import './index.less'

export interface TextAreaProps extends ComponentProps {
	/**
	 * @description 自动随着内容增大高度
	 */
	autoZoom?: boolean
	[key: string]: any
}

export function TextArea(props: TextAreaProps) {

	const { value = '', onChange, className, autoZoom = false, onInput, ...rest } = props
	const [replicatedValue, setReplicatedValue] = useState<string>(value)

	React.useEffect(() => {
		if (value !== replicatedValue) {
			setReplicatedValue(value)
		}
	}, [value])

	if (autoZoom)
		return (<div
			className={classNames('au-textarea', className)}
			data-replicated-value={replicatedValue}
		>
			<textarea
				value={replicatedValue}
				onChange={(e) => onChange && onChange(e)}
				onInput={(e: ChangeEvent<HTMLTextAreaElement>) => {
					setReplicatedValue(e.target.value || '')
					onInput && onInput(e)
				}}
				{...rest}
			/>
		</div>)

	return (<div
		className={classNames('au-textarea', className)} >
		<textarea
			onChange={(e) => onChange && onChange(e)}
			value={replicatedValue}
			onInput={(e: ChangeEvent<HTMLTextAreaElement>) => {
				setReplicatedValue(e.target.value || '')
				onInput && onInput(e)
			}}
			{...rest} />
	</div>)
}
