import { UFlex } from '@/components/U-View'
import { classNames } from '@/utils'
import cronstrue from 'cronstrue'
import 'cronstrue/locales/es'
import 'cronstrue/locales/zh_CN'
// import 'cronstrue/locales/zh_TW'

export interface UCronViewProps {
  value?: string
  style?: React.CSSProperties
  className?: string
}
/**
 * @title UCronView
 * @param props
 * @returns
 * @refer https://github.com/bradymholt/cronstrue
 */
export const UCronView = (props) => {
  const { value, className, ...rest } = props
  let desc = ''
  try {
    if (value) desc = cronstrue.toString(value, { locale: localStorage.lang === 'zh_CN' ? 'zh_CN' : 'en' })
  } catch (error) {
    console.warn(error)
  }
  return (
    <UFlex className={classNames('u-cron-view', className)} {...rest}>
      {value ? `${desc || ''} ( ${value || ''} )` : '-'}
    </UFlex>
  )
}
