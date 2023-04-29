import React, { type ReactNode } from "react"
import { ComponentProps } from ".."
import './index.less'
import { ObjectType } from "abandonjs"

export interface CodeLine extends ObjectType {
	txt: string | ReactNode
	tabCount: number
}


export interface CodeProps extends ComponentProps {
	code: string
}

export function Code(props: CodeProps) {

	const { code } = props

	const lines: CodeLine[] = []

	code
		.split(/\n/)
		.forEach(lineStr => {
			const tabMatch = lineStr.match(/^[ \t\s\r]+/) || [[]]
			const line: CodeLine = {
				txt: lineStr.replace(/^[ \t\s\r]+/, ''),
				tabCount: tabMatch[0].length,
			}

			lines.push(line)
		})

	// console.log(lines)

	return (<div className="au-code">
		{lines.map((line: CodeLine, index: number) => {
			const { txt, tabCount } = line
			return (
				<div
					className="au-code-line"
					style={{
						// paddingLeft: tabCount * 2
						marginLeft: tabCount * 10
					}}
					key={index}>
					<pre>{txt}</pre>
				</div>
			)
		}

		)}
	</div>)
}
