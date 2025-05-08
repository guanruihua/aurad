import { CSSProperties } from 'react'
import type { PopConfirmProps } from './type'


interface GetStyleProps extends PopConfirmProps {
  childSize: DOMRect
  popSize: DOMRect
}
export const getPopStyle = (
  props: GetStyleProps,
): {
  innerStyle: CSSProperties
  popStyle: CSSProperties
} => {
  const gap = 10
  const { placement, childSize, popSize } = props

  const innerStyle: CSSProperties = {}
  const popStyle: CSSProperties = {}

  if (
    !childSize ||
    !childSize.width ||
    !placement ||
    !popSize ||
    !popSize.width
  ) {
    return {
      innerStyle,
      popStyle,
    }
  }
  if (placement.indexOf('top') === 0) {
    popStyle.top = -gap - popSize.height
    popStyle.left = (childSize.width - popSize.width) / 2
  }
  if (placement === 'top') {
  }
  if (placement === 'topLeft') {
    popStyle.left = 0
  }
  if (placement === 'topRight') {
    popStyle.left = childSize.width - popSize.width
  }

  if (placement.indexOf('bottom') === 0) {
    popStyle.top = gap / 2 + childSize.height
    popStyle.left = (childSize.width - popSize.width) / 2
  }

  if (placement === 'bottom') {
  }
  if (placement === 'bottomLeft') {
    popStyle.left = 0
  }
  if (placement === 'bottomRight') {
    popStyle.left = childSize.width - popSize.width
  }

  if (placement.indexOf('left') === 0) {
    popStyle.left = -gap - popSize.width
    popStyle.top = (childSize.height - popSize.height) / 2
  }
  if (placement === 'left') {
  }
  if (placement === 'leftTop') {
    popStyle.top = 0
  }
  if (placement === 'leftBottom') {
    popStyle.top = childSize.height - popSize.height
  }

  if (placement.indexOf('right') === 0) {
    popStyle.left = gap + childSize.width
    popStyle.top = (childSize.height - popSize.height) / 2
  }

  if (placement === 'right') {
  }
  if (placement === 'rightTop') {
    popStyle.top = 0
  }
  if (placement === 'rightBottom') {
    popStyle.top = childSize.height - popSize.height
  }

  return {
    popStyle,
    innerStyle,
  }
}
