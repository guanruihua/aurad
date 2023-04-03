import { SimpleFlowChartNode } from '..'

export const nodes: SimpleFlowChartNode[][] = [
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
]