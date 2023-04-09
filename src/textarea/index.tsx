import React, { useState, ChangeEvent } from "react"
import { classNames } from "harpe"
import { ComponentProps } from "@/assets"
import './index.less'

interface TextAreaProps extends ComponentProps {
	autoZoom?: boolean
	[key: string]: any
}

export function TextArea(props: TextAreaProps) {

	const { className, autoZoom = false, onInput, ...rest } = props
	const [replicatedValue, setReplicatedValue] = useState<string>("")


	if (autoZoom)
		return <div
			className={classNames('au-textarea', className)}
			data-replicated-value={replicatedValue}
		>
			<textarea
				onInput={function (e: ChangeEvent<HTMLTextAreaElement>) {
					setReplicatedValue(e.target.value || '')
					onInput && onInput(e)
				}}
				{...rest}
			/>
		</div>
	return <div className={classNames('au-textarea', className)} >
		<textarea {...rest} />
	</div>
}
