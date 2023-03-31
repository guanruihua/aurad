/* eslint-disable*/
import { ComponentProps } from "@/assets"
import React, { RefObject, useEffect, useRef } from "react"

export interface ArrowProps extends ComponentProps {
	size?: number
	render?: boolean
}

export function RightArrow(props: ArrowProps) {

	const { style = {}, render = true } = props

	const ref: RefObject<HTMLDivElement> = useRef(null)
	const [size, setSize] = React.useState<number>(props.size || 100)

	useEffect(() => {
		if (!ref.current) return;
		const { width = 100 } = ref.current.getBoundingClientRect()
		if (width !== size) setSize(width)
	}, [ref.current])

	return <div className="right-arrow" ref={ref} style={{ height: '100%', width: '100%', ...style }}>
		{render && <svg viewBox={`0 0 ${size} 12`}>
			<defs>
				<marker id="arrow" markerWidth="10" markerHeight="6" refX="2" refY="3" orient="auto">
					<path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
				</marker>
			</defs>
			<path d={`M0,6 ${size - 12},6`} stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
		</svg>}
	</div>
}

export function BottomArrow(props: ArrowProps) {
	const { style = {}, render = true } = props
	const ref: RefObject<HTMLDivElement> = useRef(null)
	const [h, setH] = React.useState<number>(props.size || 0)

	useEffect(() => {
		if (!ref.current) return;
		const { height = 30 } = ref.current.getBoundingClientRect()
		if (height !== h) setH(height)
	}, [ref.current])

	return <div className='bottom-arrow' ref={ref} style={{ height: '100%', width: '100%', ...style }}>
		{render && <svg width="12" height="100%" viewBox={`0 0 12 ${h}`} xmlns="http://www.w3.org/2000/svg">
			<defs>
				<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
					<path d="M0,0 L10,5 L0,10" fill="currentColor" />
				</marker>
			</defs>
			<path d={`M6,0 V${h - 12}`} stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
		</svg>}
	</div>
}


export function BottomRightArrow(props: ArrowProps) {
	const { style = {}, render = true } = props
	const ref: RefObject<HTMLDivElement> = useRef(null)
	const [h, setH] = React.useState<number>(props.size || 0)
	const [w, setW] = React.useState<number>(30)

	useEffect(() => {
		if (!ref.current) return;
		const { height = 30, width = 30 } = ref.current.getBoundingClientRect()
		if (height !== h) setH(height)
		if (width > 0 && width !== w) setW(w)
		console.log(ref.current.getBoundingClientRect())
	}, [ref.current])

	return <div className='bottom-right-arrow' ref={ref} style={{ height: '100%', width: '100%', ...style }}>
		{render && <svg width="12" height="100%" viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg">
			<defs>
				<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
					<path d="M0,0 L10,5 L0,10" fill="currentColor" />
				</marker>
			</defs>
			<path d={`M0,0 L${w - 5},${h - 5}`} stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
		</svg>}
	</div>
}