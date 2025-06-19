import React from 'react'
import { ObjectType } from '0type'
import { createRoot } from 'react-dom/client'
import { isArray } from 'asura-eye'

export const renderOptions = (conf: ObjectType, Options: React.ReactNode) => {
  const { uuid } = conf

  const oldDom = document.querySelector('.au-select-options.uuid-' + uuid)
  if (oldDom) return

  const dom = document.createElement('div')
  dom.className = 'au-select-options uuid-' + uuid
  dom.style.display = 'none'

  createRoot(dom).render(Options)

  const body = window.document.body
  body.appendChild(dom)
}

export const updatePosition = (conf: ObjectType, parentDom: HTMLDivElement) => {
  const { uuid } = conf
  if (!parentDom) return
  const parentRect = parentDom.getBoundingClientRect()

  const optionDom: any = document.querySelector(
    '.au-select-options.uuid-' + uuid,
  )
  if (optionDom) {
    optionDom.style.display = 'block'
    optionDom.style.width = parentRect.width + 'px'
    optionDom.style.left = parentRect.left + 'px'
    optionDom.style.top = parentRect.bottom + 'px'
  }
}

export const getUUID = (): string => {
  const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    },
  )

  if (isArray((window as any).AU_UUIDS)) {
    if ((window as any).AU_UUIDS.includes(id)) {
      return getUUID()
    }
    ;(window as any).AU_UUIDS.push(id)
  } else {
    ;(window as any).AU_UUIDS = [id]
  }
  return id
}
