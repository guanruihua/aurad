import React from 'react'
import { createRoot } from 'react-dom/client'

interface RenderOptionsProps {
  uuid: string
  Options: React.ReactNode
  parentDom: HTMLDivElement
  selectValue?: string
  selectValues?: string[]
}

export const renderOptions = async (conf: RenderOptionsProps) => {
  const { uuid, Options, parentDom } = conf

  const optionsDom = document.querySelector('.au-select-options.uuid-' + uuid)
  if (!optionsDom) {
    const dom = document.createElement('div')
    dom.className = 'au-select-options uuid-' + uuid
    dom.style.display = 'none'
    createRoot(dom).render(Options)

    window.document.body.appendChild(dom)
  }

  if (parentDom) {
    const parentRect = parentDom.getBoundingClientRect()

    const optionDom: any = document.querySelector(
      '.au-select-options.uuid-' + uuid,
    )
    if (optionDom) {
      optionDom.style.display = 'flex'
      optionDom.style.width = parentRect.width + 'px'
      optionDom.style.left = parentRect.left + 'px'
      optionDom.style.top = parentRect.bottom + 'px'
    }
  }
}
