import { Button } from "@/form"
import React from "react"
import { Container, Unit } from "unit-testing-react"
import { PopConfirm } from '..'

const content = (
	<div>
		提示内容 提示内容 提示内容 提示内容
	</div>
)

export default function () {
	const cmmProps = {
		content
	}

	return (<Container>
		<Unit
			title="PopConfirm"
		>
			<div style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(5, 1fr)',
				gap: 10
			}}>
				<div />
				<PopConfirm
					{...cmmProps}
					placement="topLeft">
					<Button>TopLeft</Button>
				</PopConfirm>
				<PopConfirm
					{...cmmProps}
					placement="top">
					<Button>Top</Button>
				</PopConfirm>
				<PopConfirm
					{...cmmProps}
					placement="topRight">
					<Button>topRight</Button>
				</PopConfirm>
				<div />

				<Button></Button>
				<div />
				<div />
				<div />
				<Button></Button>

				<Button></Button>
				<div />
				<Button>Center</Button>
				<div />
				<Button></Button>

				<Button></Button>
				<div />
				<div />
				<div />
				<Button></Button>

				<div />
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<div />

			</div>
		</Unit>
	</Container>)
}
