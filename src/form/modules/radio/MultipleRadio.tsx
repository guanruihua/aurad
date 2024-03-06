import React from 'react'
import { classNames } from 'harpe'
import type { RadioProps } from './type'
import { isEffectArray, isEmpty } from 'asura-eye'
import { equal } from 'abandonjs'

export function MultipleRadioCore(props: RadioProps) {
  const { value, defaultValue, className, onChange, options = [] } = props

  const [status, setStatus] = React.useState<any>(undefined)

  React.useEffect(() => {
    // 有值就按照值的显示
    if (!isEmpty(value)) {
      value !== status && setStatus(value)
      return
    }

    // 没有值, 有默认值
    if (!isEmpty(defaultValue)) {
      status !== defaultValue && setStatus(defaultValue)
      return
    }

    setStatus(undefined)
  }, [value, defaultValue])

  const handleClick = (item: any) => {
    if (item.disabled || equal(item.value, status)) {
      return
    }
    const newEvent: any = {
      target: {
        value: item.value,
      },
    }
    onChange ? onChange(newEvent) : setStatus(newEvent.target.value)
  }

  return (
    <span className={classNames('au-radio', className)}>
      {isEffectArray<any>(options) &&
        options.map((item: any, index: number) => {
          const select = equal(item.value, status)
          return (
            <span
              className={classNames('au-radio-item', {
                disabled: item.disabled,
              })}
              key={index}
              onClick={() => handleClick(item)}
            >
              <span
                className={classNames('au-radio-icon', {
                  'au-radio-select': select,
                })}
              />
              <label>{item.label || item.value || ''}</label>
            </span>
          )
        })}
    </span>
  )
}
