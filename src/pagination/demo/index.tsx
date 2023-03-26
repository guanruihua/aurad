import React from "react"
import { Paging } from '..'
import { Unit } from "unit-testing-react"

export default function () {
	return <Unit style={{ background: '#fff', padding: '20px 10px' }}>
		<Paging
			total={151}
			pageSize={10}
			defaultCurrent={1}
			pageSizeOptions={[10, 20, 100]}
		/>
		<Paging
			total={151}
			pageSize={10}
			defaultCurrent={3}
			pageSizeOptions={[10, 20, 100]}
		/>
		<Paging
			total={151}
			pageSize={10}
			defaultCurrent={6}
			pageSizeOptions={[10, 20, 100]}
		/>
		<Paging
			total={151}
			pageSize={10}
			defaultCurrent={9}
			pageSizeOptions={[10, 20, 100]}
		/>
		<Paging
			total={151}
			pageSize={10}
			defaultCurrent={13}
			pageSizeOptions={[10, 20, 100]}
		/>
		<Paging
			total={151}
			pageSize={10}
			defaultCurrent={16}
			pageSizeOptions={[10, 20, 100]}
		/>
	</Unit>
}
