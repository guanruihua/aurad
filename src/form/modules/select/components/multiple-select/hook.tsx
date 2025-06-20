import React, { useState } from 'react'
import { classNames } from 'harpe'
import { SelectProps } from '../../type'
import { isArray, isEmpty, isString } from 'asura-eye'
import { unique } from 'abandonjs'
import { addElementValue, removeElementValue, xyInRang, getUUID, removeAllElementValue } from '../util'
import { useSetState } from '0hook'
import { getRefValue, setRefValue, addElementValues } from './help'

export const useSelectState = (props: SelectProps) => {
  const {
    value,
    className,
    options = [],
    onChange,
    placeholder = '',
    defaultValue = [],
    disabled = false,
  } = props

  const allPropsKeys = Object.keys(props)

  const [uuid, setUUID] = React.useState('')

  React.useEffect(() => {
    setUUID(getUUID())
  }, [])

  const ref = React.useRef<HTMLDivElement>(null)
  const [status, setStatus] = useSetState({
    setDefaultValue: false,
  })
  const [selectValues, setSelectValues] = useState<string[]>([])

  const handleSelect = (value: string) => {
    const selectValue: string[] = getRefValue(ref)
    let newValue: string[] = []
    
    if (selectValue.includes(value)) {
      removeElementValue(uuid, value)
      newValue = selectValue.filter((v) => v !== value)
    } else {
      addElementValue(uuid, value)
      newValue = selectValue.concat(value)
    }

    setRefValue(ref, newValue)
    setSelectValues(newValue)

    onChange?.({
      target: {
        value: newValue,
      },
    })
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
      !isArray(value)
    )
      return

    setRefValue(ref, value || [])
    setSelectValues(value || [])
    removeAllElementValue(uuid)
    addElementValues(uuid, value || [])
  }, [props.value])

  React.useEffect(() => {
    if (
      status.setDefaultValue ||
      isEmpty(defaultValue) ||
      !isArray(defaultValue) ||
      // value 默认值非有效值
      (allPropsKeys.includes('value') && !isEmpty(value))
    )
      return
    
    setRefValue(ref, defaultValue || [])
    setSelectValues(defaultValue || [])
    removeAllElementValue(uuid)
    addElementValues(uuid, defaultValue || [])
    setStatus({ setDefaultValue: true })
  }, [defaultValue])

  return {
    ref,
    className,
    disabled,
    uuid,
    watchClick,
    placeholder,
    selectValues,
    options,
    handleSelect,
  }
}
