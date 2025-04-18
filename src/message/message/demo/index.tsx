import React from 'react'
import { Button } from '@/form'
import { Space } from '@/layout'
import { message } from '..'
import { Container, Unit } from 'unit-testing-react'
const list = ['success', 'error', 'info', 'warning']

export default function () {
  React.useEffect(() => {
    // message.success('Success Content')
  }, [])

  return (
    <Container>
      <Unit>
        <Space>
          {list.map((type) => (
            <Button
              key={type}
              onClick={() => {
                message[type](type + ' Content')
              }}>
              {type}
            </Button>
          ))}
        </Space>
      </Unit>
    </Container>
  )
}
