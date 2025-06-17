import React from 'react'
import { Button } from '@/form'
import { Docs, Flex } from '@/layout'
import { message } from '..'
const list = ['success', 'error', 'info', 'warning']

export default function () {
  return (
    <Docs
      items={[
        {
          title: '基本使用',
          children: (
            <Flex>
              {list.map((type) => (
                <Button
                  key={type}
                  onClick={() => {
                    message[type](type + ' Content')
                  }}>
                  {type}
                </Button>
              ))}
            </Flex>
          ),
          defaultShowCode: true,
          code: list.map(type=> `message.${type}('${type} Content')`).join('\n\n')
        },
      ]}
    />
  )
}
