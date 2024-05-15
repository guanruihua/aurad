import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url'
import { switchTSConfig } from './env/tsconfig/index'
switchTSConfig('npm')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function resolve(str) {
  return path.resolve(__dirname, str)
}

export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger']
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('../src')
    }
  },
  build: {
    sourcemap: true,
    // 打包输出的目录
    outDir: resolve('../dist'),
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    cssTarget: 'chrome61',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('../src/index.ts'),
      // 组件库名称
      name: 'aurad',
      // 文件名称, 打包结果举例: my-packages.umd.cjs
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom'
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      // rollupTypes: true,
      // lib: ["es2016", "dom"],
      entryRoot: resolve('../src'),
      outDir: [resolve('../dist')],
      rollupTypes: true,
      // logLevel: 'warn',
      // pathsToAliases: true,
      paths: {
        '@/*': ['./src/*']
        // '@': [resolve('../src')]
      },
      // outputDir: ["../easyest/es/src", "../easyest/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      // tsConfigFilePath: './tsconfig.json'
      // tsconfigPath: './tsconfig.npm.json'
      tsconfigPath: resolve('../tsconfig.json')
    }),
    typescript({
      target: 'ESNext',
      lib: ['ESNext', 'dom'],
      rootDir: resolve('../src'),
      declaration: true,
      declarationDir: resolve('../dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
      paths: {
        // '@/*': ['../src/*']
        '@/*': ['./src/*']
        // '@': resolve('../src')
      }
    })
  ]
})
