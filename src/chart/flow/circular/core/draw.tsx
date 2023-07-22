import { type ObjectType } from 'abandonjs'
import { isEffectArray, isEmpty, isString, isUndefined } from 'asura-eye'
import { handleLayout } from './layout'

const baseStyle = `position: absolute;transform-origin: 0 0; overflow: visible;width: 100%;`

function is(a: number, b: number, float = 1) {
	return Math.abs(a - b) < float
}


export function draw(props: ObjectType) {
	const { name, links = [] } = props
	handleLayout(props)
	const contentDom: HTMLDivElement | null = document.querySelector(`.${name}`)
	const canvas: HTMLCanvasElement | null = document.querySelector(`.${name}-bg`)
	if (!contentDom || !canvas || !isEffectArray(links)) return;
	const ctx = canvas.getContext('2d')
	if (!ctx) return;

	const { left: contentLeft, top: contentTop, height: contentHeight, width: contentWidth } = contentDom.getBoundingClientRect()

	canvas.width = contentWidth
	canvas.height = contentHeight

	const getBoundingClientRect = (id: string) => {
		const itemName = `${name}-${id}`
		const nodeDom: HTMLDivElement | null = document.querySelector(`.${itemName}`)
		if (!nodeDom) return
		const { left, top, width, height } = nodeDom.getBoundingClientRect()
		return [
			(left + width / 2) - contentLeft,
			(top + height / 2) - contentTop
		]
	}


	ctx.lineWidth = 0.8;
	ctx.strokeStyle = "red";
	setTimeout(() => {
		links.forEach((link: ObjectType, index: number) => {
			const { form, to } = link
			const f = getBoundingClientRect(form as string)
			const t = getBoundingClientRect(to as string)
			if (!f || !t) return;
			const [fx, fy] = f
			const [tx, ty] = t
			// console.log(index)

			ctx.beginPath();
			ctx.moveTo(fx, fy);
			ctx.lineTo(tx, ty);
			ctx.closePath();
			ctx.stroke();

		})
	}, 200)
	// links.forEach((link: ObjectType, index: number) => {
	// 	const { form, to } = link
	// 	const f = getBoundingClientRect(form as string)
	// 	const t = getBoundingClientRect(to as string)
	// 	if (!f || !t) return;
	// 	const [fx, fy] = f
	// 	const [tx, ty] = t
	// 	console.log(index)

	// 	ctx.beginPath();
	// 	ctx.moveTo(fx, fy);
	// 	ctx.lineTo(tx, ty);
	// 	ctx.closePath();
	// 	ctx.stroke();

	// })
}