import React from 'react'
import { Split } from '..'
import { Docs } from '@/layout/docs'

export default function () {
  return (
    <Docs
      items={[
        {
          title: 'Split',
          children: (
            <Split
              items={[
                {
                  min: 100,
                  // max: 200,
                  children: (
                    <div
                      style={{
                        minWidth: 100,
                        height: 100,
                        width: '100%',
                        background: '#444',
                      }}
                    />
                  ),
                },
                {
                  min: 100,
                  // max: 200,
                  children: (
                    <div
                      style={{
                        minWidth: 100,
                        height: 100,
                        width: '100%',
                        background: '#444',
                      }}
                    />
                  ),
                },
              ]}
            />
          ),
        },
      ]}
    />
  )
}
