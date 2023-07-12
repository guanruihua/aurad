import React from "react"
import { Background } from '..'
import { Container, Unit } from "unit-testing-react"

export default function () {
	return (
		<div>
			<Container columns={3}>
				{
					['s', 'm', 'l', 'xl'].map(size => {
						return (
							<Unit
								title={`Background('${size}')`}
								style={{
									overflow: 'hidden'
								}}
							>
								<Background
									size={size}
									style={{
										display: 'inline-block',
									}}
								>
									<h2 style={{
										color: '#fff',
										letterSpacing: -2,
									}}>React JS</h2>
								</Background>
							</Unit>
						)
					})
				}
			</Container>
			<br />
			<Container columns={1}>
				{
					['xl', 'xxl', 'xxxl'].map(size => {
						return (
							<Unit
								title={`Background('${size}')`}
								style={{
									overflow: 'hidden'
								}}
							>
								<Background
									size={size}
									style={{
										display: 'inline-block',
									}}
								>
									<h2 style={{
										color: '#fff',
										fontSize: 50,
										letterSpacing: -2,
									}}>React JS</h2>
								</Background>
							</Unit>
						)
					})
				}
			</Container>
		</div>
	)

}
