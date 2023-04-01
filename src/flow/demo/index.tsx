import React from "react";
import { FlowChart } from '..'
import { Container, Unit } from "unit-testing-react"
import { nodes } from './data'

export default () => {
	return <Container columns={1}>
		<Unit title="Flow">
			<div>1. 不支持线交叉, 同一点两个线连接</div>
			<div>2. 不支持跨节点连线</div>
			<div>3. 只允许箭头从左往(斜)右 </div>
			<div>4. 只支持跨一行或一列连线 </div>
			<div>5. 由于是网格布局, 局限性较大</div>
			<FlowChart nodes={nodes} rowGap={65} nodeWidth={200} />
		</Unit>
		<Unit title="Flow">
			<FlowChart nodes={nodes} rowGap={65} />
		</Unit>
	</Container>
};