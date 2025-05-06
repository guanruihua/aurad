import React from 'react'
import type { RadioProps } from './type'
import { RadioCore } from './Radio'
import { isEffectArray } from 'asura-eye'
import { MultipleRadioCore } from './MultipleRadio'
export * from './type'
import './index.less'
import './night.less'

export function Radio(props: RadioProps) {
  if (isEffectArray(props.options)) {
    return <MultipleRadioCore {...props} />
  }
  return <RadioCore {...props} />
}
