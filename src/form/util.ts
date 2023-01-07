export function getFormValues(e: any): Record<string, any> {
	const elements = e.target.elements
	const record: Record<string, any> = {}

	for (let item of elements) {
		const { name, value } = item
		if (name) {
			if (Array.isArray(record[name])) {
				record[name].push(value)
				continue;
			}
			if (record[name]) {
				record[name] = [record[name], value]
				continue;
			}
			record[name] = value
		}
	}
	return record
}