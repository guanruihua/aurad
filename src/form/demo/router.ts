import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'form',
	path: '/form',
	children: [
		{
			name: 'class',
			path: '/form/class',
			element: Lazy(import('../demo/classTest')),
		},
		{
			name: 'fc',
			path: '/form/fc',
			element: Lazy(import('../demo/FCTest')),
		},
		{
			name: 'input',
			path: '/form/input',
			children: [
				{
					name: 'base',
					path: '/form/input/base',
					element: Lazy(import('../modules/input/demo'))
				},
				{
					name: 'Object',
					path: '/form/input/object',
					element: Lazy(import('../modules/input/demo/object'))
				},
				{
					name: 'FC',
					path: '/form/input/fc',
					element: Lazy(import('../modules/input/demo/fc'))
				},
				{
					name: 'class',
					path: '/form/input/class',
					element: Lazy(import('../modules/input/demo/class'))
				}
			]
		},
		{
			name: 'select',
			path: '/form/select',
			children: [
				{
					name: 'simple',
					path: '/form/select/simple',
					element: Lazy(import('../modules/select/demo/simple')),
				},
				{
					name: 'multiple',
					path: '/form/select/multiple',
					element: Lazy(import('../modules/select/demo/mult')),
				},
				{
					name: 'form',
					path: '/form/select/form',
					element: Lazy(import('../modules/select/demo/form')),
				},
			],
		},
		{
			name: 'inputNumber',
			path: '/form/inputNumber',
			element: Lazy(import(`../modules/inputNumber/demo`))
		},
		{
			name: 'textarea',
			path: '/form/textarea',
			element: Lazy(import(`../modules/textarea/demo`))
		},
		{
			name: 'checkbox',
			path: '/form/checkbox',
			element: Lazy(import(`../modules/checkbox/demo`))
		},
		{
			name: 'radio',
			path: '/form/radio',
			children: [
				{
					name: 'base',
					path: '/form/radio/base',
					element: Lazy(import('../modules/radio/demo'))
				},
				{
					name: 'FC',
					path: '/form/radio/fc',
					element: Lazy(import('../modules/radio/demo/fc'))
				},
				{
					name: 'class',
					path: '/form/radio/class',
					element: Lazy(import('../modules/radio/demo/class'))
				}
			]
		},
	],
} as MenuObject