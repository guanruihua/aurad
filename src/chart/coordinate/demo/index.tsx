import React from "react"
import { Container, Unit } from "unit-testing-react"
import { XYCoordinate } from "../xy"

export default function () {
	return (
		<Container columns={1}>
			<Unit title="XYCoordinate">
				<XYCoordinate />
			</Unit>
		</Container>
	)
}
