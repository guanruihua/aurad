import React from 'react'
import { ClassNameType } from 'harpe'
import './index.less'
import { isNumber, isString } from 'asura-eye'
import { SplitProps } from '.'

export const useState = (props: SplitProps) => {
  const { gap = 10, leftMinWidth = '20%', rightMinWidth = '20%' } = props

  const boxRef = React.useRef<HTMLDivElement>(null)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!boxRef.current) {
      return
    }
    const boxRect = boxRef.current.getBoundingClientRect()
    let newWidth = e.clientX - boxRect.x

    const toNum = (val: number | string) => {
      if (isNumber(val)) return val
      if (isString(val)) {
        if (/\d+px/.test(val)) return Number(val.replace('px', ''))
        if (/\d+%/.test(val))
          return (boxRect.width * Number(val.replace('%', ''))) / 100
      }
      return 0
    }

    const leftMin = toNum(leftMinWidth)
    const rightMin = toNum(rightMinWidth)

    if (newWidth <= leftMin) {
      newWidth = leftMin
    }

    if (newWidth + rightMin >= boxRect.width) {
      newWidth = boxRect.width - rightMin
    }

    boxRef.current.style.gridTemplateColumns = `${newWidth + 'px'} ${gap}px 1fr`
  }

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  return {
    boxRef,
    onMouseDown,
  }
}
