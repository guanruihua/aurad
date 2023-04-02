/* eslint-disable*/
import React, { useEffect } from 'react'
import { isEffectArray, isEmpty, isString } from 'asura-eye'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import { FlowChartNode } from '../type'
import { draw } from './draw'
import { debounce } from 'abandonjs'
import './index.less'

export interface FlowChartProps extends ComponentProps {
  name: string
  nodeWidth?: number
  columnGap?: number
  rowGap?: number
  nodes: FlowChartNode[];
  [key: string]: any
};


export function FlowChart(props: FlowChartProps) {


  const { name, nodeWidth, nodes = [], count = 5, className, columnGap = 80, rowGap = 30, style, ...rest } = props

  const newStyle = {
    gridTemplateColumns: new Array(count).fill('1fr').join(' '),
    gap: `${rowGap}px ${columnGap}px`,
    ...style
  }
  const id = 'au-flow-chart-' + name

  useEffect(() => {

    draw(props)

    window.addEventListener('resize', debounce(() => {
      draw(props)
    }, 100))

    return () => {
      window.removeEventListener('resize', debounce(() => {
        draw(props)
      }, 100))
    }

  }, [nodes.length])


  return (
    <div
      className={classNames('au-flow-chart', id, className)}
      style={newStyle}
      {...rest}>

      {nodes.map((node, index: number) => {
        const {
          id, label, style, status = 'prohibit', link,
        } = node
        const links: { form: string, to: string }[] = []
        if (!isEmpty(id)) {
          if (isString(link)) links.push({ form: id, to: link })
          if (isEffectArray(link)) link.forEach(li => links.push({ form: id, to: li }))
        }
        const labelShow = label && id

        return (<React.Fragment key={index}>
          <div className={classNames(`au-flow-chart-item-${id}`, {
            'au-flow-chart-item-label': labelShow,
            [`au-flow-chart-status-${status}`]: labelShow,
          })} style={style}>{label}</div>
          {links.map((item, index: number) => {
            const { form, to } = item
            return <div
              style={{
                position: 'absolute',
                width: 0,
              }}
              className={`arrow-${form}-${to}`}
              key={`${form}-${to}` + index}
            >
              <svg style={{ width: '100%', overflow: 'visible' }} >
                <defs>
                  <marker id={"arrow"} markerWidth="10" markerHeight="6" refX="8" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                  </marker>
                </defs>
                <path d={`M0,6 88,6`} stroke="currentColor" strokeWidth="2" fill="none"
                  markerEnd={`url(#arrow)`}
                />
              </svg>
            </div>
          })}
        </React.Fragment>)
      })}

    </div >
  );
}