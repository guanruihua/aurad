import { isEmpty } from "asura-eye"

export function move() {
	const mainDom = document.querySelector('.au-main')
	const contentDom = document.querySelector('.au-content-move-border')

	if (isEmpty(contentDom) || isEmpty(mainDom)) return;

	function onMouseMove(e: DragEvent) {
		e.preventDefault && e.preventDefault()
		e.dataTransfer?.effectAllowed && (e.dataTransfer.effectAllowed = 'move');
		e.dataTransfer?.dropEffect && (e.dataTransfer.dropEffect = 'move');
		if (isEmpty(mainDom)) return;
		const asideWidth = e.clientX > 100 ? e.clientX : 100
		mainDom.setAttribute('style', `grid-tempLate-columns:${asideWidth}px 1fr;`)
		localStorage.setItem('au-aside-menu-width', String(asideWidth))
	}

	contentDom.addEventListener('dragend', onMouseMove)
}