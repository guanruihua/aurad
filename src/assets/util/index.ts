export function classNames(...rest: (undefined | string | [string, boolean])[]): string {
	return rest.map(item => {
		if (!item) { return }
		if (typeof item === 'string') {
			return item
		}
		if (Array.isArray(item) && item.length === 2) {
			if (item[1]) {
				return item[0]
			}
		}
		return
	}).filter(Boolean).join(' ')

}