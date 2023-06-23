import React from "react"
import { Skeleton } from '..'
import { Container, Unit } from "unit-testing-react"

export default function () {

	return <Container columns={2}>
		<Unit title="Skeleton(default)">
			<Skeleton />
		</Unit>
		<Unit title="Skeleton(active=false)">
			<Skeleton active={false} />
		</Unit>
		<Unit title="Skeleton(type='large')">
			<Skeleton size="large" />
		</Unit>
		<Unit title="Skeleton(type='small')">
			<Skeleton size="small" />
		</Unit>
		<Unit title="Skeleton(type='square')">
			<Skeleton >
				<Skeleton.Item type="square" />
			</Skeleton>
		</Unit>
		<Unit title="Skeleton(type='round')">
			<Skeleton >
				<Skeleton.Item type="round" />
			</Skeleton>
		</Unit>
		<Unit title="Skeleton(type='circle')">
			<Skeleton >
				<Skeleton.Item type="circle" />
			</Skeleton>
		</Unit>
		<Unit title="Skeleton(type='round-circle')">
			<Skeleton >
				<Skeleton.Item type="round-circle" />
			</Skeleton>
		</Unit>
		<Unit title="Skeleton(Custom Layout)">
			<Skeleton >
				<Skeleton.Item type="square" />
				<Skeleton.Item type="round" />
				<div>
					<Skeleton.Item type="circle" style={{ marginRight: 8 }} />
					<Skeleton.Item type="round-circle" />
				</div>
			</Skeleton>
		</Unit>
	</Container>
}