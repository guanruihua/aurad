import React from 'react'
import './variable.css'
import './index.less'
import { classNames } from 'harpe'

export function ThemeSwitch() {
  const [night, _setNight] = React.useState(true)
  const root = document.documentElement.classList
  const setClass = (status: boolean) => {
    const hasNight = root?.contains('night-theme')
    const hasLight = root?.contains('light-theme')

    if (status) {
      if (!hasNight) {
        root.add('night-theme')
      }
      if (hasLight) {
        root.remove('light-theme')
      }
    } else {
      if (hasNight) {
        root.remove('night-theme')
      }
      if (!hasLight) {
        root.add('light-theme')
      }
    }
  }
  const setNight = (status: boolean) => {
    // console.log({ status })
    setClass(status)
    if (status === night) return
    _setNight(status)
    localStorage.setItem('theme', status ? 'night' : 'light')
  }

  React.useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'night') {
      setNight(true)
      return
    }
    if (theme === 'light') {
      setNight(false)
      return
    }
    const hasNight = root?.contains('night-theme')
    setNight(hasNight)
  }, [])

  return (
    <div
      className={classNames('au-theme-switch', { night })}
      onClick={() => setNight(!night)}>
      {night ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M-90.24 1.89c-5.56 0-10.09 4.53-10.09 10.09s4.53 10.09 10.09 10.09s10.09-4.53 10.09-10.09s-4.53-10.09-10.09-10.09m5.74 15.51h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m0-2.4h-11.31c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h11.31c.33 0 .6.27.6.6s-.27.6-.6.6m105.69 7.96a.49.49 0 0 0-.57-.09c-1.05.52-2.16.78-3.3.78c-4.14 0-7.5-3.37-7.5-7.5c0-2.38 1.1-4.57 3.03-6.01c.17-.12.19-.34.13-.54s-.29-.35-.49-.36c-.05 0-.11-.01-.16-.01c-5.5 0-9.98 4.48-9.98 9.98s4.48 9.98 9.98 9.98c3.79 0 7.31-2.21 8.97-5.64a.55.55 0 0 0-.11-.59M17.9 5.1l.92-1.76c.02-.04.02-.09-.01-.13s-.08-.06-.12-.05l-1.96.34l-1.39-1.42c-.03-.03-.08-.05-.13-.03c-.05.01-.08.05-.08.1l-.28 1.96l-1.78.88c-.04.02-.07.06-.07.11s.03.09.07.11l1.78.88l.29 1.96c.01.05.04.09.08.1c.01 0 .03.01.04.01c.03 0 .07-.01.09-.04l1.38-1.42l1.96.33c.05.01.09-.01.12-.05s.03-.09.01-.13zm3.2 4.52l.56-1.06c.02-.04.02-.09-.01-.13s-.07-.06-.12-.05l-1.18.2l-.83-.85c-.03-.03-.08-.05-.13-.03c-.05.01-.08.05-.08.1l-.17 1.18l-1.07.53c-.04.02-.07.06-.07.11s.03.09.07.11l1.07.53l.17 1.18c.01.05.04.09.08.1c.01 0 .03.01.04.01c.03 0 .07-.01.09-.04l.83-.86l1.18.2c.05.01.09-.01.12-.05s.03-.09.01-.13zm-4.66 2.77l.56-1.06c.02-.04.02-.09-.01-.13s-.07-.06-.12-.05l-1.18.2l-.83-.85c-.03-.03-.08-.05-.13-.03c-.05.01-.08.05-.08.1l-.17 1.18l-1.07.53c-.04.02-.07.06-.07.11s.03.09.07.11l1.07.53l.17 1.18c.01.05.04.09.08.1c.01 0 .03.01.04.01c.03 0 .07-.01.09-.04l.83-.86l1.18.2c.05.01.09-.01.12-.05s.03-.09.01-.13z'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M7.047 16.953a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m12.73-12.73a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m-2.824 12.73a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 1 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M4.223 4.223a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10'
          />
        </svg>
      )}
    </div>
  )
}
