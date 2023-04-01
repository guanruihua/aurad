import { isArray, isEffectArray, isUndefined } from 'asura-eye';
import { FlowChartNode } from '..'

function flowAdapter(nodes: FlowChartNode[][]) {
	const newNodes: FlowChartNode[][] = [...nodes]

	for (let i = 0; i < nodes.length; i++) {
		const row: FlowChartNode[] = nodes[i]
		if (!isEffectArray(row)) continue;
		for (let j = 0; j < row.length; j++) {
			const item: FlowChartNode = row[j]
			const { id, link } = item

			if (isUndefined(id) || isUndefined(link)) {
				continue;
			}

			let links: string[] = isArray(link) ? link : [link]
			// 右一
			const nextColId = row[j + 1]?.id
			if (!isUndefined(nextColId) && links.includes(nextColId)) {
				item.rightArrow = true
				links = links.filter(_id => nextColId != _id)
			}
			// 下一
			const nextRowId = isEffectArray(nodes[i + 1]) ? nodes[i + 1][j]?.id : undefined
			if (!isUndefined(nextRowId) && links.includes(nextRowId)) {
				item.bottomArrow = true
				links = links.filter(_id => nextRowId != _id)
			}
			// 斜一
			const nextRowNextColId = isEffectArray(nodes[i + 1]) ? nodes[i + 1][j + 1]?.id : undefined
			if (!isUndefined(nextRowNextColId) && links.includes(nextRowNextColId)) {
				item.bottomRightArrow = true
				links = links.filter(_id => nextRowNextColId != _id)
			}

			if (links.length === 0) continue;

			// 斜X (下一行)
			// const nextRowNextXColId = isEffectArray(nodes[i + 1]) ? nodes[i + 1][j + 1]?.id : undefined
			// if (!isUndefined(nextRowNextXColId) && links.includes(nextRowNextXColId)) {
			// 	item.bottomRightArrow = true
			// }

			// 斜X (右一列)
			const nextXRowNextColId = isEffectArray(nodes[i + 1]) ? nodes[i + 1][j + 1]?.id : undefined
			if (!isUndefined(nextXRowNextColId) && links.includes(nextXRowNextColId)) {
				// item.bottomRightArrow = true
			}
		}
	}

	return newNodes
}

export const nodes: FlowChartNode[][] = flowAdapter([
	[
		{
			id: '1', label: 'Node 1', link: '2', status: 'operable',
			rightArrowCover: {
				dottedLine: true
			},
			bottomRightArrow: true,
			bottomRightArrowCover: {
				style: {
					gridRow: 'auto / span 3'
				}
			}
		},
		{
			id: '2',
			label: 'Node 2',
			status: 'error',
			link: ['3', '5'],
		},
		{
			id: '3',
			label: 'node 3',
			status: 'finish',
			width: 200,
			link: ['5', '6'],
		},
		{}
	],
	[
		{
			rightArrowCover: {
				hidden: true
			},
			bottomRightArrowCover: {
				hidden: true
			}
		},
		{
			id: '4', label: 'Node 4', link: '8',
			bottomRightArrow: true,
			bottomRightArrowCover: {
				style: {
					gridColumn: 'auto / 3 span'
				}
			}
		},
		{
			id: '5', label: 'Node 5', link: '6',
			bottomArrowCover: {
				hidden: true,
			},
			bottomRightArrowCover: {
				hidden: true,
			}
		},
		{ id: '6', label: 'Node 6', link: '7' },
	],
	[
		{ id: '7', label: 'Node 7', link: '8' },
		{ id: '8', label: 'Node 8', link: '9' },
		{ id: '9', label: 'Node 9', link: '10' },
		{ id: '10', label: 'Node 10', link: '10' },
	]
])



