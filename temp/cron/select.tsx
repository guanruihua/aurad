import React, { RefObject } from 'react'
import Cron from 'qnn-react-cron'
import { language_en_US, language_zh_CN } from './conf'
import './index.less'
import { UCronView, UCronViewProps } from './view'
import { debounce } from 'lodash'

export interface UCronSelectProps {
  value?: string
  onChange?(value: string): void
  style?: React.CSSProperties
  className?: string
  view?: boolean
  viewProps?: UCronViewProps
}
/**
 * @title UCronSelect
 * @param {UCronSelectProps} props
 * @returns
 * @refer https://github.com/wangzongming/qnn-react-cron
 */
export const UCronSelect = (props: UCronSelectProps) => {
  const { value, onChange, view, viewProps = {}, ...rest } = props
  const cronFnsRef: any = React.useRef(undefined)
  // language 为可选参数， 具体配置如下
  const language = localStorage.lang === 'zh_CN' ? language_zh_CN : language_en_US

  if (view) {
    return <UCronView value={value} {...viewProps} />
  }

  return (
    <div
      // key={value}
      className='u-cron-select'
      {...rest}>
      <Cron.Provider
        value={{
          // Minimum optional year    最小可选择的年份
          minYear: new Date().getFullYear(),
          // Maximum optional year   最大可选择的年份
          maxYear: new Date().getFullYear() + 60,
          // language   国际化语言配置
          language
        }}>
        <Cron
          value={value}
          // value='* * * * * ? *'
          // 配置面板的隐藏, false 即隐藏
          // Configuration panel hiding
          panesShow={{
            second: true,
            minute: true,
            hour: true,
            day: true,
            month: true,
            week: true,
            year: true
          }}
          // 默认显示哪个面板, 默认为有值且未隐藏的第一个面板 或者 第一个未被隐藏的面板， 设置后将不会自动跳转到有值的面板，而是定死默认显示某个面板
          // Which panel is displayed by default. The default is the first panel that has a value and is not hidden or the first panel that is not hidden. After setting this parameter, the system does not automatically jump to the panel that has a value
          defaultTab={'second'}
          // 未自定义底部按钮时，用户点击确认按钮后的回调
          // The bottom button is not customized when the user clicks the confirm button after the callback
          // onOk={(value) => {
          //   console.log('cron:', value)
          // }}
          // 相当于 ref
          // equivalent to ref
          // getCronFns={debounce((fns) => {
          getCronFns={(fns) => {
            // 获取值方法
            // fns.getValue: () => string

            // 解析Cron表达式到UI 调用该方法才可以重新渲染 【一般不使用】(value值改变后组件会自动更新渲染)
            // fns.onParse: () j=> Promise().then(()=>void).catch(()=>()=>void),
            cronFnsRef.current = fns
            // const newValue = fns?.getValue() || '* * * * * ? *'
            // if (newValue === value) {
            //   return
            // }
            // onChange && onChange(newValue)
            // console.log('value:', newValue)
          }}
          // }, 300)}
          footer={[]}
          // 自定义底部按钮后需要自行调用方法来或者值
          // After customizing the bottom button, you need to call the method or value
          // footer={[
          //   //默认值
          //   <Button key='1' style={{ marginRight: 10 }} onClick={() => cronFnsRef.current.onParse('* * * * * ? *')}>
          //     解析到UI
          //   </Button>,
          //   <Button key='2' type='primary' onClick={() => console.log(cronFnsRef.current.getValue())}>
          //     生成
          //   </Button>
          // ]}
          // onChange 事件，当值改变时触发
          // onChange event, triggered when the value changes
          // @param type = "second" | "minute" | "hour" | "day" | "month" | "week" | "year"
          // @param value = string
          // onChange={({ type, value }) => {
          onChange={() => {
            // console.log(type, value)
            const newValue = cronFnsRef?.current?.getValue() || '* * * * * ? *'
            if (newValue === value) {
              return
            }
            onChange && onChange(newValue)
          }}
        />
      </Cron.Provider>
    </div>
  )
}
