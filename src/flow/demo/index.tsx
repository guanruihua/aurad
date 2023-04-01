import React from "react";
import { FlowChart } from '..'
import { Container, Unit } from "unit-testing-react"
import { nodes } from './data'

export default () => {
	return <Container columns={1}>
		<Unit title="Flow">
			<FlowChart nodes={nodes} rowGap={65} nodeWidth={200} />
			<div>1. 不支持线交叉</div>
			<div>2. 不支持跨节点连线</div>
			<div>3. 只允许箭头从左往(斜)右 </div>
		</Unit>
		<Unit title="Flow">
			<FlowChart nodes={nodes} rowGap={65} />
			<div>1. 不支持线交叉</div>
			<div>2. 不支持跨节点连线</div>
			<div>3. 只允许箭头从左往(斜)右 </div>
		</Unit>
	</Container>
};