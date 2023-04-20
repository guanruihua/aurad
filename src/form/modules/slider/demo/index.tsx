import React, { useEffect } from "react"
import { Slider, SliderDev } from ".."
import { Container, Unit } from "unit-testing-react"
import { useSetState } from "0hook"

export default function () {
	const [pos, setPos] = useSetState({})
	// useEffect(() => {
	// 	let dragged: any = null;

	// 	let source: any = document.getElementById("draggable");
	// 	source.addEventListener("dragstart", (event: any) => {
	// 		// store a ref. on the dragged elem
	// 		dragged = event.target;
	// 		dragged.draggable = true
	// 		console.log(dragged)
	// 	});

	// 	const target: any = document.getElementById("droptarget");
	// 	target.addEventListener("dragover", (event: any) => {
	// 		// prevent default to allow drop
	// 		event.preventDefault();
	// 	});

	// 	target.addEventListener("drop", (event: any) => {
	// 		// prevent default action (open as link for some elements)
	// 		event.preventDefault();
	// 		// move dragged element to the selected drop target
	// 		if (event.target.className === "dropzone") {
	// 			dragged.parentNode.removeChild(dragged);
	// 			event.target.appendChild(dragged);
	// 			source = dragged
	// 			source.addEventListener("dragstart", (event: any) => {
	// 				// store a ref. on the dragged elem
	// 				dragged = event.target;
	// 				dragged.draggable = true
	// 				console.log(dragged)
	// 			});
	// 		}
	// 	});

	// }, [])
	let str = `
	<!DOCTYPE html>
<html>
<head>
  <title>JavaScript拖放示例（可以来回拖拽）</title>
  <style>
    .dragging {
      opacity: 0.5;
      cursor: grab;
    }
    .dropzone {
      border: 1px solid black;
      height: 100px;
      width: 200px;
      padding: 10px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div id="dragme" draggable="true">拖我</div>
  <div class="dropzone">把我放到这里</div>
  <div class="dropzone">或者把我放到这里</div>
  
  <script>
    var dragMe = document.getElementById('dragme');
    var dropzones = document.querySelectorAll('.dropzone');
    
    dragMe.addEventListener('dragstart', handleDragStart);
    dragMe.addEventListener('dragend', handleDragEnd);
    dropzones.forEach(dropzone => {
      dropzone.addEventListener('dragenter', handleDragEnter);
      dropzone.addEventListener('dragover', handleDragOver);
      dropzone.addEventListener('dragleave', handleDragLeave);
      dropzone.addEventListener('drop', handleDrop);
    });
    
    function handleDragStart(event) {
      event.target.classList.add('dragging');
    }
    
    function handleDragEnd(event) {
      event.target.classList.remove('dragging');
    }
    
    function handleDragEnter(event) {
      event.preventDefault();
      event.target.classList.add('hover');
    }
    
    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    }
    
    function handleDragLeave(event) {
      event.target.classList.remove('hover');
    }
    
    function handleDrop(event) {
      event.preventDefault();
      event.target.classList.remove('hover');
      var draggedElement = document.querySelector('.dragging');
      if (draggedElement.parentNode !== event.target) {
        event.target.appendChild(draggedElement);
      } else {
        var siblingElement = getSiblingElement(event.target, draggedElement);
        event.target.insertBefore(draggedElement, siblingElement);
      }
    }
    
    function getSiblingElement(dropzone, draggedElement) {
      var children = Array.from(dropzone.children);
      var draggedIndex = children.indexOf(draggedElement);
      if (draggedIndex === 0) {
        return children[draggedIndex + 1];
      } else {
        return children[draggedIndex - 1];
      }
    }
  </script>
</body>
</html>

`
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

		<Unit >
			<div dangerouslySetInnerHTML={{ __html: str }} />
		</Unit>
	</Container>
}
