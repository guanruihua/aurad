import { isArray, isString } from 'asura-eye'

export const getRefValue = (ref: any): string | undefined => {
  if (!ref.current) return undefined
  return ref.current.getAttribute('data-value') || undefined
}

export const setRefValue = (ref: any, value: string[] = []) => {
  if (!ref.current || !isArray(value)) return
  const valueStr = isString(value) ? value : ''
  ref.current.setAttribute('data-value', valueStr)
}
