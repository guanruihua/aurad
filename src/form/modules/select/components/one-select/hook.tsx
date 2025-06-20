import { SelectProps } from '../../type'
import React, { useState } from 'react'
import { classNames } from 'harpe'
import { isArray, isEmpty, isString } from 'asura-eye'
import { addElementValue, removeElementValue, xyInRang, getUUID } from '../util'
import { getRefValue, setRefValue } from './help'
import { useSetState } from '0hook'

export const useSelectState = (props: SelectProps) => {
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
  const allPropsKeys = Object.keys(props)

  const [uuid, setUUID] = React.useState('')

  React.useEffect(() => {
    !uuid && setUUID(getUUID())
  }, [])

  const ref = React.useRef<HTMLDivElement>(null)
  const [status, setStatus] = useSetState({
    setDefaultValue: false,
  })

  const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

  const setElementValue = (value?: string) => {
    removeElementValue(uuid)
    if (!ref.current) return
    if (isEmpty(value) || value === '') return

    ref.current.setAttribute('data-value', value)

    addElementValue(uuid, value)
  }

  const handleSelect = (value?: string) => {
    if (!ref.current) return
    const selectValue = ref.current.getAttribute('data-value')
    setElementValue(value)

    if (selectValue === value) {
      value = undefined
    }
    onChange &&
      onChange({
        target: {
          value,
        },
      })
    !allPropsKeys.includes('value') && setSelectValue(value)

    const optionBoxDom: any = document.querySelector(
      `.au-select-options.uuid-${uuid}`,
    )
    if (optionBoxDom) {
      optionBoxDom.style.display = 'none'
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

    // 隐藏下拉框
    if (optionDom) {
      optionDom.style.display = 'none'
      document.removeEventListener('click', watchClick)
    }
  }

  React.useEffect(() => {
    if (
      !allPropsKeys.includes('value') ||
      value === selectValue ||
      !isString(value)
    )
      return
    setElementValue(value)
    setSelectValue(value)
  }, [props.value])

  React.useEffect(() => {
    if (
      isEmpty(defaultValue) ||
      !isString(defaultValue) ||
      status.setDefaultValue ||
      // value 默认值非有效值
      (allPropsKeys.includes('value') && !(isEmpty(value) || value === ''))
    )
      return
    setElementValue(defaultValue)
    setSelectValue(defaultValue)
    setStatus({ setDefaultValue: true })
  }, [props.defaultValue])

  return {
    ref,
    className,
    disabled,
    uuid,
    placeholder,
    selectValue,
    options,
    name,
    handleSelect,
    watchClick,
  }
}
