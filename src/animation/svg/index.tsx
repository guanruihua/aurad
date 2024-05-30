import React from 'react'

export interface SvgProps {
  [key: string]: any
}

export function Svg(props: SvgProps) {
  const {} = props
  const ref = React.useRef<SVGSVGElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    const svg = ref.current
    const draggable = ref.current.children
    console.log(svg, draggable)
    let offsetX: number
    let offsetY: number
    let isDragging = false

    // draggable.addEventListener('mousedown', (e) => {
    //   isDragging = true
    //   console.log(e)
    //   const { x, y } = getMousePosition(e)
    //   const { cx, cy } = draggable.getBBox()
    //   offsetX = x - cx
    //   offsetY = y - cy
    // })

    // svg.addEventListener('mousemove', (e) => {
    //   if (isDragging) {
    //     const { x, y } = getMousePosition(e)
    //     draggable.setAttribute('cx', x - offsetX)
    //     draggable.setAttribute('cy', y - offsetY)
    //   }
    // })

    // svg.addEventListener('mouseup', () => {
    //   isDragging = false
    // })

    // svg.addEventListener('mouseleave', () => {
    //   isDragging = false
    // })

    // function getMousePosition(evt) {
    //   const CTM = svg.getScreenCTM()
    //   return {
    //     x: (evt.clientX - CTM.e) / CTM.a,
    //     y: (evt.clientY - CTM.f) / CTM.d
    //   }
    // }
    // document.addEventListener('DOMContentLoaded', (event) => {})
  }, [ref.current])

  return (
    <div>
      <svg
        ref={ref}
        viewBox="0 -100 600 400" 
        width='600'
        height='400'
        style={{ border: '1px solid #ccc' }}>
        <circle cx='100' cy='100' r='50' fill='#eee' id='draggable' />
      </svg>
    </div>
  )
}
