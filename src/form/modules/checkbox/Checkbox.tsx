import React from 'react'
import { classNames } from 'harpe'
import { Icon } from '@/icon'
import type { CheckboxProps } from './type'
import { isEmpty } from 'asura-eye'

export function CheckboxCore(props: CheckboxProps) {
  const { value, defaultValue, children, className, label, onChange } = props

  const [status, setStatus] = React.useState<boolean>(false)

  React.useEffect(() => {
    // 有值就按照值的显示
    if (!isEmpty(value)) {
      value !== status && setStatus(value)
      return
    }

    // 没有值, 有默认值
    if (!isEmpty(defaultValue)) {
      status !== defaultValue && setStatus(!!defaultValue)
      return
    }

    setStatus(false)
  }, [value, defaultValue])

  const handleClick = () => {
    const newEvent = {
      target: {
        value: !status,
      },
    }
    onChange ? onChange(newEvent) : setStatus(newEvent.target.value)
  }

  return (
    <span
      className={classNames('au-checkbox', className)}
      style={props.style || {}}
    >
      <span className="au-checkbox-item" onClick={handleClick}>
        <div
          className={classNames('au-checkbox-icon', {
            'au-checkbox-select': status,
          })}
        >
          {status && <Icon type="yes" size={12} fill="#fff" />}
        </div>
        <label>{children || label || ''}</label>
      </span>
    </span>
  )
}
