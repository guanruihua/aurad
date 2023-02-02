import React from "react"
import { Grid } from '..'

export default function () {

	return <Grid
		border='1px solid #000'
		childClassName={'unit'}
		// rows={3}
		// rows={4}
		// rows={5}
		columns={4}
		merge={{
			0: { row: 2, column: 2, },
			// 1: { row: 2, column: 2, },
			// 1: { row: 2, column: 2, }, 
			// 2: { row: 2, column: 2, },
			9: { row: 3, column: 2 },
			// 10: { row: 3, column: 2 },
		}}
		// fill={false}
		childStyle={{ minHeight: 60 }}
	>
		{new Array(39).fill('').map((row, index) => {
			return <Grid.Item
				key={index}>
				{`(${index + 1})`}
			</Grid.Item>
		})}
	</Grid>
}