export const getSelectValue = (list: { value: string, label: string }[], value?: string) => {
	if (value === undefined) return undefined
	for (let i = 0; i < list.length; i++) {
		if (list[i].value === value) return list[i].label
	}
}