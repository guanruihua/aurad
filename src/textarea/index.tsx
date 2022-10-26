import React, { useState } from "react"
import styles from './index.module.less'

interface TextAreaProps {
	[key: string]: any
}

export function TextArea(props: TextAreaProps) {
	const { } = props
	const [replicatedValue, setReplicatedValue] = useState<string>("")
	return <div
		className={styles['grow-wrap']}
		data-replicated-value={replicatedValue}
	>
		<textarea onInput={function (e: any) {
			setReplicatedValue(e.target.value || '')
		}} />
	</div>
}
