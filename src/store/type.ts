export type Store = {
  [key: string]: any
}

export type Stores = {
  [key: string]: Store
}
// 定义一个Provider组件，用于将store注入到React Context中
export type ProviderProps = {
  stores: Stores
}
