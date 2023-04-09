import React, { useEffect } from "react";
import type { CSSProperties } from 'react';
import * as echarts from 'echarts/core'
import { classNames } from 'harpe'

import type { BarSeriesOption, LineSeriesOption, PieSeriesOption, EffectScatterSeriesOption, MapSeriesOption, LinesSeriesOption } from 'echarts/charts';
import { BarChart, LineChart, PieChart, EffectScatterChart, MapChart, LinesChart, GraphChart } from 'echarts/charts';
import type { TitleComponentOption, TooltipComponentOption, GridComponentOption, DatasetComponentOption, LegendComponentOption, VisualMapComponentOption } from 'echarts/components'
import { TitleComponent, TooltipComponent, GridComponent, DatasetComponent, LegendComponent, VisualMapComponent, DataZoomComponent, TransformComponent } from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
export type ECOption = echarts.ComposeOption<
	| BarSeriesOption
	| LineSeriesOption
	| PieSeriesOption
	| TitleComponentOption
	| TooltipComponentOption
	| GridComponentOption
	| DatasetComponentOption
	| LegendComponentOption
	| EffectScatterSeriesOption
	| MapSeriesOption
	| LinesSeriesOption
	| VisualMapComponentOption
>;

// Register the required components
echarts.use([
	GraphChart,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	BarChart,
	PieChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer,
	LegendComponent,
	EffectScatterChart,
	MapChart,
	LineChart,
	LinesChart,
	VisualMapComponent,
	DataZoomComponent
]);

export interface ChartProps {
	className?: string
	style?: CSSProperties
	options: Record<string, any>
	initCharFn?: (chart: any) => void
	[key: string]: any
}

export function Chart(props: ChartProps) {
	const { className, style, options, initCharFn } = props
	let chartDom: any
	let myChart: any

	useEffect(() => {
		try {
			// console.log(echarts, chartDom, options)
			if (chartDom) {
				//判断是否已存在实例
				myChart = echarts.getInstanceByDom(chartDom);
				if (!myChart) {
					myChart = echarts.init(chartDom)
				}
				//回传实例
				initCharFn && initCharFn(myChart);
				myChart.setOption(options)
				window.addEventListener('resize', function () {
					myChart.resize()
				})
			}
		} catch (error) {
			console.log(error)
		}
	}, [options])

	return (<div
		className={classNames(className)}
		style={style}
		ref={(e: any) => chartDom = e}
	/>)

}
