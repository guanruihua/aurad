import React from "react"
// import { Drag } from "../index"
import { Pages } from "../Pages"
import { Layout } from '../Page';

export default function () {
	return (<div
		style={{
			background: '#fff',
		}}>
		<Pages layout={Layout.Grid} />;
		
	</div>)
}
