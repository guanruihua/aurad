import React from "react"

interface ProgressProps {
	[key: string]: any
}

export function Progress(props: ProgressProps) {
	const { } = props
	return <div>
		<div>
			<progress value="56" max="100"></progress>
		</div>
		<div>
			<meter min="0" max="100" value="56" low={25} high={75} optimum={50}></meter>
		</div>
	</div>
}
