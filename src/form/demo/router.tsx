import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Container, Unit } from "unit-testing-react"
import React from "react"

export default {
	name: 'form',
	path: '/form',
	children: [
		{
			index: true,
			element: <Container columns={2}>
				<Unit>{Lazy(import('./classTest'))}</Unit>
				<Unit>{Lazy(import('./FCTest'))}</Unit>
			</Container>,
		},
		{
			name: 'input',
			path: '/form/input',
			element: <Container columns={1}>
				<Unit>{Lazy(import('../modules/input/demo/class'))}</Unit>
				<Unit>{Lazy(import('../modules/input/demo/fc'))}</Unit>
				<Unit>{Lazy(import('../modules/input/demo'))}</Unit>
			</Container>
		},
		{
			name: 'inputNumber',
			path: '/form/inputNumber',
			element: Lazy(import(`../modules/inputNumber/demo`))
		},
		{
			name: 'inputObject',
			path: '/form/inputObject',
			element: <Container columns={1}>
				<Unit>{Lazy(import('../modules/input/demo/object'))}</Unit>
			</Container>
		},
		{
			name: 'select',
			path: '/form/select',
			element: <Container columns={3} grid>
				<Unit>{Lazy(import('../modules/select/demo/simple'))}</Unit>
				<Unit>{Lazy(import('../modules/select/demo/mult'))}</Unit>
				<Unit>{Lazy(import('../modules/select/demo/form'))}</Unit>
			</Container>
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
			element: <Container columns={1}>
				<Unit> {Lazy(import('../modules/radio/demo'))} </Unit>
				<Unit>{Lazy(import('../modules/radio/demo/fc'))}</Unit>
				<Unit>{Lazy(import('../modules/radio/demo/class'))}</Unit>
			</Container>
		},
		{
			name: 'slider',
			path: '/form/slider',
			element: Lazy(import('../modules/slider/demo'))
		}
	],
} as MenuObject