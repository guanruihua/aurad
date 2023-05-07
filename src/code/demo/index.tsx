import React from "react"
import { Code } from ".."
import { Container, Unit } from "unit-testing-react"

export default function () {
	return <Container>
		<Unit>
			<Code
				code={
					`import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
		name: 'code.',
		path: '/code',
		children: [
			{
				name: 'js',
				path: '/code/js',
				element: Lazy(import('../code/js')),
			},
		]
} as MenuObject
		`
				}
			/>
		</Unit>
	</Container>
}
