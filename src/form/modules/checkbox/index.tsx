import React from 'react'
import type { CheckboxProps } from './type'
import { isEffectArray } from 'asura-eye'
import { CheckboxCore } from './Checkbox'
import { MultipleCheckboxCore } from './MultipleCheckbox'
import './index.less'
import './night.less'

export * from './type'

export function Checkbox(props: CheckboxProps) {
	if(isEffectArray(props.options)){
		return <MultipleCheckboxCore {...props} /> 
	}
	return <CheckboxCore {...props} />

}
