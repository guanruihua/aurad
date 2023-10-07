import type { InputProps } from '../type'

export interface InputTextProps extends Omit<InputProps, 'value' | 'defaultValue'> {
	value?: string | number
	defaultValue?: string | number
}