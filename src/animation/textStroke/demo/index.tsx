import React from 'react'
import { TextStroke } from '..'
import { Container, Unit } from 'unit-testing-react'
import anime from 'animejs'
import { Svg } from '@/animation/svg'

export default function () {
  React.useEffect(() => {
    // var myAnimation =
    anime({
      targets: ['.textStroke-demo .blue', '.textStroke-demo .green'],
      translateX: '13rem',
      rotate: 180,
      borderRadius: '8px',
      // duration: 2000,
      duration: 1000
      // loop: true
    })
  }, [])
  return (
    <Container columns={1}>
      <Unit>
        <Svg />
      </Unit>
      <Unit>
        <div className='textStroke-demo'>
          <div
            className='blue'
            style={{
              width: 40,
              height: 40,
              background: 'red',
              marginBottom: 10
            }}></div>
          <div
            className='green'
            style={{ width: 40, height: 40, background: 'red' }}></div>
        </div>
      </Unit>
      <Unit>
        <TextStroke>Text Stroke</TextStroke>
        <TextStroke>Text Stroke</TextStroke>
        <TextStroke>Text Stroke</TextStroke>
      </Unit>
      <Unit>
        <TextStroke width={200}>
          Text Stroke Text StrokeText StrokeText StrokeText StrokeText
          StrokeText StrokeText StrokeText StrokeText StrokeText StrokeText
          StrokeText Stroke
        </TextStroke>
      </Unit>
    </Container>
  )
}
