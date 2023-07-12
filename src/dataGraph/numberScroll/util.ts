export function getEffectNumber(value: number, length = 4) {
	if (value > 0) {
		const max = Number(Array.from({ length }, () => 9).join(''))
		if (value > max) return max
		return value
	}
	return 0
}