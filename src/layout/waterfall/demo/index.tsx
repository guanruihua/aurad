import React from 'react'
import { Waterfall } from '..'
import { RD, RDS } from '@/demo'
import { Unit } from 'unit-testing-react'

export default function () {
  return (
    <Waterfall>
      <Unit title='Waterfall(default)'>
        <Waterfall count={5}>
          <RDS count={50} style={{ width: '100%', opacity: 0.6 }} />
        </Waterfall>
      </Unit>
      <Unit title='Waterfall(x)'>
        <Waterfall count={5} type='x'>
          {new Array(50).fill('').map((_, i) => (
            <RD key={i} style={{ width: '100%', opacity: 0.6 }} >{i}</RD>
          ))}
          {/* <RDS count={50} style={{ width: '100%', opacity: 0.6 }} /> */}
        </Waterfall>
      </Unit>
    </Waterfall>
  )
}
