import { ReactNode } from 'react'
import { ObjectType } from 'abandonjs'
import { ClassNameType } from 'harpe'

interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'defaultValue' | 'onChange'> {
  className?: ClassNameType
}

export type CheckboxValue = boolean | string | number | ObjectType

export type CheckboxChangeEvent = {
  target: {
    value: CheckboxValue | CheckboxValue[]
  }
}

/**
 * @description 复选框属性
 */
export interface CheckboxItemProps extends Props {
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
export interface CheckboxProps extends Props {
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
export interface CheckboxGroupProps extends Props {
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
