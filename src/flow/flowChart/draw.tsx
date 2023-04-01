/* eslint-disable*/
import { isEffectArray, isEmpty, isString } from 'asura-eye'
import { ComponentProps } from '@/assets'
import { FlowChartNode } from '../type'

export interface FlowChartProps extends ComponentProps {
	name: string
	nodeWidth?: number
	columnGap?: number
	rowGap?: number
	nodes: FlowChartNode[];
	[key: string]: any
};

export function draw(props: FlowChartProps) {
	const { name, nodeWidth, nodes = [], count = 5, className, columnGap = 80, rowGap = 30, style, ...rest } = props
	const id = 'au-flow-chart-' + name

	const content = document.querySelector(`.${id}`)
	const rowCount = Math.floor(nodes.length / count)
	if (isEmpty(content)) return;

	const contentRecord = content.getBoundingClientRect()
	const db: Record<string, any> = {}
	const indexes: Record<string, number> = {}
	const links: { form: string, to: string }[] = []
	nodes.forEach((item, index) => {
		const { id: cid, link } = item

		if (isEmpty(cid)) return;

		if (isString(link)) links.push({ form: cid, to: link })
		if (isEffectArray(link)) link.forEach(li => links.push({ form: cid, to: li }))

		const unit = document.querySelector(`.${id}>.au-flow-chart-item-${cid}`)
		if (isEmpty(unit)) return;
		const record = unit.getBoundingClientRect()
		db[cid] = record
		indexes[cid] = index
	})

	links.forEach((link) => {
		const { x: cx, y: cy } = contentRecord
		const { form, to } = link

		const { right: fr, x: fx, y: fy, width: fw, height: fh } = db[form]
		const fi = indexes[form]
		const { left: tl, x: tx, y: ty } = db[to]
		const ti = indexes[to]
		const lineClass = `.arrow-${form}-${to}`
		const unit = document.querySelector(lineClass)
		const svg = document.querySelector(`${lineClass}>svg`)
		const path = document.querySelector(`${lineClass}>svg>path`)

		if (!unit || !svg || !path) return;
		// 斜下
		for (let i = 1; i < count; i++)
			if (fi + count + i === ti || fi + count * i + 1 === ti) {

				const x = fx - cx + fw
				const y = fy - cy + fh - 6
				const newHeight = 12
				const newStyle = `position: absolute;transform-origin: 0 0;`
					+ `width: 100%;`
					+ `height: ${newHeight}px;`
					+ `left:${x}px;`
					+ `top:${y}px;`

				unit.setAttribute('style', newStyle)
				svg.removeAttribute('viewBox')
				path.setAttribute('d', `M0,6 ${tl - fr},${ty - fy - fh + 6}`)
				return;
			}

		// 下
		for (let i = 1; i < rowCount; i++)
			if (fi + count * i === ti) {

				const x = fx - cx + fw / 2
				const y = fy - cy + fh
				const newWidth = ty - fy - fh
				const newHeight = 12
				const newStyle = `position: absolute;transform-origin: 0 0;`
					+ `width:${newWidth}px;`
					+ `height: ${newHeight}px;`
					+ `left:${x}px;`
					+ `top:${y}px;`
					+ `transform: rotate(90deg);`

				unit.setAttribute('style', newStyle)
				svg.setAttribute('viewBox', `0 0 ${newWidth} ${newHeight}`)
				path.setAttribute('d', `M0,6 ${newWidth},${newHeight / 2}`)
				return;
			}
		// 水平 
		for (let i = fi; i < nodes.length; i++)
			if (i === ti) {
				const x = fx + fw - cx
				const y = fy + (fh / 2) - 3 - cy
				const newWidth = tl - fr
				const newHeight = 12
				const newStyle = `position: absolute;transform-origin: 0 0;`
					+ `width:${newWidth}px;`
					+ `height: ${newHeight}px;`
					+ `left:${x}px;`
					+ `top:${y}px;`

				unit.setAttribute('style', newStyle)
				svg.setAttribute('viewBox', `0 0 ${newWidth} ${newHeight}`)
				path.setAttribute('d', `M0,6 ${newWidth},${newHeight / 2}`)
				return;
			}

	})

}