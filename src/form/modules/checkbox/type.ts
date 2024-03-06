import { ReactNode } from 'react'
import { ComponentProps } from '@/assets'
import { ObjectType } from 'abandonjs'

export type CheckboxValue = boolean | string | number | ObjectType

export type CheckboxChangeEvent = {
  target: {
    value: CheckboxValue | CheckboxValue[]
  }
}

/**
 * @description 复选框属性
 */
export interface CheckboxItemProps extends ComponentProps {
  /**
   * @description input[type="checkbox"] 的 name 属性, 也作为非单一组件时候的 value
   */
  name?: string
  /**
   * @description 选中当前复选框值
   */
  value?: CheckboxValue
  /**
   * @description 显示文本
   */
  label?: string | number
  /**
   * @description 禁用
   */
  disabled?: boolean
  [key: string]: any
}

/**
 * @description 复选框属性
 */
export interface CheckboxProps extends ComponentProps {
  /**
   * @description 选中状态(默认)
   */
  defaultValue?: boolean | CheckboxValue[]
  /**
   * @description 选中状态
   */
  value?: boolean
  /**
   * @description
   */
  label?: string | number
  disabled?: boolean
  options?: CheckboxItemProps[]
  /**
   * @description 值发生改变而触发
   * @param event {?CheckboxChangeEvent}
   * @returns
   */
  onChange?: (event?: CheckboxChangeEvent) => void
}

/**
 * @description 复选框组属性
 */
export interface CheckboxGroupProps extends ComponentProps {
  value?: CheckboxValue[]
  onChange?: (event: CheckboxChangeEvent) => void
  defaultValue?: CheckboxValue[]
  options?: (
    | string
    | number
    | { value: CheckboxValue; label: string | number }
    | CheckboxProps
  )[]
  children?: ReactNode
}

export interface CheckboxGroupContextProps {
  name: string
  groupProps?: CheckboxGroupProps
  groupValue: CheckboxValue[]
  setGroupValue: (value: CheckboxValue, itemProps: CheckboxItemProps) => void
  [key: string]: any
}
