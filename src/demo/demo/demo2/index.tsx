import React from 'react'
import { gsap } from 'gsap'

export default () => {
  const [reversed, setReversed] = React.useState(false)
  const app = React.useRef<HTMLDivElement>(null)
  const tl = React.useRef<any>()

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill()
      tl.current = gsap.timeline()
      // const tl = gsap.timeline()
      // gsap.to('.box', { rotation: '+=360' })
      // gsap.to('.box', { rotation: '+=360deg', x: 100, duration: 2 })
      tl.current
        .to('.box', {
          // background: 'green',
          rotation: '+=360',
          x: 100,
          y: 50,
          duration: 1,
          fontWeight: 'bold',
        })
        .fromTo(
          '.box',
          1,
          {
            background: 'red',
          },
          {
            duration: 1000,
            background: 'green',
            ease: 'Power2.easeInOut',
          },
        )

      // .to('.box', {
      //   rotation: '+=360',
      //   x: 500,
      //   duration: 5,
      // })
      // gsap.to('.box',{
      //   background: 'green',
      //   fontWeight: 'bold',
      // })
    }, app)

    return () => {
      ctx.revert()
    }
  })

  React.useEffect(() => {
    // toggle the direction of our timeline
    console.log('toggling reverse to', reversed)
    tl.current.reversed(reversed)
  }, [reversed])

  return (
    <div ref={app}>
      <button style={{ padding: 10 }} onClick={() => setReversed(!reversed)}>
        Toggle
      </button>
      <div
        className="box"
        style={{
          background: 'red',
          display: 'inline-block',
          padding: 10,
          borderRadius: 12,
        }}
      >
        helloworld
      </div>
    </div>
  )
}
