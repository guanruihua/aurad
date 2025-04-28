import React from 'react'
import { PieHalf } from '..'
import { Flex, Docs } from '@/layout'

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
    [total, 10 * r],
  ]
  const conf: [number, [number, number][]][] = [
    [100, list],
    [200, list],
    [300, list],
    [400, list],
  ]
  return (
    <Docs>
      <Flex>
        {conf.map((item, i) => {
          const [size, list] = item
          return (
            <Flex>
              {list.map((unit, j) => {
                const [total, value] = unit
                return (
                  <PieHalf
                    key={i + '_' + j}
                    total={total}
                    value={value}
                    size={size}
                  />
                )
              })}
            </Flex>
          )
        })}
      </Flex>
    </Docs>
  )
}
