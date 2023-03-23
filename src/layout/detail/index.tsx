import React from "react"

export interface DetailProps {
	[key: string]: any
}

export function Detail(props: DetailProps) {
	const { } = props
	return <div>
		<section>
			<details open>
				<summary>Beauxbatons Academy of Magic</summary>
				<p>
					If you like your magic served with a dash of savoir faire, this school is for you. Beauxbatons welcomes a multitude of students of different nationalities, mainly French, but also Spanish, Portuguese, Dutch, Luxembourgian and Belgian.
				</p>
			</details>

			<details>
				<summary>Durmstrang Institute</summary>
				<p>You’ll certainly hear a few interesting stories at Durmstrang, seeing as this is the school that Dark wizard Gellert Grindelwald was expelled from. </p>
			</details>

			<details>
				<summary>Ilvermorny School of Witchcraft and Wizardry
				</summary>
				<p>If you fancy living a Hogwarts-style life across the pond. The founder of Ilvermorny, Isolt Sayre, always wished she could go to Hogwarts, and the school definitely seems to embody some of its traditions. </p>
			</details>

			<details>
				<summary>Hogwarts School of Witchcraft and Wizardry
				</summary>
				<p>Because you love it. But also because of its detailed history, secret passages, eccentric professors, wisecracking ghosts, lovely house-elves, talking portraits and much, much more besides. Most importantly, Hogwarts seems to have a sense of humour
					about itself, and round every corner is a new delight. </p>
			</details>
		</section>
	</div>
}
