/* eslint-disable*/
import { isEmpty } from "asura-eye"

function throttle(func: any, delay = 100) {
	let timer: any = null;
	let last = 0;
	return function () {
		const now = +new Date();
		if (now - last < delay) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			timer = setTimeout(() => {
				last = now;
				func.apply(this, arguments);
			}, delay);
		} else {
			last = now;
			func.apply(this, arguments);
		}
	}
}

export function move() {
	const mainDom = document.querySelector('.main')
	const contentDom = document.querySelector('.content-move-border')

		; (window as any).mouseUpStatus = false
		; (window as any).mouseDownStatus = false

	if (isEmpty(contentDom) || isEmpty(mainDom)) return;

	function onMouseMove(e: any) {
		// console.log(e.type, (window as any).mouseUpStatus, (window as any).mouseDownStatus)
		if (
			mainDom && e.type === 'mousemove'
			&& (window as any).mouseDownStatus && !(window as any).mouseUpStatus
		) {
			const asideWidth = e.clientX
			mainDom.setAttribute('style', `grid-tempLate-columns:${asideWidth}px 1fr;`)
		}
	}

	const handleMouseMove = throttle(onMouseMove, 200)

	document.addEventListener('mousedown', () => {
		// console.log('mousedown', (window as any).mouseUpStatus, (window as any).mouseDownStatus)
			; (window as any).mouseUpStatus = false
			; (window as any).mouseDownStatus = true
		window.getSelection()?.removeAllRanges();
	})

	document.addEventListener('mouseup', () => {
		// console.log('mouseup', (window as any).mouseUpStatus, (window as any).mouseDownStatus)
			; (window as any).mouseUpStatus = true
			; (window as any).mouseDownStatus = false
		window.getSelection()?.removeAllRanges();
	})

	function onMouseUp(e: any) {

		document.removeEventListener('mousemove', handleMouseMove)
		document.onmousemove = null
		document.removeEventListener('mouseup', onMouseUp)
		document.onmouseup = null
		contentDom?.removeEventListener('mouseup', onMouseUp)
		contentDom?.removeEventListener('mousedown', onMouseDown)

		if (e.target.className !== 'content-move-border') return;
		contentDom?.addEventListener('mousedown', onMouseDown)
	}

	function onMouseDown(e: any) {
		if (e.target.className !== 'content-move-border') return onMouseUp(e);
		document.addEventListener('mousemove', handleMouseMove)
		contentDom?.addEventListener('mouseup', onMouseUp)
	}

	contentDom.addEventListener('mousedown', onMouseDown)
}