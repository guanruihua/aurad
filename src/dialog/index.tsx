import React, { useState } from "react"

interface DialogProps {
	[key: string]: any
}

export function Dialog(props: DialogProps) {
	const { } = props
	const [open, setOpen] = useState<boolean>(false)
	return <div>
		<button onClick={() => { setOpen(true) }}>open</button>
		<dialog open={open}>
			<button onClick={() => { setOpen(false) }}>close</button>
			<ul>
				<li>
					<h4>WHERE IN THE WORLD</h4>
					<p>Mount Greylock, Massachusetts, North America</p>
				</li>
				<li>
					<h4>TYPE</h4>
					<p>School of witchcraft and wizardry</p>
				</li>
				<li>
					<h4>RESIDENTS OR OWNERS</h4>
					<p>Founded by Isolt Sayre, James Steward, Chadwick Boot and Webster Boot
					</p>
				</li>
				<li>
					<h4>MAGICAL PROPERTIES</h4>
					<p>Enchanted carvings of the four house beasts that react in the presence of new students</p>
				</li>
			</ul>
		</dialog>
	</div>
}