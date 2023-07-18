import { createContext } from 'react'
import type { CheckboxGroupContextProps, CheckboxItemProps } from './type'

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({
	name: '',
	groupValue: [],
	setGroupValue: (newValue: any) => {
		console.log('The setGroupValue method is not implemented.', newValue)
	},
	registerCheckbox: (props: CheckboxItemProps) => {
		console.log('The registerCheckbox method is not implemented.', props)
		return 
	}
})
