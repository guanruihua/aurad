/* eslint-disable*/
import React from "react";
import { FlowChart } from '..'
import { Container, Unit } from "unit-testing-react";


const nodes = [
	[
		{ id: '1', label: 'Node 1', link: '2' },
		{ id: '2', label: 'Node 2', link: '3' },
		{ id: '3', label: 'Node 373182478923748723948', link: '5' },
		{}
	],
	[
		{ style: { width: 80 } },
		{ id: '4', label: 'Node 4', link: '5' },
		{ id: '5', label: 'Node 5', link: '6' },
		{ id: '6', label: 'Node 6', link: '7' },
	]
];


export default () => {
	return <Container columns={1}>
		<Unit>
			<FlowChart nodes={nodes} />
		</Unit>
	</Container>
};