export function fillCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number = 3) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}


export function line(ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	nextX: number,
	nextY: number
) {
	ctx.setLineDash([])
	ctx.beginPath()
	ctx.moveTo(x, y)
	ctx.lineTo(nextX, nextY)
	ctx.stroke()
}



export function quadraticCurve(ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	nextX: number,
	nextY: number
) {
	ctx.setLineDash([])
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.quadraticCurveTo((x + nextX) / 2, (y + nextY) / 2, nextX, nextY)
	ctx.stroke();
}
