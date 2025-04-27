import { isEmpty } from 'asura-eye'

export const prefixHoc = (prefix: string) => (name?: string) =>
  `${prefix}${isEmpty(name) ? '' : '-' + name}`

export const getGPUInfo = () => {
  const getRendererText = () => {
    try {
      const canvas = document.createElement('canvas')
      const gl: any =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

      if (!gl) {
        return 'Unknown'
      }

      const gpuInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (!gpuInfo) {
        return 'Unknown'
      }

      const renderer = gl.getParameter(gpuInfo.UNMASKED_RENDERER_WEBGL)
      return renderer || 'Unknown'
    } catch (error) {
      return 'Unknown'
    }
  }

  const EM = (e: any) => {
    let t = [],
      n = e.split('')
    for (let r = 0; r < n.length; r++)
      if (n[r] === '(') t.push(r)
      else if (n[r] === ')') {
        let i = t.pop()
        i !== void 0 && (n.splice(i, r - i + 1), (r = i - 1))
      }
    return n.join('')
  }

  const El = (e: any) => {
    return EM(e)
      .replace(/\/PCIe\/SSE2/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  }

  // 获取 GPU 信息
  const getGpuText = (renderText: any) => {
    try {
      if (/, or similar$/.test(renderText)) return 'Unknown'
      if (/SwiftShader/.test(renderText)) return 'Unknown'
      if (/^ANGLE/.test(renderText)) {
        let t = renderText.match(/\((.+)\)$/)[1],
          n = t.split(/,\s*/g),
          [_, info] = n

        if (/^ANGLE Metal Renderer: /.test(info)) {
          info = renderText.split(': ')[1].split(',')[0]
        }

        if (n.length === 1) {
          info = n[0].split(' ').slice(1).join(' ')
        }

        // 如果 i 包含 "Direct3D"，则将 i 重置为相应的值
        if (/Direct3D/.test(info)) {
          info = info.split('Direct3D')[0].trim()
        }
        return info
      }
    } catch (err) {
      console.log('err: ', err)
    }
    return El(renderText)
  }

  const rendererText = getRendererText()
  const gpuText = getGpuText(rendererText)
  // console.log('rendererText: ', rendererText)
  // console.log('gpuText: ', gpuText)
  return gpuText
}
