import React from 'react'
import { Skeleton, SkeletonItem } from '..'
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
              <SkeletonItem type='square' />
            </Skeleton>
          ),
        },
        {
          title: "Skeleton(type='round')",
          children: (
            <Skeleton>
              <SkeletonItem type='round' />
            </Skeleton>
          ),
        },
        {
          title: "Skeleton(type='circle')",
          children: (
            <Skeleton>
              <SkeletonItem type='circle' />
            </Skeleton>
          ),
        },
        {
          title: "Skeleton(type='round-circle')",
          children: (
            <Skeleton>
              <SkeletonItem type='round-circle' />
            </Skeleton>
          ),
        },
        {
          title: 'Skeleton(Custom Layout)',
          children: (
            <Skeleton>
              <SkeletonItem type='square' />
              <SkeletonItem type='round' />
              <div>
                <SkeletonItem type='circle' style={{ marginRight: 8 }} />
                <SkeletonItem type='round-circle' />
              </div>
            </Skeleton>
          ),
        },
      ]}></Docs>
  )
}
