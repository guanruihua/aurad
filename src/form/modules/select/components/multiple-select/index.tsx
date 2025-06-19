import React, { useState } from 'react'
import { classNames } from 'harpe'
import { SelectProps } from '../../type'
import { isArray, isEmpty, isString } from 'asura-eye'
import { toString, unique } from 'abandonjs'
import { Icon } from '@/icon'
import { getUUID, renderOptions, updatePosition } from '../render-options'
import { xyInRang } from '../util'

export function MultipleSelect(props: SelectProps) {
  const {
    value,
    className,
    options = [],
    onChange,
    placeholder = '',
    defaultValue = [],
    disabled = false,
  } = props
  const [uuid, setUUID] = React.useState('')

  React.useEffect(() => {
    setUUID(getUUID())
  }, [])

  const ref = React.useRef<HTMLDivElement>(null)

  const [selectValues, setSelectValues] = useState<string[]>(
    isArray(defaultValue) ? unique(defaultValue) : [defaultValue],
  )
  // console.log(selectValues)
  // React.useEffect(() => {
  //   if (toString(selectValues) === toString(value)) return
  //   if (isEmpty(value)) {
  //     setSelectValues([])
  //     return
  //   }

  //   if (isArray(value)) {
  //     setSelectValues(unique(value))
  //     return
  //   }
  //   if (isString(value)) {
  //     setSelectValues([value])
  //   }
  // }, [value])
  const handleSelect = (value: string) => {
    if (!ref.current) return
    try {
      const selectValue: string[] = JSON.parse(
        ref.current.getAttribute('data-value') || '[]',
      )

      let newValue = []
      if (selectValue.includes(value)) {
        const optionDom = document.querySelector(
          `.au-select-options.uuid-${uuid} .au-select-options-item[data-value=${value}]`,
        )
        if (optionDom) {
          optionDom.classList.remove('selected')
        }
        newValue = selectValue.filter((v) => v !== value)
      } else {
        const optionDom = document.querySelector(
          `.au-select-options.uuid-${uuid} .au-select-options-item[data-value=${value}]`,
        )
        if (optionDom) {
          optionDom.classList.add('selected')
        }
        newValue = selectValue.concat(value)
      }
      ref.current.setAttribute('data-value', JSON.stringify(newValue))

      setSelectValues(newValue)
      const event = {
        target: {
          value: newValue,
        },
      }
      onChange?.(event)
    } catch (error) {}
  }
  const Options = (
    <React.Fragment>
      {options?.map((item, index) => {
        const { value, label, className, onClick, ...rest } = item
        return (
          <div
            key={index}
            tabIndex={index + 999}
            className={classNames('au-select-options-item', className)}
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
      tabIndex={999}
      className={classNames(
        className,
        'au-select-multi-input au-select-input',
        { disabled },
      )}
      onClick={() => {
        if (disabled || !ref.current) return
        renderOptions({ uuid }, Options)
        updatePosition({ uuid }, ref.current)
        document.removeEventListener('click', watchClick)
        document.addEventListener('click', watchClick)
      }}>
      {selectValues.length === 0 && (
        <div style={{ color: 'rgb(117,117,117)' }}>{placeholder}</div>
      )}

      {selectValues.map((value: string, index: number) => {
        if (isString(value))
          return (
            <span className='au-select-item' key={index.toString()}>
              <span>{options.find((_) => _.value === value)?.label}</span>
              <span
                className='icon-close'
                style={{ cursor: 'pointer', paddingRight: 5 }}
                onClick={() => {
                  const newSelectValues: string[] = selectValues.filter(
                    (v) => v !== value,
                  )
                  setSelectValues(newSelectValues)
                  const event = {
                    target: {
                      value: newSelectValues,
                    },
                  }
                  onChange && onChange(event)
                }}>
                <Icon type='no' size={9} fill={'#8a8a94'} />
              </span>
            </span>
          )
      })}
    </div>
  )
}
