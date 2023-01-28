import React from "react"
import { Grid } from '..'

export default function () {

	return <Grid
		border={'1px solid #000'}
		childClassName={'unit'}
		// rows={3}
		// rows={4}
		columns={4}
		rows={5}
		// fill={false}
		childStyle={{ height: 60 }}
	>
		{new Array(39).fill('').map((row, index) => {
			return <Grid.Item
				key={index}>
				{`(${index})`}
			</Grid.Item>
		})}
	</Grid>
}