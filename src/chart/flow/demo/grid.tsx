import React from "react";
import { FlowChart } from '..'
import { Container, Unit } from "unit-testing-react"
import { nodes } from './data'


export default () => {
	return <Container columns={1}>
		<Unit title="Flow">
			<FlowChart nodes={nodes} count={5} name="314" />
		</Unit>
		<Unit title="Flow">
			<FlowChart nodes={nodes} count={5} name="a315" nodeWidth={'equal'} />
		</Unit>
	</Container>
};