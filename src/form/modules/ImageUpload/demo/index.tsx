import React from 'react'
import { ImageUpload } from '..'
import { Docs } from '@/layout'

export default function InputTestCmp() {
  // const [value, setValue] = React.useState<string>('value')

  return (
    <Docs
      items={[
        {
          title: 'ImageUpload',
          children: <ImageUpload />,
        },
      ]}
    />
  )
}
