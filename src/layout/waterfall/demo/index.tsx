import React from 'react'
import { Waterfall } from '..'
import { RD, RDS } from '@/demo'
import { Docs } from '@/layout/docs'

export default function () {
  return (
    <Docs
      items={[
        {
          title: 'Waterfall(default)',
          children: (
            <Waterfall count={5}>
              <RDS count={50} style={{ width: '100%', opacity: 0.6 }} />
            </Waterfall>
          ),
        },
        {
          title: 'Waterfall(x)',
          children: (
            <Waterfall count={5} type='x'>
              {new Array(50).fill('').map((_, i) => (
                <RD key={i} style={{ width: '100%', opacity: 0.6 }}>
                  {i}
                </RD>
              ))}
              {/* <RDS count={50} style={{ width: '100%', opacity: 0.6 }} /> */}
            </Waterfall>
          ),
        },
      ]}
    />
  )
}
