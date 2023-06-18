import React from "react"
import type { SliderProps } from "."

export function useSlider(props: SliderProps) {
	const { min = 0, max = 100, step = 1, onChange } = props
	const [value, setValue] = React.useState<number>(min)
	const ref: React.RefObject<HTMLDivElement> = React.useRef(null)

	React.useEffect(() => {
		const dom = ref.current
		let originValue = min
		if (!dom || !dom.firstChild) return;
		const stepDom: HTMLDivElement = dom.firstChild as HTMLDivElement

		const contentSizeDom = dom.getBoundingClientRect()
		const contentWidth = contentSizeDom.width - 15
		const stepSizeDom = stepDom.getBoundingClientRect()
		const totalValue = contentSizeDom.width - 15
		const NewWindow: any = window

		const setLeft = (e: any) => {
			let newValue = e.clientX - contentSizeDom.left
			// - stepSizeDom.width / 2
			let resValue = newValue

			if (newValue - 7.5 <= 0) {
				newValue = 0
				resValue = 0
			}
			if (newValue > contentWidth) {
				newValue = contentWidth
				resValue = totalValue
			}

			const result = Math.ceil(resValue * 100 / totalValue)

			if (result !== originValue) {
				originValue = result
				setValue(result)
				onChange && onChange(result)
				dom.style.setProperty('--moved', `${newValue + 0.1}px`)
				dom.style.setProperty('--rail-right', `${newValue + 7}px`)
			}
		}

		const setBlur = () => {
			NewWindow.canMove = false
		}

		dom.addEventListener('mousedown', (e) => {
			setLeft(e)
			NewWindow.canMove = true
		})

		/**
		 * @description 禁止拖动
		 */
		document.addEventListener('mouseup', () => { setBlur() })
		document.onmouseup = () => { setBlur() }
		window.addEventListener('mouseup', () => { setBlur() })
		window.onmouseup = () => { setBlur() }
		stepDom.addEventListener('mouseup', () => { setBlur() })
		dom.addEventListener('mouseup', () => { setBlur() })


		// document.addEventListener('mousemove', (e) => {
		// 	if (NewWindow.canMove !== true) return;
		// 	setLeft(e)
		// })

	}, [ref.current])

	return {
		ref,
		value,
		setValue,
	}
}