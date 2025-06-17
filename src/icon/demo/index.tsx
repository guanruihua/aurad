import React from 'react'
import { Icon } from '..'
import { IconType, icons } from '../icons'
import { Docs, Flex } from '@/layout'
import { useSetState } from '0hook'
import './index.less'

export default function () {
  const [state, setState] = useSetState(
    {
      color: '#999',
      size: '32',
      select: '',
    },
    'demo-page-icon',
  )

  return (
    <Docs
      className='demo-page-icon'
      items={[
        {
          title: 'Icon',
          children: (
            <Flex column>
              <Flex style={{ alignItems: 'center' }}>
                <label>Color</label>
                <input
                  style={{
                    background: 'rgba(255,255,255,.4)',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    lineHeight: '24px',
                    width: 64,
                    borderRadius: 4,
                  }}
                  value={state.color}
                  type='color'
                  onChange={(e) => {
                    const color = e.target.value
                    setState({ color })
                  }}
                />
                <label>Size</label>
                <input
                  style={{
                    background: 'transparent',
                    color: '#fff',
                    border: '2px solid #fff',
                    lineHeight: '24px',
                    padding: '0 5px',
                    width: 64,
                    borderRadius: 4,
                  }}
                  value={state.size}
                  name='size'
                  type='number'
                  onChange={(e) => {
                    const size = e.target.value
                    setState({ size })
                  }}
                />
              </Flex>
              <Flex>
                {Object.keys(icons).map((item: IconType) => (
                  <Icon
                    key={item}
                    type={item}
                    color={state.color}
                    size={Number(state.size)}
                    style={{
                      cursor: 'pointer',
                      borderBottom:
                        state.select === item ? '3px solid #88CA97' : 'none',
                    }}
                    onClick={() => {
                      setState({ select: item })
                    }}
                  />
                ))}
              </Flex>
            </Flex>
          ),
          defaultShowCode: true,
          code: `<Icon icon='${state.select}' />`,
        },
      ]}></Docs>
  )
}
