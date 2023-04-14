import { isEmpty } from "asura-eye"

export function move() {
	const mainDom = document.querySelector('.main')
	const contentDom = document.querySelector('.content-move-border')

	if (isEmpty(contentDom) || isEmpty(mainDom)) return;

	function onMouseMove(e: any) {
		if (isEmpty(mainDom)) return;
		const asideWidth = e.clientX > 100 ? e.clientX : 100
		mainDom.setAttribute('style', `grid-tempLate-columns:${asideWidth}px 1fr;`)
		localStorage.setItem('aside-menu-width', asideWidth)
	}
	contentDom.addEventListener('dragend', onMouseMove)
}