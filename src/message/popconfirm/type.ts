import type { ComponentProps } from '@/assets'

export interface PopConfirmProps extends ComponentProps {
  open?: boolean
  /**
   * @description
   * @default 'top'
   */
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'
    | 'center'
  content?: React.ReactNode
}
