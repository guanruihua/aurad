import React, { useEffect } from "react"
import { Slider, SliderDev } from ".."
import { Container, Unit } from "unit-testing-react"
import { useSetState } from "0hook"

export default function () {
	const [pos, setPos] = useSetState({})
	useEffect(() => {
		let dragged: any = null;

		let source: any = document.getElementById("draggable");
		source.addEventListener("dragstart", (event: any) => {
			// store a ref. on the dragged elem
			dragged = event.target;
			dragged.draggable = true
			console.log(dragged)
		});

		const target: any = document.getElementById("droptarget");
		target.addEventListener("dragover", (event: any) => {
			// prevent default to allow drop
			event.preventDefault();
		});

		target.addEventListener("drop", (event: any) => {
			// prevent default action (open as link for some elements)
			event.preventDefault();
			// move dragged element to the selected drop target
			if (event.target.className === "dropzone") {
				dragged.parentNode.removeChild(dragged);
				event.target.appendChild(dragged);
				source = dragged
				source.addEventListener("dragstart", (event: any) => {
					// store a ref. on the dragged elem
					dragged = event.target;
					dragged.draggable = true
					console.log(dragged)
				});
			}
		});

	}, [])

	return <Container>
		<Unit>
			<Slider />
		</Unit>
		<Unit>
			<SliderDev />
		</Unit>
		<Unit>
			<div className="dropzone">
				<div id="draggable" draggable>This div is draggable</div>
			</div>
			<div className="dropzone" id="droptarget"></div>

		</Unit>

		
	</Container>
}
