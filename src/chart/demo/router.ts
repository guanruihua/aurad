import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'chart',
	path: '/chart',
	children: [
		{
			name: 'flow',
			path: '/chart/flow',
			children: [
				{
					name: 'grid',
					path: '/chart/flow/grid',
					element: Lazy(import('../flow/demo/grid')),
				},
				{
					name: 'Circular',
					path: '/chart/flow/circular',
					element: Lazy(import('../flow/demo/circular')),
				},
			],
		},
		{
			name: 'echart',
			path: '/chart/echart',
			element: Lazy(import('../echart/demo')),
		},
		{
			name: 'XYCoordinate',
			path: '/chart/xyCoordinate',
			element: Lazy(import('../coordinate/demo')),
		}
	]
} as MenuObject