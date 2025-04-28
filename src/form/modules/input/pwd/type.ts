import type { InputProps } from '../type'

export interface InputPasswordProps extends Omit<InputProps, 'value' | 'defaultValue'> {
	value?: string | number
	defaultValue?: string | number
}