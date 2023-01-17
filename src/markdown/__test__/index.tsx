/* eslint-disable*/
import React from "react"
import { ReactMarkdown } from '..'
import { data } from './demo/data'

export default function ButtonPage() {
	return <>
		<div>
			<ReactMarkdown
				transformImageUri={(src, alt, title) => {					
					return 'img'+src
				}}
				children={data.data} />
		</div>
	</>
}
