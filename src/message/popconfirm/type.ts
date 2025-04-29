import { ClassNameType } from 'harpe'

export interface PopConfirmProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'content'> {
  className?: ClassNameType
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
