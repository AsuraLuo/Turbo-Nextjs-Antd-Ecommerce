import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const useSideBar = () => {
  const activeMenus = useSelector((state: any) => state.app.activeMenus)
  const sideMenus = useSelector((state: any) => state.app.sideMenus)
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [sideList, setSideList] = useState<any[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const handleGenerateList = useCallback((menus: any[]) => {
    const result: any[] = menus.reduce((prev: any, next: any) => {
      const { children, id, name, url } = next
      const params: any = {
        key: id,
        label: url ? (
          <Link to={url} title={name}>
            <span dangerouslySetInnerHTML={{ __html: name }} />
          </Link>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: name }} />
        ),
        icon: null,
        title: name
      }

      return [
        ...prev,
        children.length > 0
          ? {
              ...params,
              children: handleGenerateList(children)
            }
          : params
      ]
    }, [])

    return result
  }, [])

  const handleGenerateKeys = useCallback((menus: any[]) => {
    const array: any[] = menus.slice(1, menus.length - 1)
    const activePage: any = array[array.length - 1]
    const result: string[] = array.reduce((prev: any, next: any) => {
      return next && next.children.length > 0 ? [...prev, next.id] : [...prev]
    }, [])
    setOpenKeys([...result])
    if (activePage) setSelectedKeys(activePage.id)
  }, [])

  const handleClickItem = useCallback((values: any) => {
    setSelectedKeys([values.key])
  }, [])

  const handleToggleItem = useCallback((values: any) => {
    setOpenKeys([...values])
  }, [])

  useEffect(() => {
    const result: any[] = handleGenerateList(sideMenus)
    setSideList([...result])
    handleGenerateKeys(activeMenus)
  }, [activeMenus, sideMenus, handleGenerateKeys, handleGenerateList])

  return {
    collapsed,
    openKeys,
    sideList,
    selectedKeys,
    setCollapsed,
    handleClickItem,
    handleToggleItem
  }
}
