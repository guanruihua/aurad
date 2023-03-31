/* eslint-disable*/
import React, { CSSProperties } from 'react'
import { RightArrow, BottomArrow, BottomRightArrow } from './arrow'
import { isEffectArray } from 'asura-eye'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'

/**
 主色：#862633
 成功：#2FC22F
 失败：#EB2323
 置灰：#DADADA
 */
export type FlowChartNodeStatus = 'operable' | 'finish' | 'error' | 'prohibit'

export type FlowChartNode = {
  status?: FlowChartNodeStatus
  id?: string
  label?: string
  style?: CSSProperties
  link?: string
  series?: {
    // 右箭头
    rightArrow?: boolean
    // 下箭头
    bottomArrow?: boolean
    // 右下箭头
    bottomRightArrow?: boolean

    noArrowDiv?: boolean
    noBiasDiv?: boolean
  }
}

export interface FlowChartProps extends ComponentProps {
  nodes: FlowChartNode[][];
  [key: string]: any
};

export function FlowChart(props: FlowChartProps) {

  const { nodes = [], className, ...rest } = props

  const newStyle = {
    gridTemplateColumns: `${nodes[0].map((item, index) => {
      if (index + 1 === nodes[0].length) return 'auto';
      return 'auto 80px'
    }).filter(Boolean).join(' ')
      }`
  }

  return (
    <div className={classNames('au-flow', className)}
      key={JSON.stringify(nodes)}
      style={newStyle}>

      {nodes.map((row, rowIndex: number) => {
        if (isEffectArray(row))
          return <React.Fragment key={rowIndex}>
            {row.map((item: FlowChartNode, index: number) => {
              const { id, label, style, link, status = 'operable', series = {} } = item
              const { rightArrow = false } = series

              const nid = row[index + 1]?.id
              const showRight = nid && link === nid || rightArrow

              const labelStyle: CSSProperties = { ...style }

              return (<React.Fragment key={index}>
                <div className={classNames({ 'au-flow-item-label': label })} style={labelStyle}>{label}</div>
                <RightArrow style={{
                  display: index + 1 === row.length ? 'none' : 'flex'
                }} size={100} render={showRight} />
              </React.Fragment>)
            })}
            {row.map((item: FlowChartNode, index: number) => {
              const { link, status = 'operable', series = {} } = item
              const { bottomArrow = false, noArrowDiv, noBiasDiv } = series

              const nRowId = nodes[rowIndex + 1] && nodes[rowIndex + 1][index]?.id
              const showBottom = nRowId && nRowId === link || bottomArrow

              return (<React.Fragment key={index}>
                <BottomArrow
                  style={{ height: 30 }}
                  render={showBottom}
                  size={30} />
                <BottomRightArrow style={{ display: index + 1 === row.length ? 'none' : 'flex', height: 30 }} />
              </React.Fragment>)

            })}
          </React.Fragment>
      })}

    </div >
  );
}