import React, { type ReactNode } from "react"
import { ComponentProps } from ".."
import './index.less'
import { ObjectType } from "abandonjs"
import { classNames } from "harpe"

export interface CodeLine extends ObjectType {
	txt: string | ReactNode
	cells: string[]
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
				cells: lineStr.split(/ |\s|\r|\n/),
				tabCount: tabMatch[0].length,
			}

			lines.push(line)
		})

	console.log(lines[0])

	return (<div className="au-code">
		{lines.map((line: CodeLine, index: number) => {
			const { txt, cells, tabCount } = line
			return (
				<div
					className="au-code-line"
					style={{
						// paddingLeft: tabCount * 2
						marginLeft: tabCount * 10
					}}
					key={index}>
					{cells.map((cell, cIndex) => {
						const newClassName = classNames("au-code-cell",
							{
								[`au-code-cell-op-${cell}`]: ['import', 'type'].includes(cell)
							}
						)
						return (
							<span
								className={newClassName}
								key={cIndex}>
								{cell}
							</span>
						)
					})}
					{/* <pre>{txt}</pre> */}
				</div>
			)
		}

		)}
	</div>)
	// return (<div className="au-code">
	// 	{lines.map((line: CodeLine, index: number) => {
	// 		const { txt, tabCount } = line
	// 		return (
	// 			<div
	// 				className="au-code-line"
	// 				style={{
	// 					// paddingLeft: tabCount * 2
	// 					marginLeft: tabCount * 10
	// 				}}
	// 				key={index}>
	// 				<pre>{txt}</pre>
	// 			</div>
	// 		)
	// 	}

	// 	)}
	// </div>)
}
