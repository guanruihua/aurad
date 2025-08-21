import React from 'react'
export const useTheme = () => {
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

  return {
    night,
    setNight,
  }
}
