import React from 'react'
import { ObjectType } from '0type'
import { echarts } from './core'
import { classNames } from 'harpe'
import { debounce } from 'abandonjs'

export { echarts }

export type ChartProps = {
  className?: string
  options: ObjectType
  /**
   * @deprecated
   * @use init
   * @param chart
   * @returns
   */
  initCharFn?: (chart: any) => void
  init?: (chart: any) => void
  [key: string]: any
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'>

export function Chart(props: ChartProps) {
  const { className, style, options, init, initCharFn, ...rest } = props
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
        if (init) init(myChart)
        else if (initCharFn) initCharFn(myChart)

        myChart.setOption(options)
        const resize = debounce(function () {
          myChart.resize()
        }, 100)

        window.addEventListener('resize', resize)
        return () => {
          window.removeEventListener('resize', resize)
        }
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
