import { FlowChartNode } from '..'

export const nodes: FlowChartNode[][] = [
	[
		{
			id: '1', label: 'Node 1', link: '2', status: 'operable',
			series: {
				// bottomArrow: true
				bottomRightArrow: true,
				rightArrowCover:{
					dottedLine: true
				}
			}
		},
		// { id: '2', label: 'Node 2', link: '3' },
		{
			id: '2',
			label: 'Node 2',
			status: 'error',
			// label: 'Node fjskdjfkdiidddffffffffffffffffffffffffffffffffff fjskdjfkdiidddffffffffffffffffffffffffffffffffff fjskdjfkdiidddffffffffffffffffffffffffffffffffff fjskdjfkdiidddffffffffffffffffffffffffffffffffff fjskdjfkdiidddffffffffffffffffffffffffffffffffff ffffffffffffffffffffffddddddddddddddddd2',
			link: '3'
		},
		{
			id: '3',
			label: 'node 3',
			status: 'finish',
			// label: 'jfskdjfkj',
			// label: 'Node3731824789237487239483731Node3731824789237487239483731Node3731824789237487239483731Node3731824789237487239483731Node3731824789237487239483731',
			link: '5',
			style: {
				// maxHeight: 30
			}
		},
		{}
	],
	[
		{},
		{ id: '4', label: 'Node 4', link: '8' },
		{ id: '5', label: 'Node 5', link: '6' },
		{ id: '6', label: 'Node 6', link: '7' },
	],
	[
		{},
		{ id: '8', label: 'Node 8', link: '9' },
		{ id: '9', label: 'Node 9', link: '9' },
	]
];