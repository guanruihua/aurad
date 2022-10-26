import React from 'react'
import { RouteObject } from 'react-router-dom'
import { ButtonPage } from './button'
import { Demo1 } from './demo'
import { DetailPage } from './detail'
import { DialogPage } from './dialog'
import { ProgressPage } from './progress'
import { RichTextPage } from './RichText'
import { SelectPage } from './select'
import { TextAreaPage } from './textarea'
import { VirtualListPage } from './virtualList'

interface _MenuObject extends Record<string, any> {
	name?: string
}

export type MenuObject = RouteObject & _MenuObject

export const menu: MenuObject[] = [{
	name: '虚拟列表',
	path: '/vrList',
	element: <VirtualListPage />
},
{
	path: '/datail',
	element: <DetailPage />
},
{
	path: '/progress',
	element: <ProgressPage />
},
{
	path: '/',
	element: <Demo1 />
},
{
	path: '/button',
	element: <ButtonPage />
},
{
	path: '/select',
	element: <SelectPage />
},
{
	path: '/RichText',
	element: <RichTextPage />
},
{
	path: '/textarea',
	element: <TextAreaPage />
},
{
	path: '/dialog',
	element: <DialogPage />
}]


export const routers: RouteObject[] = Array.from(menu, (item: MenuObject) => ({ path: item.path, element: item.element }))

