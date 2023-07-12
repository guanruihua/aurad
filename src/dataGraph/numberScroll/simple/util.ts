export const getMapHoc = (itemHeight: number, itemWidth: number) => {

	const map: [number, number][] = [
		[-itemHeight * 2, 0],
		[-itemHeight, 0],
		[0, 0],
		[itemHeight, 0],
		[itemHeight * 2, 0],

		[itemHeight * 2, itemWidth],
		[itemHeight, itemWidth],
		[0, itemWidth],
		[-itemHeight, itemWidth],
		[-itemHeight * 2, itemWidth],
	]

	return (index: number): [number, number] => {
		if (index < 0) return map[index + 10]
		if (index >= map.length) return map[index % 10]
		return map[index]
	}
}


export const getEffectNumber = (value: number) => {
	if (value > 0) return value < 10 ? value : value % 10
	return 0
}