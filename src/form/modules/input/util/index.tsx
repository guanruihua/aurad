import { isEmpty } from "asura-eye"
import type { InputProps } from "../type"

export const setDefault = (props: InputProps) => {

	const hasValue = !isEmpty(props.value)
	const hasChange = !isEmpty(props.onChange)

	if (hasValue && !hasChange) {
		props.onChange = () => { }
	}

	if (!hasValue && hasChange) {
		props.value = ''
	}

	return props
}