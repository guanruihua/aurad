import type { InputProps } from '../type'

export type InputNumberEvent = {
	target: {
		value: number
	}
}

export interface InputNumberProps extends Omit<InputProps<number>, 'onChange' | 'value'> {
	value?: number
	onChange?(event?: InputNumberEvent): void
	[key: string]: any
}
