/* eslint-disable*/
import React from "react"
import { ComponentProps } from '@/assets'
import './index.less'

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

export function SliderDev(props: SliderProps) {

	return (
		<div className="au-slider">
			{/* <div className="au-slider-rail" ></div> */}
			<div className="au-slider-step" >
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="au-slider-handle" >
				<span className="start"></span>
				<span className="end"
					draggable
					onDragStart={(e: any) => {
						console.log('start', e.target.getBoundingClientRect())
					}}
					onDragOver={(e: any) => {
						console.log('over', e.target.getBoundingClientRect())
					}}
					onDrag={(e: any) => {
						console.log('ing', e.target.getBoundingClientRect())
					}}
					onDragEnd={(e: any) => {
						console.log('end', e.target.getBoundingClientRect())
					}}
				></span>
			</div>
		</div>
	);
}