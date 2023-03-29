import React from "react"
import { Container, Unit } from "unit-testing-react"
import { InputNumber } from '..'

export default function () {
	return (<Container>
		<Unit title="InputNumber">
			<InputNumber min={0} max={99} step={13} />
		</Unit>
	</Container>)
}
