import React from "react"
import { Container, Unit } from "unit-testing-react"
import { Step } from '..'

export default function () {
	return <Container>
		<Unit>
			<Step>
				<Step.Item>a1</Step.Item>
				<Step.Item>a2</Step.Item>
				<Step.Item>a3</Step.Item>
				<Step.Item>a4</Step.Item>
				<Step.Item>a5</Step.Item>
			</Step>
		</Unit>
	</Container>
}
