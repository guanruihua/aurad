import React, { CSSProperties } from 'react'
import type { PopConfirmProps } from './type'

const ArrowSize = 10

interface GetStyleProps extends PopConfirmProps {
  childSize: DOMRect
  popSize: DOMRect
}
export const getPopStyle = (
  props: GetStyleProps
): {
  arrowStyle: CSSProperties
  innerStyle: CSSProperties
  popStyle: CSSProperties
} => {
  const { placement, childSize, popSize } = props

  const arrowStyle: CSSProperties = {}
  const innerStyle: CSSProperties = {}
  const popStyle: CSSProperties = {}

  // return {
  //     arrowStyle,
  //     innerStyle,
  //     popStyle
  //   }

  if (
    !childSize ||
    !childSize.width ||
    !placement ||
    !popSize ||
    !popSize.width
  ) {
    return {
      arrowStyle,
      innerStyle,
      popStyle
    }
  }
  if (placement.indexOf('top') === 0) {
    popStyle.top = -ArrowSize - popSize.height
    popStyle.left = (childSize.width - popSize.width) / 2
    arrowStyle.bottom = 1 - ArrowSize / 2
    arrowStyle.left = (popSize.width - ArrowSize) / 2
  }
  if (placement === 'top') {
  }
  if (placement === 'topLeft') {
    popStyle.left = 0
    arrowStyle.left = (popSize.width - childSize.width) / 2 + 8
  }
  if (placement === 'topRight') {
    popStyle.left = childSize.width - popSize.width
    arrowStyle.left = childSize.width - 8
  }

  if (placement.indexOf('bottom') === 0) {
    popStyle.top = ArrowSize / 2 + childSize.height
    popStyle.left = (childSize.width - popSize.width) / 2
    arrowStyle.top = 2 - ArrowSize / 2
    arrowStyle.left = (popSize.width - ArrowSize) / 2
  }

  if (placement === 'bottom') {
  }
  if (placement === 'bottomLeft') {
    popStyle.left = 0
    arrowStyle.left = (popSize.width - childSize.width) / 2 + 8
  }
  if (placement === 'bottomRight') {
    popStyle.left = childSize.width - popSize.width
    arrowStyle.left = childSize.width - 8
  }

  if (placement.indexOf('left') === 0) {
    popStyle.left = -ArrowSize - popSize.width
    popStyle.top = (childSize.height - popSize.height) / 2
    arrowStyle.right = 1 - ArrowSize / 2
    arrowStyle.top = (popSize.height - ArrowSize) / 2
  }
  if (placement === 'left') {
  }
  if (placement === 'leftTop') {
    popStyle.top = 0
    arrowStyle.top = 8
  }
  if (placement === 'leftBottom') {
    popStyle.top = childSize.height - popSize.height
    arrowStyle.top = popSize.height - ArrowSize - 8
  }

  if (placement.indexOf('right') === 0) {
    popStyle.left = ArrowSize + childSize.width
    popStyle.top = (childSize.height - popSize.height) / 2
    arrowStyle.left = -ArrowSize / 2 + 1
    arrowStyle.top = childSize.height / 2
  }

  if (placement === 'right') {
  }
  if (placement === 'rightTop') {
    popStyle.top = 0
    arrowStyle.top = 8
  }
  if (placement === 'rightBottom') {
    popStyle.top = childSize.height - popSize.height
    arrowStyle.top = popSize.height - ArrowSize - 8
  }

  if (placement === 'center') {
    arrowStyle.display = 'none'
    popStyle.top = 0
  }

  return {
    arrowStyle,
    popStyle,
    innerStyle
  }
}
