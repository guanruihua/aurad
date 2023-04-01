/* eslint-disable*/
import React, { CSSProperties } from 'react'
import { RightArrow, BottomArrow, BottomRightArrow, ArrowProps } from '@/icon'
import { isEffectArray, isUndefined } from 'asura-eye'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import './index.less'

export type FlowChartNodeStatus = 'operable' | 'finish' | 'error' | 'prohibit'
export type FlowFloatCover = ArrowProps

export type FlowChartNode = {
  status?: FlowChartNodeStatus
  id?: string
  label?: string
  style?: CSSProperties
  link?: string | string[]
  width?: number
  // 右箭头
  rightArrow?: boolean
  rightArrowCover?: FlowFloatCover
  // 下箭头
  bottomArrow?: boolean
  bottomArrowCover?: FlowFloatCover
  // 右下箭头
  bottomRightArrow?: boolean
  bottomRightArrowCover?: FlowFloatCover
}

export interface FlowChartProps extends ComponentProps {
  nodeWidth?: number
  columnGap?: number
  rowGap?: number
  nodes: FlowChartNode[][];
  [key: string]: any
};

export function FlowChart(props: FlowChartProps) {

  const { nodeWidth, nodes = [], className, columnGap = 100, rowGap = 30, style, ...rest } = props
  const getGridTemplateColumns = () => {
    return nodes[0].map((item, index) => {
      const { width = nodeWidth } = item
      if (index + 1 === nodes[0].length) return `${isUndefined(width) ? 'auto' : (width + 'px')}`
      return `${isUndefined(width) ? 'auto' : (width + 'px')} ${columnGap}px`
    }).filter(Boolean).join(' ')
  }

  const getGridTemplateRows = () => {
    return nodes.map((item, index) => {
      if (index + 1 === nodes.length) return 'auto';
      return `auto ${rowGap}px`
    }).filter(Boolean).join(' ')
  }

  const newStyle = {
    gridTemplateColumns: getGridTemplateColumns(),
    gridTemplateRows: getGridTemplateRows(),
    ...style
  }

  return (
    <div className={classNames('au-flow', className)}
      style={newStyle}
      {...rest}>

      {nodes.map((row, rowIndex: number) => {
        if (isEffectArray(row))
          return <React.Fragment key={rowIndex}>

            {row.map((item: FlowChartNode, index: number) => {
              const {
                id, label, style, status = 'prohibit',
                rightArrow = false, rightArrowCover = {}
              } = item

              const labelShow = label && id

              return (<React.Fragment key={index}>
                <div className={classNames({
                  'au-flow-item-label': labelShow,
                  [`au-flow-status-${status}`]: labelShow,
                })} style={style}>{label}</div>
                <RightArrow
                  hidden={index + 1 === row.length}
                  size={columnGap}
                  render={rightArrow}
                  {...rightArrowCover}
                />
              </React.Fragment>)
            })}

            {row.map((item: FlowChartNode, index: number) => {
              const {
                id,
                bottomArrow = false, bottomArrowCover = {},
                bottomRightArrow = false, bottomRightArrowCover = {}
              } = item
              if(id === '5'){
                // console.log(item)
              }

              if (rowIndex + 1 === nodes.length) return;

              return (<React.Fragment key={index}>
                <BottomArrow
                  style={{ height: rowGap }}
                  render={bottomArrow}
                  size={rowGap}
                  {...bottomArrowCover} />
                <BottomRightArrow
                  render={bottomRightArrow}
                  hidden={index + 1 === row.length}
                  style={{
                    display: (index + 1 === row.length) ? 'none' : 'flex',
                    height: rowGap,
                  }}
                  {...bottomRightArrowCover}
                />
              </React.Fragment>)
            })}

          </React.Fragment>
      })}

    </div >
  );
}