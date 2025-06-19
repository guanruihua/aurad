import React, { useState } from 'react'
import { classNames } from 'harpe'
import { SelectProps } from '../../type'
import { isArray } from 'asura-eye'
import { getSelectValue } from '../../util'
import { getUUID, renderOptions, updatePosition } from '../render-options'
import { xyInRang } from '../util'

export function OneSelect(props: SelectProps) {
  const {
    className,
    name,
    options = [],
    placeholder = '',
    defaultValue,
    value,
    disabled = false,
    onChange,
  } = props
  const [uuid, setUUID] = React.useState('')

  React.useEffect(() => {
    setUUID(getUUID())
  }, [])

  const ref = React.useRef<HTMLDivElement>(null)
  const [selectValue, setSelectValue] = useState<string | undefined>(
    isArray(defaultValue) ? defaultValue[0] : defaultValue,
  )

  React.useEffect(() => {
    if (value === selectValue) return
    setSelectValue(isArray(value) ? value[0] : value)
  }, [value])

  const handleSelect = (value: string) => {
    if (!ref.current) return

    const selectValue = ref.current.getAttribute('data-value')

    ref.current.setAttribute('data-value', value)

    const selectDom = document.querySelector(
      `.au-select-options.uuid-${uuid} .selected`,
    )
    if (selectDom) {
      selectDom.classList.remove('selected')
    }

    if (selectValue === value) {
      onChange &&
        onChange({
          target: {
            value: '',
          },
        })
      setSelectValue('')
      return
    }
    onChange &&
      onChange({
        target: {
          value,
        },
      })
    setSelectValue(value)

    const optionDom = document.querySelector(
      `.au-select-options.uuid-${uuid} .au-select-options-item[data-value=${value}]`,
    )
    if (optionDom) {
      optionDom.classList.add('selected')
    }
  }

  const Options = (
    <React.Fragment>
      {options?.map((item, index) => {
        const { value, label, className, onClick, ...rest } = item
        return (
          <div
            className={classNames('au-select-options-item', className)}
            key={index}
            title={label}
            data-value={value}
            onClick={(e) => {
              handleSelect(value)
              onClick?.(e)
            }}
            {...rest}>
            {label}
          </div>
        )
      })}
    </React.Fragment>
  )

  const hiddenOptions = () => {
    const optionDom: any = document.querySelector(
      '.au-select-options.uuid-' + uuid,
    )
    if (optionDom) {
      optionDom.style.display = 'none'
      document.removeEventListener('click', watchClick)
    }
  }
  const watchClick = (e: any) => {
    const x = e.clientX
    const y = e.clientY

    const selectDom = ref.current
    const optionDom: any = document.querySelector(
      '.au-select-options.uuid-' + uuid,
    )

    if (optionDom && xyInRang(x, y, optionDom.getBoundingClientRect())) return

    if (selectDom && xyInRang(x, y, selectDom.getBoundingClientRect())) return

    return hiddenOptions()
  }

  return (
    <div
      ref={ref}
      className={classNames(className, { disabled })}
      onClick={() => {
        if (disabled || !ref.current) return
        renderOptions({ uuid }, Options)
        updatePosition({ uuid }, ref.current)
        document.removeEventListener('click', watchClick)
        document.addEventListener('click', watchClick)
      }}>
      <div className='au-select-input'>
        <input
          key={selectValue}
          placeholder={placeholder}
          value={getSelectValue(options, selectValue)}
          readOnly
          unselectable='on'
        />
        {name && <input name={name} style={{ display: 'none' }} />}
      </div>
    </div>
  )
}
