import React, { useState, ChangeEvent } from "react"
import { classNames } from "harpe"
import { ComponentProps } from "@/assets"
import './index.less'

interface TextAreaProps extends ComponentProps {
	[key: string]: any
}

export function TextArea(props: TextAreaProps) {
	const { className, onInput, ...rest } = props
	const [replicatedValue, setReplicatedValue] = useState<string>("")
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
}
