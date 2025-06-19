import { useSetState } from '0hook'
import { MenuObject } from './type'
import { useNavigate } from 'react-router-dom'

export interface useMenuProps {
  onSelect?(target: MenuObject): void
  // 	/**
  //  * @default true
  //  */
  // fold?: boolean

  // open?: string[]
  // opOpen?(open: string[]):void

  // select?: MenuObject
}

export const useMenu = (props: useMenuProps = {}) => {
  const { onSelect } = props

  const nav = useNavigate()
  const [state, setState] = useSetState<any>(
    {
      fold: false,
      select: {},
      opens: [],
    },
    'au-menu-state',
  )
  const { fold, select, opens } = state

  return {
    onSelect(item: MenuObject) {
      const { id, path = '/' } = item

      setState({
        select: item,
        opens: opens.includes(id)
          ? opens.filter((i: any) => i !== id)
          : [...opens, id],
      })
      !item?.children && nav(path)
    },
    state,
    setState,
  }
}
