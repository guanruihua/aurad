import React, { useState, ChangeEvent } from "react"
import styles from './index.module.less'

interface TextAreaProps {
	[key: string]: any
}

export function TextArea(props: TextAreaProps) {
	const { } = props
	const [replicatedValue, setReplicatedValue] = useState<string>("")
	return <div
		className={styles['rh-textarea']}
		data-replicated-value={replicatedValue}
	>
		<textarea
			onInput={function (e: ChangeEvent<HTMLTextAreaElement>) {
				setReplicatedValue(e.target.value || '')
			}} />
	</div>
}
