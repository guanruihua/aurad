import React from "react"
import { Container, Unit } from "unit-testing-react"
import { InputObject } from '..'

export default function () {
	return <Container>
		<Unit title="InputObject">
			<InputObject
				dataIndexes={['a', 'b', 'c', 'd']}
			/>
		</Unit>
	</Container>
}