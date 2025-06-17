import React from 'react'
import { ObjectType } from '0type'
import { echarts } from './core'
import { classNames } from 'harpe'

export { echarts }

export type ChartProps = {
  className?: string
  options: ObjectType
  initCharFn?: (chart: any) => void
  [key: string]: any
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'>

export function Chart(props: ChartProps) {
  const { className, style, options, initCharFn, ...rest } = props
  let chartDom: any
  let myChart: any

  React.useEffect(() => {
    try {
      // console.log(echarts, chartDom, options)
      if (chartDom) {
        //判断是否已存在实例
        myChart = echarts.getInstanceByDom(chartDom)
        if (!myChart) {
          myChart = echarts.init(chartDom)
        }
        //回传实例
        initCharFn && initCharFn(myChart)
        myChart.setOption(options)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      }
    } catch (error) {
      console.log(error)
    }
  }, [options])

  return (
    <div
      className={classNames(className)}
      style={style}
      ref={(e: any) => (chartDom = e)}
      {...rest}
    />
  )
}
