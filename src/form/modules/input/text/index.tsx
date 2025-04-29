import React from 'react'
import { classNames } from 'harpe'
import { setDefault } from '../util'
import type { InputProps } from '../type'
import './index.less'

export interface InputTextProps
  extends Omit<InputProps<string>, 'value' | 'defaultValue'> {
  value?: string | number
  defaultValue?: string | number
}

export function InputText(props: InputTextProps) {
	const { mode = 'text', className,  ...rest } = props
  const getNewProps = () => {

    const newProps: InputTextProps = {
      type: 'text',
      inputMode: 'text',
      ...rest,
    }

    setDefault(newProps)

    return newProps
  }

  return (
    <div className={classNames('au-input au-input-text', className)}>
      <input {...getNewProps()} />
    </div>
  )
}
