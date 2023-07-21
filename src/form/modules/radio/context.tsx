import { createContext } from 'react'
import type { RadioGroupContextProps, RadioProps } from './type'

export const RadioGroupContext = createContext<RadioGroupContextProps>({
	name: '',
	groupValue: [],
	setGroupValue: (newValue: any) => {
		console.log('The setGroupValue method is not implemented.', newValue)
	},
	registerRadio: (props: RadioProps) => {
		console.log('The registerRadio method is not implemented.', props)
		return 
	}
})
