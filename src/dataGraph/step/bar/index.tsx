import React from 'react'
import './index.less'

export interface StepBarProps {
  value?: number
  items?: {
    value: number
    label?: React.ReactNode
    [key: string]: any
  }[]
}

export function StepBar(props: StepBarProps) {
  const { value = 0, items } = props
  const box = {
    width: 800,
    itemWidth: 32,
    max: 2000,
    gap: 10,
  }

  const boxStyle: React.CSSProperties = {
    width: box.width,
    height: 200,
    '--itemWidth': box.itemWidth + 'px',
  } as React.CSSProperties

  const defaultVal = 460
  const [nowVal, setNowVal] = React.useState<number>(defaultVal)
  const [nowRate, setNowRate] = React.useState<number>(defaultVal / box.max)
  const addItem = (val: number) => {
    setNowVal((v) => Math.max(Math.min(v + val, box.max), 0))
    setNowRate((v) => Math.max(Math.min(v + val / box.max, 1), 0))
  }
  const add = (val: number) => {
    let count = 1
    const timer = setInterval(() => {
      addItem(val / box.gap)
      if (count++ >= box.gap) {
        clearInterval(timer)
      }
    }, 30)
  }
  return (
    <div className='au-step-bar'>
      <div className='content'>
        <div className='box' style={boxStyle}>
          <div className='progress'>
            <div className='progressBar' style={{ width: nowRate * 100 + '%' }}>
              <div className='nowVal'>{nowVal}</div>
            </div>
            <div className='progressBar-default'></div>
          </div>
          {items?.map((item, i) => {
            const rate = (item.value || 0) / 2000
            let left = rate * box.width - box.itemWidth / 2

            const newStyle: React.CSSProperties = {
              left: Math.max(left, -box.itemWidth / 2),
            }
            if (Math.abs(nowVal - item.value) <= box.itemWidth) {
              const itemRate =
                Math.abs(nowVal - item.value + box.itemWidth) /
                (box.itemWidth / 2)
              console.log(itemRate)
              newStyle.background = `linear-gradient(to right, #648fcc 0%, #648fcc ${
                itemRate * 100
              }%, #ededed ${itemRate * 100}%)`
            }

            return (
              <div
                className={`item${nowVal >= item.value ? ' isActive' : ''}`}
                key={i}
                style={newStyle}>
                <div />
                {/* {i > 0 ? <div></div> : <div></div>} */}
                <div className='value'>
                  {i > 0 ? <div>{item.label}</div> : <div></div>}
                  {i > 0 ? <div>{item.value}</div> : <div></div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
