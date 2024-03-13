import React from 'react'
import './index.less'

function useWatchScroll(ref: React.RefObject<HTMLDivElement>, watcher: any) {
  const [state, setState] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!ref.current) return
    const dom = ref.current
    if (!dom) return
    console.log('watch start...')
    const cb = () => {
      const clientHeight = dom.clientHeight
      const scrollTop = dom.scrollTop
      const scrollHeight = dom.scrollHeight
      console.log('scroll')
      if (clientHeight + scrollTop === scrollHeight) {
        state === false && setState(true)
        console.log('竖向滚动条已经滚动到底部')
      } else {
        state === true && setState(false)
      }
    }
    dom.addEventListener('scroll', cb)

    return () => {
      dom.removeEventListener('scroll', cb)
    }
  }, [ref.current, watcher])

  return state
}

export default function () {
  const [list, setList] = React.useState<any[]>([])
  const ref = React.useRef<HTMLDivElement>(null)

  const isBottom = useWatchScroll(ref, list.length)

  React.useEffect(() => {
    setList([...list, ...new Array(100).fill({})])
  }, [isBottom])

  React.useEffect(() => {
    setList(new Array(100).fill({}))
  }, [])

  return (
    <div className="demo6" ref={ref}>
      <div className="box">
        {list.map((item, i) => {
          return (
            <div className="item" key={i}>
              {i}
            </div>
          )
        })}
      </div>
    </div>
  )
}
