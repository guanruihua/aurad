import React, { ReactNode } from 'react'
import { classNames } from 'harpe'
import { ComponentProps } from '@/assets'
import { Icon } from '@/icon'
import { Button } from '@/form'
import './index.less'
import { isNoEmpty } from 'asura-eye'

export interface DialogProps extends ComponentProps {
  title?: string | ReactNode
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
   * @default false
   * @type {boolean}
   */
  maskClosable?: boolean
  children?: ReactNode
}

export function Dialog(props: DialogProps) {
  const {
    open = false,
    children,
    className,
    title,
    onCancel,
    hiddenCancel = false,
    onOk,
    hiddenOk = false,
    maskClosable = false
  } = props

  if (open === false) return <div />

  return (
    <div className={classNames('au-dialog', className)}>
      <div
        className='au-dialog-mask'
        onClick={() => maskClosable && onCancel && onCancel()}
      />
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
        <div className='au-dialog-footer'>
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
