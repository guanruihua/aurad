export function getShowPageNumRange(current: number, showPageNum: number, total: number) {
	if (total <= 9) return new Array(total).fill(null).map((u, i) => i + 1)
	const before = Math.ceil(showPageNum / 2)
	const after = showPageNum - before
	let start = current > before ? current - before : 0
	if (current + after > total) {
		start = total - showPageNum
	}
	const result = new Array(showPageNum).fill(null).map((u, i) => start + i + 1)
	if (result[0] !== 1) {
		result.unshift(-1)
		result.unshift(1)
	}
	const resultLastItem = result[result.length - 1]
	if (resultLastItem !== total) {
		if (resultLastItem !== total - 1) {
			result.push(-2)
		}
		result.push(total)
	}
	
	return result
}