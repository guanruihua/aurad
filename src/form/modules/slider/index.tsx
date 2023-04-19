/* eslint-disable*/
import React from "react"
import { ComponentProps } from '@/assets'

export interface SliderProps extends ComponentProps {

}

export function Slider(props: SliderProps) {


	// return (
	// 	<div className="au-slider">
	// 		<div className="au-slider-rail" ></div>
	// 		<div className="au-slider-step" ></div>
	// 		<div className="au-slider-handle" ></div>
	// 	</div>
	// )
	return (
		<input
			type="range"
		// min={props.min}
		// max={props.max}
		// step={props.step}
		// id={props.id}
		// defaultValue={props.defaultValue}
		// onChange={handleChange}
		/>
	);
}