import { FunctionType, isEffectArray, isEffectNumber, isNull } from "asura-eye"
import { fillCircle, line, quadraticCurve } from "../core";

export function write(canvas: HTMLCanvasElement, fx: (x: number) => number) {
	const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d")
	const space = 20
	if (isNull(ctx)) return;
	// 设置间隔
	let x = 0
	let xCount = 0
	let y = 0
	let yCount = 0
	// 设置虚线
	// ctx.setLineDash([space / 10, space / 5])
	ctx.lineWidth = 1
	ctx.setLineDash([space / 5])
	ctx.strokeStyle = '#eee'
	// ctx.strokeStyle = '#888'

	//绘制水平(x)方向的网格线
	for (y = space; y < canvas.height; y += space) {
		//开启路k径
		ctx.beginPath()
		ctx.moveTo(0, y)
		ctx.lineTo(canvas.width, y)
		ctx.stroke()
		xCount++
	}
	//绘制垂直(y)方向的网格线 
	for (x = space; x < canvas.width; x += space) {
		//开启路径
		ctx.beginPath()
		ctx.moveTo(x, 0)
		ctx.lineTo(x, canvas.height)
		ctx.stroke()
		yCount++
	}

	// y 轴刻度
	new Array(yCount).fill(null).forEach((item: null, index: number) => {
		const y = index * space
		let txt: string = ''
		if (index !== 14) {
			txt = (-(index - 14)).toString()
		} else return

		ctx.fillText(txt, space * Math.floor(yCount / 2) - 3, y)

		if (y === 0) return;
		// 坐标标线
		ctx.strokeStyle = '#000'
		ctx.setLineDash([])
		ctx.beginPath()
		ctx.moveTo(space * Math.floor(yCount / 2) + space, y)
		ctx.lineTo(space * Math.floor(yCount / 2) + space + 5, y)
		ctx.stroke()
	})

	// x 轴刻度
	new Array(xCount).fill(null).forEach((item: null, index: number) => {
		const x = index * space + space
		const txt = (index - 14).toString()
		if (txt === '0') {
			ctx.fillText(txt, x + 3, space * Math.floor(yCount / 2) + 10)
			return;
		}
		ctx.fillText(txt, x - 3, space * Math.floor(yCount / 2) + 10)

		// 坐标标线
		ctx.strokeStyle = '#000'
		ctx.setLineDash([])
		ctx.beginPath()
		ctx.moveTo(x, space * Math.floor(yCount / 2))
		ctx.lineTo(x, space * Math.floor(yCount / 2) - 5)
		ctx.stroke()
	})


	// x 坐标轴
	ctx.strokeStyle = '#000'
	ctx.setLineDash([])
	ctx.beginPath()
	ctx.moveTo(0, space * Math.floor(yCount / 2))
	ctx.lineTo(space * xCount + space, space * Math.floor(yCount / 2))
	ctx.stroke()

	// y 坐标轴
	ctx.setLineDash([])
	ctx.beginPath()
	ctx.moveTo(space * Math.floor(xCount / 2) + space, 0)
	ctx.lineTo(space * Math.floor(xCount / 2) + space, space * Math.floor(yCount))
	ctx.stroke()

	const dotList: [number, number][] = []

	const dot = (x: number, y: number) => {
		const _x = (x + 15) * space
		const _y = (14 - y) * space
		dotList.push([_x, _y])
		fillCircle(ctx, _x, _y, 3)
	};


	const result: [number, number][] = []

	for (let x = -16; x < 18; x++) {
		result.push([x, fx(x)])
	}


	result.forEach((item: [number, number]) => {
		dot(...item)
	})

	let tmp: [number, number] = [0, 0]
	dotList.forEach((item: [number, number], index: number) => {
		if (index === 0) {
			tmp = item
			return
		}
		if (item && tmp) line(ctx, ...item, ...tmp)
	})


	// 曲线
	const fx2 = (x: number) => 3 / x

	let tmpXY: [number, number] | null = null

	const dot2 = (x: number, y: number, dot = false) => {
		const _x = (x + 15) * space
		const _y = (14 - y) * space
		if (dot === false) {
			tmpXY && quadraticCurve(ctx, ...tmpXY, _x, _y)
			tmpXY = [_x, _y]
		}
		dot && fillCircle(ctx, _x, _y, 2)
	}

	for (let x = -16; x < 0; x += 0.1) {
		const y = fx2(x)
		dot2(x, y)
	}
	tmpXY = null
	for (let x = -16; x < 0; x++) {
		const y = fx2(x)
		dot2(x, y, x % 1 === 0)
	}
	tmpXY = null
	for (let x = 0; x < 18; x += 0.1) {
		const y = fx2(x)
		dot2(x, y)
	}
	tmpXY = null
	for (let x = 0; x < 18; x++) {
		const y = fx2(x)
		dot2(x, y, x % 1 === 0)
	}
	tmpXY = null
}