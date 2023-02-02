import React from "react"
import { Row, Col } from '..'

export default function () {

	const rowCount = 3
	const colCount = 12

	return <div>
		{new Array(rowCount).fill(new Array(colCount).fill('')).map((row, index) => {
			return <Row
				style={{
					margin: 2,
					height: 70
				}}
				gap={2}
				key={String(index)}>
				{row.map((col: any, cIndex: number) => {
					return <Col
						style={{
							padding: '5px 6px',
							background: '#eee'
						}}
						key={String(cIndex)}>
						{`(${index},${cIndex})`}
					</Col>
				})}
			</Row>
		})}
	</div>
}