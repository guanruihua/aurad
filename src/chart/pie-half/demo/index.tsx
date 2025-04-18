import React from 'react'
import { Unit } from 'unit-testing-react'
import { PieHalf } from '..'
import { Flex, Grid } from '@/layout'

export default function () {
  const total = 1000
  const r = 1000
  const list: [number, number][] = [
    [total, 10 * r],
    [total, 20 * r],
    [total, 30 * r],
    [total, 40 * r],
    [total, 50 * r],
    [total, 70 * r],
    [total, 10 * r]
  ]
  const conf: [number, [number, number][]][] = [
    [100, list],
    [200, list],
    [300, list],
    [400, list]
  ]
  return (
    <Flex>
      {conf.map((item, i) => {
        const [size, list] = item
        return (
          <Flex>
            {list.map((unit, j) => {
              const [total, value] = unit
              return (
                <Unit key={i + '_' + j}>
                  <PieHalf total={total} value={value} size={size} />
                </Unit>
              )
            })}
          </Flex>
        )
      })}
    </Flex>
  )
}
