import React from 'react'
import { Container, Unit } from 'unit-testing-react'
import { ImageUpload } from '..'

export default function InputTestCmp() {
  const [value, setValue] = React.useState<string>('value')

  return (
    <Container columns={1} title='ImageUpload'>
      <Unit title='ImageUpload'>
        <ImageUpload />
      </Unit>
    </Container>
  )
}
