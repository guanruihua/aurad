/* eslint-disable*/
import React, { CSSProperties } from 'react'
import { Chart } from '..'
import { Container, Unit } from 'unit-testing-react';

function FlowChart() {
	const cmm = {
		// 文字颜色
		label: {
			fontSize: 18,
			color: 'red'
		},
		// 节点背景颜色
		itemStyle: {
			color: '#2f4554',
		},
		symbol: 'rect',
		symbolSize: [200, 200],
	}
	const option = {
		title: {
			text: '流程图示例',
			left: 'center',

		},
		tooltip: {},
		animationDurationUpdate: 1500,
		animationEasingUpdate: 'quinticInOut',
		series: [
			{
				type: 'graph',
				layout: 'none',
				// layout: 'force',
				symbolSize: 400,
				// symbolSize: [200, 100],
				roam: true,
				// symbol: 'rect',
				// symbolSize: [200, 100],
				label: {
					show: true
				},
				// edgeSymbol: ['none', 'arrow'],
				edgeSymbol: ['circle', 'arrow'],
				edgeSymbolSize: [5, 10],
				data: [
					{ name: 'Node 1', x: 100, y: 100, ...cmm },
					{ name: 'Node 2', x: 300, y: 100, ...cmm },
					{ name: 'Node 3', x: 500, y: 100, ...cmm },
					{ name: 'Node 4', x: 300, y: 230, ...cmm },
					{ name: 'Node 5', x: 500, y: 230, ...cmm }
				],
				links: [
					{
						source: 'Node 1', target: 'Node 2',
						lineStyle: {
							color: 'red',
							normal: {
								color: 'red',
								// color: '#ff7f50'
							}
						}
					},
					{
						source: 'Node 2', target: 'Node 3',
						itemStyle: {
							normal: {
								color: 'red'
							},
							// color: '#2f4554',
						} as CSSProperties,
					},
					{ source: 'Node 3', target: 'Node 5' },
					// { source: 'Node 1', target: 'Node 4' },
					{ source: 'Node 4', target: 'Node 5' }
				]
			}
		]
	};
	return (<Container columns={1}>
		<Unit>
			<Chart
				style={{ height: '800px' }}
				options={option} />
		</Unit>
	</Container>
	)
}

export default FlowChart;