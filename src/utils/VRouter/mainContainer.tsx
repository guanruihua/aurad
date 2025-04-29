import React from 'react'
import { BrowserRouter, useRoutes, RouteObject } from 'react-router-dom'
import type { MenuObject } from '@/layout'
import { ClassNameType } from 'harpe'

export interface BrowserContainer   extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  menu: MenuObject[]
  /**
   * @default '/'
   */
  basename?: string
  location?: Partial<Location> | string
  window?: Window
}

const Content = (props: { routes: MenuObject[] }) => {
  const element = useRoutes(props.routes as RouteObject[])
  return element as React.ReactNode
}

export function BrowserContainer(props: BrowserContainer) {
  const { basename = '/', window: w = window, menu } = props
  return (
    <React.StrictMode>
      <BrowserRouter basename={basename} window={w}>
        <Content routes={menu} />
      </BrowserRouter>
    </React.StrictMode>
  )
}
