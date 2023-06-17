import React from "react"
import { Background } from '..'
import { Container, Unit } from "unit-testing-react"

export default function () {
	return <Container columns={1}>
		<Unit title="background">
			<Background>
				<h2 style={{
					fontSize: 60,
					color: '#fff',
					letterSpacing: -2,
				}}>React JS</h2>
			</Background>
		</Unit>
	</Container>
}
