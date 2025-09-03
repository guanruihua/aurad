import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface BodyPortalProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties
}

function styleToString(style: React.CSSProperties): string {
  return Object.entries(style)
    .map(([key, value]) => `${kebabCase(key)}: ${value};`)
    .join(' ');
}

// 辅助函数：驼峰转连字符（如 backgroundColor → background-color）
function kebabCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

export function BodyPortal(props: BodyPortalProps) {
  const { children, className, style } = props
  const el = document.createElement('div')
  if(className) el.className = className
  if(style) el.style.cssText = styleToString(style)

  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  }, [el])

  return createPortal(children, el)
}
