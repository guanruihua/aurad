import React from "react";
import { Container, Unit } from "unit-testing-react"
import { Circular } from '..'

export default () => {
	return <Container columns={1}>
		<Unit title="Circular">
			<Circular />
		</Unit>
	</Container>
};