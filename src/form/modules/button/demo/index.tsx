import React from "react"
import { Button } from '..'
import { Container, Unit } from "unit-testing-react"
import { Space } from "@/layout"

export default function ButtonPage() {

	return <Container >
		<Unit title="Button">
			<Space direction="vertical">
				<Space>
					<Button type='primary' onClick={() => { console.log('primary'); }}>Primary</Button>
					<Button type='primary' disabled onClick={() => { console.log('primary disabled') }}>Primary(disabled)</Button>
				</Space>
				<Space>
					<Button type='text' onClick={() => { console.log('text') }}>Text</Button>
					<Button type='text' disabled onClick={() => { console.log('text disabled') }}>Text(disabled)</Button>
				</Space>
				<Space>
					<Button type='default' onClick={() => { console.log('default') }}>Default</Button>
					<Button type='default' disabled onClick={() => { console.log('default disabled') }}>Default(disabled)</Button>
				</Space>
				{/* <Space>
					<Button type='default' onClick={() => { console.log('default') }}>btn</Button>
					<Button type='default' disabled onClick={() => { console.log('default disabled') }}>Default(disabled)</Button>
				</Space> */}
			</Space>
		</Unit>
	</Container>
}
