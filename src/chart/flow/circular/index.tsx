import React from "react"
import { type ComponentProps } from "@/assets"
import { ObjectType, debounce } from "abandonjs"
import { mock } from "mock-record"
import { draw, handleLayout } from "./core"
import { classNames } from "harpe"

export interface CircularProps extends ComponentProps {
	[key: string]: any
}


const nodes = [
	{ id: '1' },
	{ id: '2' },
	{ id: '3' },
	{ id: '4' },
	{ id: '5' },
	{ id: '6' },
	{ id: '7' },
	{ id: '8' },
	{ id: '9' },
	{ id: '10' },
	{ id: '11' },
	{ id: '12' },
]

const links = [
	{ form: '1', to: '2' },
	{ form: '2', to: '3' },
	{ form: '3', to: '4' },
	{ form: '4', to: '5' },
	{ form: '5', to: '6' },
	{ form: '6', to: '7' },
	{ form: '7', to: '8' },
	{ form: '8', to: '9' },
	{ form: '9', to: '10' },
	{ form: '10', to: '11' },
	{ form: '11', to: '12' },
	{ form: '12', to: '1' },
]


export function Circular(props: CircularProps) {
	const {
		name = 'flow-circular-' + mock('@id'),
		// links = links
	} = props

	const newClassName = name

	React.useEffect(() => {
		const content = document.querySelector(`.${name}`)
		const observer = new ResizeObserver(debounce(() => {
			// handleLayout({ name, links: db, nodes })
			draw({ name, links, nodes })
		}, 50));
		if (!content) return;
		observer.observe(content);
		return () => {
			observer.unobserve(content)
		}
	}, [])


	return (
		<div
			className={newClassName}
			style={{
				position: 'relative',
				width: '100%',
				// zoom: '.6',
				background: 'transparent'
			}}>
			{nodes.map((item: ObjectType, index: number) => {
				const { id = '' } = item
				const itemName = `${name}-${id}`
				return (
					<div
						className={itemName}
						style={{
							display: 'inline-block',
							position: 'absolute',
							border: '1px solid #000',
							// padding: '10px 10px',
							zIndex: 10,
							background: '#fff'
						}}
						onClick={() => {
							console.log(id)
						}}
						key={index}>
						{id as string}
					</div>
				)
			})}

			<canvas
				className={`${name}-bg`}
				style={{
					// width: '100%',
					zIndex: 1,
					// zoom: '.6',
					// background: 'grey'
				}}
			/>
		</div>
	)
}
