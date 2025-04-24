import React from 'react'
import { Button } from '@/form'
import { Docs, Space } from '@/layout'
import { message } from '..'
const list = ['success', 'error', 'info', 'warning']

export default function () {
  // React.useEffect(() => {
  // message.success('Success Content')
  // }, [])

  return (
    <Docs>
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
    </Docs>
  )
}
