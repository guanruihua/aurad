import { isArray } from 'asura-eye'
import { addElementValue, removeElementValue } from '../util'

export const getRefValue = (ref: any): string[] => {
  if (!ref.current) return []
  try {
    const val: string[] = JSON.parse(
      ref.current.getAttribute('data-value') || '[]',
    )
    if (!isArray(val)) return []
    return val
  } catch (error) {
    return []
  }
}

export const setRefValue = (ref: any, value: string[] = []) => {
  if (!ref.current || !isArray(value)) return
  try {
    const valueStr = JSON.stringify(value)
    console.log(valueStr)
    ref.current.setAttribute('data-value', valueStr)
    return
  } catch (error) {
    return
  }
}

/**
 * @description 移除多个选中 状态
 */
export const removeElementValues = (uuid: string, val?: string[]) => {
  val?.forEach((value) => {
    removeElementValue(uuid, value)
  })
}

/**
 * @description 添加多个下拉框项 值状态
 * @param {string} uuid
 * @param {string[]} val
 */
export const addElementValues = async (uuid: string, val?: string[]) => {
  val?.forEach((value) => {
    addElementValue(uuid, value)
  })
}