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
					style={{
						cursor: 'grab'
					}}
					draggable
					onDragStart={(e) => {
						// const target: any = e.target
						// e.dataTransfer.effectAllowed = 'none';
						// e.dataTransfer.effectAllowed = 'all';
						// target.classList.add('dragging');
						console.log('start', e)
					}}
					onDragOver={(e: any) => {
						// e.dataTransfer.effectAllowed = 'all';
						// e.target.classList.add('dragging');
						// console.log('over', e)
						e.preventDefault();
					}}
					// onDragLeave={(e: any) => {
					// 	e.dataTransfer.effectAllowed = 'all';
					// 	e.target.classList.add('dragging');
					// }}
					onDrop={(e) => {
						e.preventDefault()

					}}
					onDragEnd={(e: any) => {
						console.log('end', e)
						// e.target.classList.remove("dragging");
					}}>
				</span>
			</div>
		</div>
	);
}