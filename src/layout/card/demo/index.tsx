import React from 'react'
import { Card } from '..'
import { Docs } from '@/layout/docs'

export default function () {
  return (
    <Docs
      items={[
        {
          title: 'Card',
          children: (
            <Card header={'header'} footer={'footer'}>
              {' '}
              卡片内容{' '}
            </Card>
          ),
        },
        {
          title: 'Card(no header)',
          children: <Card footer={'footer'}> 卡片内容 </Card>,
        },
        {
          title: 'Card(no footer)',
          children: <Card header={'header'}> 卡片内容 </Card>,
        },
        {
          title: 'Card(no header & no footer)',
          children: <Card> 卡片内容 </Card>,
        },
      ]}
    />
  )
}
