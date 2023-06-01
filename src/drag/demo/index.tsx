import React from "react"
// import { Drag } from "../index"
import { Pages } from "../Pages"
import { Layout } from '../Page';
import { Drag } from "..";

const defaultInitializer = (index: number) => index;

export function createRange<T = number>(
	length: number,
	initializer: (index: number) => any = defaultInitializer
): T[] {
	return [...new Array(length)].map((_, index) => initializer(index));
}

export default function () {
	return (<div
		style={{
			background: '#fff',
		}}>
		{/* <Pages */}
		<Drag
			render={(props: Record<string, any>) => {
				return (
					<div>
						{JSON.stringify(props.id)}
					</div>
				)
			}}
			dataList={createRange<string | number>(20, (index) => (
				{
					id: `${index + 1}`,
					record: {
						data: index,
					}
				}
			))}
			list={createRange<string | number>(20, (index) => `${index + 1}`)}
			layout={Layout.Grid} />;

	</div>)
}
