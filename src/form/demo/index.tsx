import React from "react"
import TestFormFunc from './FCTest'
import TestFormClass from './classTest'
import { Container, Unit } from "unit-testing-react"

export default function FormTestPage() {

	return <Container columns={3}>
		<Unit title="Class Component">
			<TestFormClass />
		</Unit>
		<Unit title="Function Component">
			<TestFormFunc />
		</Unit>
	</Container>
}
