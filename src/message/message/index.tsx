import React from 'react'
import { createRoot } from 'react-dom/client'
import { icons } from './icons'
import './index.less'

export type MessageType = 'success' | 'error' | 'info' | 'warning' | string

export const message: {
  success(content: React.ReactNode, timeout?: number): void
  error(content: React.ReactNode, timeout?: number): void
  info(content: React.ReactNode, timeout?: number): void
  warning(content: React.ReactNode, timeout?: number): void
  [key: string]: any
} = {
  dom: null,
  init() {
    const old = document.querySelector('body>.au-message-box')
    if (old) return
    const dom = document.createElement('div')
    dom.className = 'au-message-box'
    this.dom = dom
    document.body.appendChild(this.dom)
  },
  open(
    content: React.ReactNode,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    timeout: number = 3000,
  ) {
    this.init()
    const dom = document.createElement('div')

    const JSXdom = (
      <div className={`au-message ${type}`}>
        <div className='icon'>{icons[type]}</div>
        <div className='content'>{content}</div>
      </div>
    )

    createRoot(dom).render(JSXdom)
    this.dom.appendChild(dom)

    let timer: any = null
    timer = setTimeout(() => {
      dom.remove()
      clearTimeout(timer)
    }, timeout)
  },
  warning(content: React.ReactNode, timeout: number = 3000) {
    this.open(content, 'warning', timeout)
  },
  info(content: React.ReactNode, timeout: number = 3000) {
    this.open(content, 'info', timeout)
  },

  error(content: React.ReactNode, timeout: number = 3000) {
    this.open(content, 'error', timeout)
  },

  success(content: React.ReactNode, timeout: number = 3000) {
    this.open(content, 'success', timeout)
  },
  close() {
    this.dom && this.dom.remove()
  },
}
