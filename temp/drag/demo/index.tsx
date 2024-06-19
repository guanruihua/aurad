import React from "react"
import { Drag } from ".."
import { ObjectType } from "abandonjs"

export function createRange<T = number>(
	length: number,
	initializer: (index: number) => any = (index: number) => index
): T[] {
	return [...new Array(length)].map((_, index) => initializer(index));
}

export default function () {

	const dataSource = createRange<{ id: string | number, record: ObjectType }>(20, (index) => (
		{
			id: `${index + 1}`,
			record: {
				data: index,
			}
		}
	))

	return (<div
		style={{
			background: '#fff',
		}}>
		<Drag
			dataSource={dataSource}
			render={(props: ObjectType) => {
				const { id = '' } = props
				return (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%',
							background: 'gray',
							color: '#fff'
						}}>
						{id as string}
					</div>
				)
			}}
			callback={(dataSource: ObjectType[]) => {
				console.log(
					dataSource,
					dataSource.map(item => item.id)
				)
			}}
		/>
	</div>)
}
