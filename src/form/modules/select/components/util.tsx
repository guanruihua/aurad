import { isArray } from 'asura-eye'

export const xyInRang = (x: number, y: number, rect: DOMRect): boolean => {
  if (rect.left <= x && x <= rect.right && rect.top <= y && y <= rect.bottom) {
    return true
  }
  return false
}

export const getUUID = (): string => {
  const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    },
  )

  if (isArray((window as any).AU_UUIDS)) {
    if ((window as any).AU_UUIDS.includes(id)) {
      return getUUID()
    }
    ;(window as any).AU_UUIDS.push(id)
  } else {
    ;(window as any).AU_UUIDS = [id]
  }
  return id
}

export const getSelectValue = (
  list: { value: string; label: string }[],
  value?: string,
) => {
  if (value === undefined) return undefined
  for (let i = 0; i < list.length; i++) {
    if (list[i].value === value) return list[i].label
  }
}

/**
 * @description 移除选中 状态
 */
export const removeAllElementValue = (uuid: string) => {
  document
    .querySelectorAll(`.au-select-options.uuid-${uuid} .au-select-options-item`)
    ?.forEach((item) => item?.classList.remove('selected'))
}
/**
 * @description 移除选中 状态
 */
export const removeElementValue = (uuid: string, val?: string) => {
  document
    .querySelector(
      val
        ? `.au-select-options.uuid-${uuid} .au-select-options-item[data-value=${val}]`
        : `.au-select-options.uuid-${uuid} .selected`,
    )
    ?.classList.remove('selected')
}

/**
 * @description 添加下拉框项 值状态
 * @param uuid
 * @param val
 */
export const addElementValue = (uuid: string, val?: string) => {
  try {
    document
      .querySelector(
        `.au-select-options.uuid-${uuid}>.au-select-options-item[data-value='${val}']`,
      )
      ?.classList.add('selected')
  } catch (error) {
    console.error(error)
  }
}
