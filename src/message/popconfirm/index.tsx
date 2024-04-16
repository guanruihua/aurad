import React, { CSSProperties } from 'react'
import './index.less'
import { classNames } from 'harpe'
import type { PopConfirmProps } from './type'
import { getPopStyle } from './util'

export { PopConfirmProps }

export function PopConfirm(props: PopConfirmProps) {
  const { placement = 'top', children, content = '' } = props
  const ref = React.useRef<HTMLDivElement>(null)

  const newClassName = classNames(
    'au-popConfirm-box',
    `au-popConfirm-box-placement-${placement}`,
    {}
  )

  const [childSize, setChildSize] = React.useState<DOMRect>({} as DOMRect)
  const [popSize, setPopSize] = React.useState<DOMRect>({} as DOMRect)

  const [boxStyle, setBoxStyle] = React.useState<CSSProperties>({})

  React.useEffect(() => {
    if (!ref.current) return

    const dom = ref.current
    const firstDom = dom.firstChild as HTMLButtonElement
    const lastDom = dom.lastChild as HTMLDivElement
    setChildSize(firstDom.getBoundingClientRect())
    setPopSize(lastDom.getBoundingClientRect())
    /**
		 {
  		 "x": 404.6007080078125,
  		 "y": 128.21180725097656,
  		 "width": 78.15972900390625,
  		 "height": 31.99652862548828,
  		 "top": 128.21180725097656,
  		 "right": 482.76043701171875,
  		 "bottom": 160.20833587646484,
  		 "left": 404.6007080078125
		 }
		 */
    const hoverEvent = 'mouseenter'
    const leaveEvent = 'mouseleave'

    const hover = () => {
      if (boxStyle.visibility !== 'visible') {
        setBoxStyle({
          visibility: 'visible'
        })
        dom.addEventListener(leaveEvent, leave)
      }
    }

    const leave = () => {
      setBoxStyle({
        visibility: 'hidden'
      })
      dom.removeEventListener(leaveEvent, leave)
    }

    dom.removeEventListener(hoverEvent, hover)
    dom.addEventListener(hoverEvent, hover)

    return () => {
      dom.removeEventListener(hoverEvent, hover)
      dom.removeEventListener(leaveEvent, leave)
    }
  }, [ref.current])

  const { arrowStyle, innerStyle, popStyle } = getPopStyle({
    placement,
    childSize,
    popSize
  })

  return (
    <span className={newClassName} ref={ref}>
      {children}
      {/* <div className='au-popConfirm' style={popStyle}> */}
      <div className='au-popConfirm' style={{ ...popStyle, ...boxStyle }}>
        <div className='au-popConfirm-arrow' style={arrowStyle} />
        <div className='au-popConfirm-inner' style={innerStyle}>
          {content}
        </div>
      </div>
    </span>
  )
}
