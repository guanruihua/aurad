/* eslint-disable*/
import React, { CSSProperties } from 'react'
import { RightArrow, BottomArrow } from './arrow'
import { isEffectArray, isUndefined } from 'asura-eye';
import './index.less'

type Node = {
  id?: string
  label?: string
  style?: CSSProperties
  link?: string
}

type FlowChartProps = {
  nodes: Node[][];
  [key: string]: any
};

export function FlowChart(props: FlowChartProps) {

  const { nodes = [] } = props


  const newStyle = {
    gridTemplateColumns: `${nodes[0].map((item, index) => {
      if (index + 1 === nodes[0].length) return '1fr';
      return '1fr 80px'
    }).filter(Boolean).join(' ')
      }`
  }


  return (
    <div className='au-flow'
      key={JSON.stringify(nodes)}
      style={newStyle}>

      {nodes.map((row, rowIndex: number) => {
        if (isEffectArray(row))
          return <React.Fragment key={rowIndex}>
            {row.map((item: Node, index: number) => {
              const { id, label, style, link } = item

              const nid = row[index + 1]?.id
              const showRight = nid && link === nid

              const nRowId = nodes[rowIndex + 1] && nodes[rowIndex + 1][index]?.id
              const showBottom = nRowId && nRowId === link

              const newStyle = { ...style }
              if (showRight === false) {
                newStyle['marginRight'] = 80
              }
              if (isUndefined(id)) {
                newStyle['border'] = 'none'
              }

              return (<React.Fragment key={index}>
                <div
                  className='au-flow-item'
                  style={newStyle}
                >
                  {label}
                  <div
                    className='bottom-arrow'
                    style={{
                      height: 30,
                      bottom: -30,
                    }}  >
                    {showBottom && <BottomArrow height={30} />}
                  </div>
                </div>
                <div className='right-arrow' style={{
                  display: index + 1 === row.length ? 'none' : 'block'
                }}  >
                  {showRight && <RightArrow width={80} />}
                </div>

              </React.Fragment>)
            })}
          </React.Fragment>
      })}
    </div >
  );
}