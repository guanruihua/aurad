import React from 'react'
import { classNames } from 'harpe'
import { Icon } from '@/icon'
import type { CheckboxItemProps, CheckboxProps } from './type'
import { isEffectArray, isEmpty } from 'asura-eye'
import { equal } from 'abandonjs'

export function MultipleCheckboxCore(props: CheckboxProps) {
  const { value, defaultValue, className, onChange, options = [] } = props

  const [status, setStatus] = React.useState<any[]>([])

  React.useEffect(() => {
    // 有值就按照值的显示
    if (!isEmpty(value)) {
      if (isEffectArray(value)) {
        !equal(value, status) && setStatus(value)
        return
      }
      setStatus([])
      return
    }

    // 没有值, 有默认值
    if (!isEmpty(defaultValue)) {
      if (isEffectArray(defaultValue)) {
        !equal(status, defaultValue) && setStatus(defaultValue)
        return
      }
      setStatus([])
      return
    }

    setStatus([])
  }, [value, defaultValue])

  const handleClick = (item: CheckboxItemProps) => {
    if (item.disabled) {
      return
    }
    const newEvent: any = {
      target: {
        value: [],
      },
    }
    let hasItemValue = false
    for (let i = 0; i < status.length; i++) {
      if (equal(status[i], item.value)) {
        hasItemValue = true
        continue
      }
      newEvent.target.value.push(status[i])
    }
    if (!hasItemValue) {
      newEvent.target.value.push(item.value)
    }
    onChange ? onChange(newEvent) : setStatus(newEvent.target.value)
  }

  return (
    <span className={classNames('au-checkbox', className)}>
      {isEffectArray<any>(options) &&
        options.map((item: any, index: number) => {
          return (
            <span
              className={classNames('au-checkbox-item', {
                disabled: item.disabled,
              })}
              key={index}
              onClick={() => handleClick(item)}
            >
              <span
                className={classNames('au-checkbox-icon', {
                  'au-checkbox-select': status.includes(item.value),
                })}
              >
                {status && <Icon type="yes" size={12} fill="#fff" />}
              </span>
              <label>{item.label || item.value || ''}</label>
            </span>
          )
        })}
    </span>
  )
}
