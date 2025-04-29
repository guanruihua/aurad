import React from 'react'
import { classNames } from 'harpe'
import { setDefault } from '../util'
import type { InputProps } from '../type'
// import './index.less'

export interface InputPasswordProps
  extends Omit<InputProps<string>, 'value' | 'defaultValue'> {
  value?: string
  defaultValue?: string
}

export function InputPassword(props: InputPasswordProps) {
  const getNewProps = () => {
    const { mode = 'text', className, ...rest } = props
    const newProps: React.HTMLAttributes<HTMLInputElement> = {
      inputMode: 'text',
      className: classNames('au-input', className),
      ...rest,
    }

    setDefault(newProps)

    return newProps
  }

  return <input {...getNewProps()} />
}
