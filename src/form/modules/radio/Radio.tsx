import React from 'react'
import { classNames } from 'harpe'
import type { RadioProps } from './type'
import { isEmpty } from 'asura-eye'

export function RadioCore(props: RadioProps) {
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
      className={classNames('au-radio', className)}
      style={props.style || {}}
    >
      <span className="au-radio-item" onClick={handleClick}>
        <span
          className={classNames('au-radio-icon', {
            'au-radio-select': status,
          })}
        />
        <label>{children || label || ''}</label>
      </span>
    </span>
  )
}
