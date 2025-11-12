import React from 'react'
import { Button } from '@/form'
import { Docs, Flex } from '@/layout'
import { message } from '..'
const list = ['success', 'error', 'info', 'warning']

export default function () {
  React.useEffect(() => {
    message.success(
      'success' + ' Content'
      // +  new Array(100).fill('abc ').join(''),
    )
  }, [])

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
                    message[type](
                      type + ' Content' + new Array(100).fill('abc').join(''),
                    )
                  }}>
                  {type}
                </Button>
              ))}
            </Flex>
          ),
          defaultShowCode: true,
          code: list
            .map((type) => `message.${type}('${type} Content')`)
            .join('\n\n'),
        },
      ]}
    />
  )
}
