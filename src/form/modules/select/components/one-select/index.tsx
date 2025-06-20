import React from 'react'
import { classNames } from 'harpe'
import { SelectProps } from '../../type'
import { getSelectValue } from '../util'
import { renderOptions } from '../render-options'
import { Div } from '@/element'
import { useSelectState } from './hook'

export function OneSelect(props: SelectProps) {
  const {
    ref,
    className,
    disabled,
    uuid,
    placeholder,
    selectValue,
    options,
    name,
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
            className={classNames(
              'au-select-options-item',
              { selected: value === selectValue },
              className,
            )}
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
    </>
  )

  return (
    <div
      ref={ref}
      className={classNames(className, { disabled })}
      onClick={() => {
        if (disabled || !ref.current) return
        renderOptions({ uuid, Options, parentDom: ref.current })
        document.removeEventListener('click', watchClick)
        document.addEventListener('click', watchClick)
      }}>
      <div className='au-select-input'>
        <Div hidden={!!selectValue} className='au-select-input-placeholder'>
          {placeholder}
        </Div>
        <Div hidden={!selectValue} className='au-select-input-value'>
          {getSelectValue(options, selectValue)}
        </Div>
        {/* <input
          key={selectValue}
          placeholder={placeholder}
          value={selectValue}
          readOnly
          unselectable='on'
        /> */}
        {name && <input name={name} style={{ display: 'none' }} />}
      </div>
    </div>
  )
}
