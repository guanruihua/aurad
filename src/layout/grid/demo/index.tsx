import React from 'react'
import { Grid } from '..'
import { Container, Unit } from 'unit-testing-react'
import { RFD } from '@/demo'

export default function () {
  return (
    <Container columns={1}>
      <Unit>
        <Grid
          // rows={3}
          // rows={4}
          // rows={5}
          columns={4}
          merge={{
            // 0: { row: 2, column: 2, },
            1: { row: 3, column: 3 }
            // 2: { row: 2, column: 2, },
            // 9: { row: 3, column: 2 },
            // 10: { row: 3, column: 2 },
          }}
          childStyle={{ minHeight: 60, opacity: 0.6 }}>
          {new Array(39).fill('').map((_, index) => {
            return <RFD key={index}>{index}</RFD>
          })}
          {/* 123
          {false}
          {[1, 0, undefined]} */}
        </Grid>
      </Unit>
    </Container>
  )
}
