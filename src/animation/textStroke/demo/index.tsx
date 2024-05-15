import React from 'react'
import { TextStroke } from '..'
import { Container, Unit } from 'unit-testing-react'
export default function () {
  return (
    <Container columns={1}>
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
