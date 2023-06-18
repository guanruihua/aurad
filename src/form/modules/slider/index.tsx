/* eslint-disable*/
import React from "react"
import { ComponentProps } from '@/assets'
import './index.less'
import { useSlider } from "./hook";

export interface SliderProps extends ComponentProps {
	min?: number
	max?: number
	step?: number
	onChange?(value: number): void
}

/**
 * @description 半成品, 开发中
 * @param props 
 * @returns 
 */
export function Slider(props: SliderProps) {

	const { ref } = useSlider(props)

	return (
		<div
			className="au-slider"
			ref={ref}>
			<div className="au-slider-step" />
			<div className="au-slider-rail" />
			{/* <div className="au-slider-step" >
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="au-slider-handle" >
				<span className="start"></span>
				<span className="end"></span>
			</div> */}
		</div>
	);
}