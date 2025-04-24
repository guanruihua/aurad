import React from 'react'
import { Skeleton } from '..'
import { Docs } from '@/layout'

export default function () {
  return (
    <Docs
      items={[
        { title: 'Skeleton(default)', children: <Skeleton /> },
        {
          title: 'Skeleton(active=false)',
          children: <Skeleton active={false} />,
        },

        {
          title: "Skeleton(type='large')",
          children: <Skeleton size='large' />,
        },
        {
          title: "Skeleton(type='small')",
          children: <Skeleton size='small' />,
        },

        {
          title: "Skeleton(type='square')",
          children: (
            <Skeleton>
              <Skeleton.Item type='square' />
            </Skeleton>
          ),
        },
        {
          title: "Skeleton(type='round')",
          children: (
            <Skeleton>
              <Skeleton.Item type='round' />
            </Skeleton>
          ),
        },
        {
          title: "Skeleton(type='circle')",
          children: (
            <Skeleton>
              <Skeleton.Item type='circle' />
            </Skeleton>
          ),
        },
        {
          title: "Skeleton(type='round-circle')",
          children: (
            <Skeleton>
              <Skeleton.Item type='round-circle' />
            </Skeleton>
          ),
        },
        {
          title: 'Skeleton(Custom Layout)',
          children: (
            <Skeleton>
              <Skeleton.Item type='square' />
              <Skeleton.Item type='round' />
              <div>
                <Skeleton.Item type='circle' style={{ marginRight: 8 }} />
                <Skeleton.Item type='round-circle' />
              </div>
            </Skeleton>
          ),
        },
      ]}></Docs>
  )
}
