import React from "react";
import { FlowChart } from '..'
import { Container, Unit } from "unit-testing-react"
import { nodes } from './data'

export default () => {
	return <Container columns={1}>
		<Unit>
			<FlowChart nodes={nodes} rowGap={35}/>
		</Unit>
	</Container>
};