import React, { useEffect } from "react"
import { Slider, SliderDev } from ".."
import { Container, Unit } from "unit-testing-react"
import { useSetState } from "0hook"

export default function () {
	const [pos, setPos] = useSetState({})
	useEffect(() => {
		// let dragged: any = null;

		// let source: any = document.getElementById("draggable");
		// source.addEventListener("dragstart", (event: any) => {
		// 	// store a ref. on the dragged elem
		// 	dragged = event.target;
		// 	dragged.draggable = true
		// 	console.log(dragged)
		// });

		// const target: any = document.getElementById("droptarget");
		// target.addEventListener("dragover", (event: any) => {
		// 	// prevent default to allow drop
		// 	event.preventDefault();
		// });

		// target.addEventListener("drop", (event: any) => {
		// 	// prevent default action (open as link for some elements)
		// 	event.preventDefault();
		// 	// move dragged element to the selected drop target
		// 	if (event.target.className === "dropzone") {
		// 		dragged.parentNode.removeChild(dragged);
		// 		event.target.appendChild(dragged);
		// 		source = dragged
		// 		source.addEventListener("dragstart", (event: any) => {
		// 			// store a ref. on the dragged elem
		// 			dragged = event.target;
		// 			dragged.draggable = true
		// 			console.log(dragged)
		// 		});
		// 	}
		// });
		var dragMe:any = document.getElementById('dragme');
		var dropzones:any = document.querySelectorAll('.dropzone');

		dragMe.addEventListener('dragstart', handleDragStart);
		dragMe.addEventListener('dragend', handleDragEnd);
		dropzones.forEach((dropzone:any) => {
			dropzone.addEventListener('dragenter', handleDragEnter);
			dropzone.addEventListener('dragover', handleDragOver);
			dropzone.addEventListener('dragleave', handleDragLeave);
			dropzone.addEventListener('drop', handleDrop);
		});

		function handleDragStart(event:any) {
			event.target.classList.add('dragging');
		}

		function handleDragEnd(event:any) {
			event.target.classList.remove('dragging');
		}

		function handleDragEnter(event:any) {
			event.preventDefault();
			event.target.classList.add('hover');
		}

		function handleDragOver(event:any) {
			event.preventDefault();
			event.dataTransfer.dropEffect = 'move';
		}

		function handleDragLeave(event:any) {
			event.target.classList.remove('hover');
		}

		function handleDrop(event:any) {
			event.preventDefault();
			event.target.classList.remove('hover');
			var draggedElement:any = document.querySelector('.dragging');
			if (draggedElement.parentNode !== event.target) {
				event.target.appendChild(draggedElement);
			} else {
				var siblingElement = getSiblingElement(event.target, draggedElement);
				event.target.insertBefore(draggedElement, siblingElement);
			}
		}

		function getSiblingElement(dropzone:any, draggedElement:any) {
			var children = Array.from(dropzone.children);
			var draggedIndex = children.indexOf(draggedElement);
			if (draggedIndex === 0) {
				return children[draggedIndex + 1];
			} else {
				return children[draggedIndex - 1];
			}
		}
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

		<Unit>
			<div id="dragme" draggable="true">拖我</div>
			<div className="dropzone"></div>
			<div className="dropzone"></div>
		</Unit>

	</Container>
}

/**
 * 
 * 
/* 更改禁用状态图标 */
.dragging {
  // opacity: 0.5;
  /* 更改透明度 */
  // cursor: not-allowed;
  // cursor: pointer;
	// width: 100% !important;
	// height: 100% !important;
  cursor: grab !important;
  /* 更改鼠标指针 */
  /* 添加其他样式，以更改图标外观 */
}


body {
  /* Prevent the user selecting text in the example */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 60px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}
 * 
 * 
 */