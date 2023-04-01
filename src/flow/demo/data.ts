import { isArray, isEffectArray, isUndefined } from 'asura-eye';
import { FlowChartNode } from '..'

function flowAdapter(nodes: FlowChartNode[][]) {
	const newNodes: FlowChartNode[][] = [...nodes]

	// 行
	for (let i = 0; i < nodes.length; i++) {
		const row: FlowChartNode[] = newNodes[i]
		if (!isEffectArray(row)) continue;

		// 列
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
				links = links.filter(_id => nextColId !== _id)
			}
			// 下一
			const nextRowId = isEffectArray(nodes[i + 1]) ? nodes[i + 1][j]?.id : undefined
			if (!isUndefined(nextRowId) && links.includes(nextRowId)) {
				item.bottomArrow = true
				links = links.filter(_id => nextRowId !== _id)
			}
			// 斜一
			const nextRowNextColId = isEffectArray(nodes[i + 1]) ? nodes[i + 1][j + 1]?.id : undefined
			if (!isUndefined(nextRowNextColId) && links.includes(nextRowNextColId)) {
				item.bottomRightArrow = true
				links = links.filter(_id => nextRowNextColId !== _id)
			}

			if (links.length === 0) continue;
			if (i + 1 === nodes.length) continue;

			// 斜X (下一行)
			const nextRow: FlowChartNode[] = isEffectArray(nodes[i + 1]) ? nodes[i + 1] : []
			if (isEffectArray(nextRow)) {
				for (let x = j + 1; x < nextRow.length; x++) {
					const xRowId = nextRow[x]?.id
					if (isUndefined(xRowId)) continue;
					if (links.includes(xRowId)) {

						links = links.filter(_id => xRowId !== _id)

						if (isUndefined(newNodes[i][x - 1])) continue;
						if (isUndefined(newNodes[i][x - 1].bottomArrowCover)) newNodes[i][x - 1].bottomArrowCover = {};
						if (isUndefined(newNodes[i][x - 1].bottomRightArrowCover)) newNodes[i][x - 1].bottomRightArrowCover = {};
						if (isUndefined(item.bottomRightArrowCover)) item.bottomRightArrowCover = {}
						if (isUndefined(item.bottomRightArrowCover.style)) item.bottomRightArrowCover.style = {}

							; (newNodes[i][x - 1].bottomArrowCover as any).hidden = true
							; (newNodes[i][x - 1].bottomRightArrowCover as any).hidden = true
						item.bottomRightArrow = true
						item.bottomRightArrowCover.style.gridColumn = 'auto / span 3'
						break;
					}
				}
			}

			if (links.length === 0) continue;

			// 斜X (右一列)
			const nextColIds: (string | undefined)[] = newNodes.map(row => row[j + 1]?.id).filter(Boolean)
			if (isEffectArray(nextColIds)) {

				for (let y = 0; y < nextColIds.length; y++) {
					const nextColId = nextColIds[y]
					if (!(nextColId && links.includes(nextColId))) continue;
					links = links.filter(_id => nextColId !== _id)

					if(isUndefined(newNodes[y-1][j])) continue;
					if(isUndefined(item.bottomRightArrowCover)) item.bottomRightArrowCover ={}
					if(isUndefined(item.bottomRightArrowCover.style)) item.bottomRightArrowCover.style ={}

					if(isUndefined(newNodes[y-1][j].rightArrowCover)) newNodes[y-1][j].rightArrowCover = {}
					if(isUndefined(newNodes[y-1][j].bottomRightArrowCover)) newNodes[y-1][j].bottomRightArrowCover = {}

					item.bottomRightArrow = true
					item.bottomRightArrowCover.style.gridRow = 'auto / span 3'
					;(newNodes[y-1][j].rightArrowCover as any).hidden = true;
					;(newNodes[y-1][j].bottomRightArrowCover as any).hidden = true;
					break;
				}

				continue;
			}
		
		}
	}

	return newNodes
}

export const nodes: FlowChartNode[][] = flowAdapter([
	[
		{
			id: '1', label: 'Node 1', link: ['2', '8'], status: 'operable',
			rightArrowCover: { dottedLine: true },
		},
		{
			id: '2',
			label: 'Node 2',
			status: 'error',
			link: ['3', '4', '5'],
		},
		{
			id: '3',
			label: 'node 3',
			status: 'finish',
			width: 200,
			link: ['6'],
		},
		{},
		{},
	],
	[
		{ },
		{ id: '4', label: 'Node 4', link: ['8', '5', '10'], },
		{ id: '5', label: 'Node 5', link: '6' },
		{ id: '6', label: 'Node 6' },
		{},
	],
	[
		{ id: '7', label: 'Node 7', link: '8' },
		{ id: '8', label: 'Node 8', link: '9' },
		{ id: '9', label: 'Node 9', link: '10' },
		{ id: '10', label: 'Node 10', link: '11' },
		{ id: '11', label: 'Node 11' },
	]
])