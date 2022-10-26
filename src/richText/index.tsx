import React, { useEffect } from "react"
import styles from './index.module.less'

interface RichTextProps {
	[key: string]: any
}

function bold() {
	document.execCommand('StyleWithCSS', true)
	document.execCommand('Bold', false)
}

export function RichText(props: RichTextProps) {
	const { } = props
	useEffect(() => {
		// window.addEventListener("load", () => {
		// 	(frames as any)["editor"].document.designMode = "on";
		// });
		document.execCommand('StyleWithCSS', true)
		document.execCommand('Bold', true)

	}, [])
	return <div>
		<button onClick={() => { bold() }}>bold</button>
		<div
			className={styles['rt-container']}
			contentEditable={true}
		>
		</div>
	</div>
}
