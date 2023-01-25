import React from "react"
import { Grid } from '..'

export default function () {

	return <Grid>
		{new Array(36).fill('').map((row, index) => {
			return <Grid.Item
				style={{
					padding: '5px 6px',
					background: '#eee'
				}}
				key={index}>
				{`(${index})`}
			</Grid.Item>
		})}
	</Grid>
}