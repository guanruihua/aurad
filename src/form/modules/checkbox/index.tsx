import React from 'react'
import type { CheckboxProps } from './type'
import './index.less'
import { isEffectArray } from 'asura-eye'
import { CheckboxCore } from './Checkbox'
import { MultipleCheckboxCore } from './MultipleCheckbox'

export * from './type'

export function Checkbox(props: CheckboxProps) {
	if(isEffectArray(props.options)){
		return <MultipleCheckboxCore {...props} /> 
	}
	return <CheckboxCore {...props} />

}
