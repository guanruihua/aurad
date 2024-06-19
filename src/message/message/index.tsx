import React from 'react'
import { icons } from './icons'
import './index.less'

export type MessageType =
  | 'open'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'loading'
  | string

const getBox = () => {
  const oldDom = document.querySelector('.au-message')
  if (oldDom) {
    return oldDom
  }
  const box = document.createElement('div')
  box.classList.add('au-message')
  document.body.appendChild(box)
  
  const timer = setInterval(() => {
    const dom = document.querySelector('.au-message')
    if (dom) {
      if (!dom.childNodes.length) {
        document.body.removeChild(dom)
        clearInterval(timer)
      }
    } else {
      clearInterval(timer)
    }
  }, 3100)

  return box
}

export const message = (type: MessageType, content: string) => {
  // console.log(type, content, document.body)

  const box = getBox()

  const inner = document.createElement('div')
  inner.classList.add('au-message-inner')

  const logo = document.createElement('span')
  logo.classList.add(type)
  logo.innerHTML = (icons as any)[type] || icons.warning
  inner.appendChild(logo)

  const text = document.createElement('span')
  text.innerText = content
  inner.appendChild(text)

  box.appendChild(inner)

  const timer = setTimeout(() => {
    box.removeChild(inner)
    clearTimeout(timer)
  }, 3000)
}
