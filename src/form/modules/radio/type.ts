import { ComponentProps } from '@/assets'

export type RadioValue = boolean | string | any

export type RadioChangeEvent = {
  target: {
    value: RadioValue
  }
}

/**
 * @description 复选框属性
 */
export interface RadioProps extends ComponentProps {
  /**
   * @description input[type="radio"] 的 name 属性, 也作为非单一组件时候的 value
   */
  name?: string
  /**
   * @description 选中状态(默认)
   */
  defaultValue?: boolean
  /**
   * @description 选中当前复选框值
   */
  value?: RadioValue
  /**
   * @description
   */
  label?: string | number
	/**
	 * @description 禁用
	 */
  disabled?: boolean
  /**
   * @description 值发生改变而触发
   * @returns
   */
  onChange?: (event: RadioChangeEvent) => void
  options?: RadioProps[]
  [key: string]: any
}
