import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { isEmpty } from 'asura-eye'
import { classNames } from 'harpe'
import { stringify } from 'abandonjs'
import { SubMenu, type MenuObject, Icon, ThemeSwitch, useMenu } from '../src'
import './home.less'

export function move() {
  const mainDom = document.querySelector('.au-main')
  const contentDom = document.querySelector('.au-content-move-border')

  if (isEmpty(contentDom) || isEmpty(mainDom)) return

  function onMouseMove(e: DragEvent) {
    e.preventDefault && e.preventDefault()
    e.dataTransfer?.effectAllowed && (e.dataTransfer.effectAllowed = 'move')
    e.dataTransfer?.dropEffect && (e.dataTransfer.dropEffect = 'move')
    if (isEmpty(mainDom)) return
    const asideWidth = e.clientX > 100 ? e.clientX : 100
    mainDom.setAttribute('style', `grid-tempLate-columns:${asideWidth}px 1fr;`)
    localStorage.setItem('au-aside-menu-width', String(asideWidth))
  }

  contentDom.addEventListener('dragend', onMouseMove)
}

export interface MenuProps {
  menu: MenuObject[]
  /**
   * @default true
   */
  fold?: boolean
}

export function Menu(props: MenuProps) {
  const { menu: originMenu = [], ...rest } = props
  const getMenu = () => originMenu[0].children || []

  const menu = getMenu()
  const menuHook = useMenu()
  const { state, setState } = menuHook
  const { fold = false } = state

  const asideWidth = localStorage.getItem('au-aside-menu-width') || 250

  const hasASide = menu && menu.length > 0

  useEffect(() => {
    move()
  }, [hasASide])

  const newStyle = hasASide
    ? fold
      ? { gridTemplateColumns: `0 1fr` }
      : {
          gridTemplateColumns: `${asideWidth ? asideWidth + 'px' : '10vw'} 1fr`,
        }
    : { gridTemplateColumns: `1fr` }

  function onMouseCur(e: React.DragEvent<HTMLElement>) {
    e.preventDefault && e.preventDefault()
    e.stopPropagation()
    e.dataTransfer?.effectAllowed && (e.dataTransfer.effectAllowed = 'move')
    e.dataTransfer?.dropEffect && (e.dataTransfer.dropEffect = 'move')
  }

  return (
    <div className={classNames('au-main', { fold })} style={{
       gridTemplateColumns: hasASide? (fold?`0 1fr`: `${asideWidth ? asideWidth + 'px' : '10vw'} 1fr`): `1fr` ,
    }}>
      {hasASide && (
        <SubMenu
          onDragEnter={onMouseCur}
          onDragOver={onMouseCur}
          hook={menuHook}
          menu={menu}
          {...rest}
        />
      )}

      <div className='au-content'>
        <div className={classNames('au-header', { fold })}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {hasASide && (
              <button
                onClick={() => {
                  setState({ fold: !fold })
                }}>
                <Icon type={fold ? 'fold' : 'unFold'} size={32} />
              </button>
            )}
            <button
              onClick={() => {
                menuHook.onSelect({ path: '/', name: 'home' })
              }}>
              <Icon type='home' size={24} />
            </button>
            <ThemeSwitch />
          </div>
          <h2 key={stringify(state.select)}>{state?.select?.name}</h2>
        </div>
        {hasASide && (
          <div
            className='au-content-move-border'
            onDragEnter={onMouseCur}
            onDragOver={onMouseCur}
            draggable={!fold}
          />
        )}
        <div
          className='au-content-container'
          onDragEnter={onMouseCur}
          onDragOver={onMouseCur}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
