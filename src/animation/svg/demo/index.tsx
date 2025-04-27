import React from 'react'
import anime from 'animejs'
import { Svg } from '@/animation/svg'
import { Docs, Grid } from '@/layout'

export default function () {
  React.useEffect(() => {
    anime({
      targets: ['.textStroke-demo .blue', '.textStroke-demo .green'],
      translateX: '13rem',
      rotate: 180,
      borderRadius: '8px',
      // duration: 2000,
      duration: 1000,
      // loop: true
    })
  }, [])

  return (
    <Docs>
      <Grid columns={1}>
        <div className='textStroke-demo'>
          <div
            className='blue'
            style={{
              width: 40,
              height: 40,
              background: 'red',
              marginBottom: 10,
            }}></div>
          <div
            className='green'
            style={{ width: 40, height: 40, background: 'green' }}></div>
        </div>
        <Svg />
      </Grid>
    </Docs>
  )
}
