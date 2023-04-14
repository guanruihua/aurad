import { createContext } from 'react'
import type { CheckboxGroupContextProps, CheckboxProps } from './type'

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps<any>>({
	name: '',
	groupValue: [],
	setGroupValue: (newValue: any) => {
		console.log('The setGroupValue method is not implemented.', newValue)
	},
	registerCheckbox: (props: CheckboxProps<any>) => {
		console.log('The registerCheckbox method is not implemented.', props)
		return 
	}
})
