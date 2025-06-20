import React from 'react'
import { classNames } from 'harpe'
import { SelectProps } from '../../type'
import { isString } from 'asura-eye'
import { Icon } from '@/icon'
import { renderOptions } from '../render-options'
import { useSelectState } from './hook'
import { addElementValues } from './help'

export function MultipleSelect(props: SelectProps) {
  const {
    ref,
    className,
    disabled,
    uuid,
    placeholder,
    selectValues,
    options,
    watchClick,
    handleSelect,
  } = useSelectState(props)

  const Options = (
    <>
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
    </>
  )

  return (
    <div
      ref={ref}
      tabIndex={999}
      className={classNames(
        className,
        'au-select-multi-input au-select-input',
        { disabled },
      )}
      onClick={async (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (disabled || !ref.current) return
        await renderOptions({ uuid, Options, parentDom: ref.current })
        document.removeEventListener('click', watchClick)
        document.addEventListener('click', watchClick)
        await addElementValues(uuid, selectValues)
      }}>
      {selectValues.length === 0 && (
        <span className='au-select-input-placeholder'>{placeholder}</span>
      )}

      {selectValues.map((value: string, index: number) => {
        if (isString(value))
          return (
            <span key={index} className='au-select-item'>
              <span>{options.find((_) => _.value === value)?.label}</span>
              <span
                className='icon-close'
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  handleSelect(value)
                }}>
                <Icon type='no' size={12} fill={'#8a8a94'} />
              </span>
            </span>
          )
      })}
    </div>
  )
}
