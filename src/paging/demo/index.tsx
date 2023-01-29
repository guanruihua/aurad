import React from "react"
import { Paging } from '..'

export default function () {
	return <div>
		<Paging
			defaultCurrent={3}
			pageSizeOptions={[10, 20, 100]}
		/>
	</div>
}
