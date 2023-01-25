import React from "react"
import RowTest from './row'
import GridTest from "./grid"

export default function () {

	return <div>
		<h2>{`Grid>Item`}</h2>
		<GridTest />
		<h2>{`Row>Col`}</h2>
		<RowTest />
	</div>
}