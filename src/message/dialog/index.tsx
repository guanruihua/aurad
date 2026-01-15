import React, { ReactNode } from 'react'
import { classNames, ClassNameType } from 'harpe'
import { Icon } from '@/icon'
import { Button } from '@/form'
import { isNoEmpty } from 'asura-eye'
import ReactDOM from 'react-dom'
import './index.less'
import './night.less'

export interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  className?: ClassNameType
  title?: ReactNode
  open?: boolean
  /**
   * @description 取消按钮方法回调
   * @type {()=>void}
   */
  onCancel?: () => void
  /**
   * @description 隐藏取消按钮
   * @type {boolean}
   */
  hiddenCancel?: boolean
  /**
   * @description 确定按钮方法回调
   * @type {()=>void}
   */
  onOk?: () => void
  /**
   * @description 隐藏确定按钮
   * @type {boolean}
   */
  hiddenOk?: boolean
  /**
   * @description 点击遮罩(蒙层)关闭
   * @default true
   * @type {boolean}
   */
  maskClosable?: boolean
  children?: ReactNode
}

function DialogCore(props: DialogProps) {
  const {
    open = false,
    children,
    className,
    title,
    onCancel,
    hiddenCancel = false,
    onOk,
    hiddenOk = false,
    maskClosable = true,
  } = props

  if (open === false) return <div />

  return (
    <div
      className={classNames('au-dialog', className)}
      onClick={() => maskClosable && onCancel && onCancel()}>
      <div className='au-dialog-layout'>
        {isNoEmpty(title) && (
          <div className='au-dialog-header'>
            <div className='au-dialog-header-label'>{title}</div>
            <div
              className='au-dialog-header-logo-close'
              onClick={() => {
                onCancel && onCancel()
              }}>
              <Icon type='no' size={16} fill='currentColor' />
            </div>
          </div>
        )}
        <div className='au-dialog-body'>{children}</div>
        <div
          className={classNames('au-dialog-footer', {
            hidden: (hiddenCancel || !onCancel) && (hiddenOk || !onOk),
          })}>
          <div className='au-dialog-footer-controls'>
            {!hiddenCancel && onCancel && (
              <Button onClick={() => onCancel()}>Cancel</Button>
            )}
            {!hiddenOk && onOk && (
              <Button
                type='primary'
                onClick={() => {
                  onOk()
                }}>
                OK
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Dialog(props: DialogProps) {
  return ReactDOM.createPortal(<DialogCore {...props} />, document.body)
}
