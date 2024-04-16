import React from "react"
import TestFormFunc from './FCTest'
import { Container, Unit } from "unit-testing-react"

export default function FormTestPage() {

	return <Container columns={3}>
		<Unit title="Function Component">
			<TestFormFunc />
		</Unit>
	</Container>
}
