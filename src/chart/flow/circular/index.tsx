import React from "react"
import { type ComponentProps } from "@/assets"
import { ObjectType, debounce } from "abandonjs"
import { mock } from "mock-record"
import { draw } from "./core"

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
	{ form: '1', to: '5' },
	{ form: '1', to: '9' },
	{ form: '5', to: '9' },
	{ form: '3', to: '7' },
	{ form: '3', to: '11' },
	{ form: '7', to: '11' },

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
							padding: '2px 10px',
							cursor: 'pointer',
							zIndex: 10,
							background: '#fff',
						}}
						onClick={() => {
							console.log(id)
						}}
						key={index}>
						{id as string}
					</div>
				)
			})}
			<svg
				className={`${name}-bg`}
				style={{
					width: '100%',
					height: '100%',
					zIndex: 1,
				}}
			>
				{links.map((item, index) => {
					const { form, to } = item
					const itemName = `${name}${form}-${to}-arrow`
					return (
						<path
							style={{
								cursor: 'pointer',
								zIndex: 1
							}}
							stroke="black"
							strokeWidth="3"
							onClick={() => {
								console.log({ form, to })
							}}
							key={itemName + index}
							className={itemName} d='M 0,0 0,0' />
					)
				})}
			</svg>
		</div>
	)
}
