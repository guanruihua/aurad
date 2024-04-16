import { Button } from '@/form'
import React from 'react'
import { Container, Unit } from 'unit-testing-react'
import { PopConfirm } from '..'
import './index.less'

const content = (
  <div>
    Message
    <br />
    Message
  </div>
)

export default function () {
  const cmmProps = {
    content
  }

  const doms = [
    <div />,
    <PopConfirm {...cmmProps} placement='topLeft'>
      <Button>TopLeft</Button>
    </PopConfirm>,
    <PopConfirm {...cmmProps} placement='top'>
      <Button>Top</Button>
    </PopConfirm>,
    <PopConfirm {...cmmProps} placement='topRight'>
      <Button>topRight</Button>
    </PopConfirm>,
    <div />,

    <PopConfirm {...cmmProps} placement='leftTop'>
      <Button>LeftTop</Button>
    </PopConfirm>,
    <div />,
    <div />,
    <div />,
    <PopConfirm {...cmmProps} placement='rightTop'>
      <Button>RightTop</Button>
    </PopConfirm>,

    <PopConfirm {...cmmProps} placement='left'>
      <Button>Left</Button>
    </PopConfirm>,
    <div />,
    <PopConfirm {...cmmProps} placement='center'>
      <Button>Center</Button>
    </PopConfirm>,
    <div />,
    <PopConfirm {...cmmProps} placement='right'>
      <Button>Right</Button>
    </PopConfirm>,

    <PopConfirm {...cmmProps} placement='leftBottom'>
      <Button>LeftBottom</Button>
    </PopConfirm>,
    <div />,
    <div />,
    <div />,
    <PopConfirm {...cmmProps} placement='rightBottom'>
      <Button>RightBottom</Button>
    </PopConfirm>,

    <div />,
    <PopConfirm {...cmmProps} placement='bottomLeft'>
      <Button>BottomLeft</Button>
    </PopConfirm>,
    <PopConfirm {...cmmProps} placement='bottom'>
      <Button>Bottom</Button>
    </PopConfirm>,
    <PopConfirm {...cmmProps} placement='bottomRight'>
      <Button>BottomRight</Button>
    </PopConfirm>,
    <div />
  ]

  return (
    <Container columns={1}>
      <Unit title='PopConfirm'>
        <div
          className='popconfirm-test'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(5, 100px)',
            gap: 10,
            padding: '50px 120px'
          }}>
          {doms.map((i, k) => (
            <div key={k}>{i}</div>
          ))}
        </div>
      </Unit>
    </Container>
  )
}
