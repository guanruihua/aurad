import React from 'react'
import type { InputProps } from './type'

import { InputText } from './text'
import { InputTag } from './tag'
import { InputNumber, InputNumberProps } from './number'
import { InputPassword, InputPasswordProps } from './pwd'
export * from './number'
export * from './textarea'
export * from './type'
import './night.less'
import { TextArea, TextAreaProps } from './textarea'

export function Input(props: InputProps<any>) {
  const { type = 'text', ...rest } = props

  switch (type) {
    case 'textarea':
      return <TextArea {...(rest as TextAreaProps)} />
    case 'password':
    case 'pwd':
      return <InputPassword {...(rest as InputPasswordProps)} />
    case 'number':
      return <InputNumber {...(rest as InputNumberProps)} />
    case 'tags':
      return <InputTag {...rest} />
    default:
      return <InputText type={type} {...rest} />
  }
}
