import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const CustomPortal = () => {
  const [container, setContainer] = useState<any>(null)
  
  useEffect(() => {
    // 创建一个新的 div 元素
    const newContainer = document.createElement('div')
    // 将新的 div 元素添加到 body 节点上
    document.body.appendChild(newContainer)
    // 设置状态
    setContainer(newContainer)
    // 组件卸载时，从 body 节点上移除 div 元素
    return () => {
      document.body.removeChild(newContainer)
    }
  }, [])

  // 使用 createPortal() 将子元素插入到新的 div 元素中
  return container
    ? ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: '20px', left: '20px' }}>
          这个元素被插入到 body 节点上。
        </div>,
        container
      )
    : null
}