import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'

import { OButton, OI18n } from '@ocloud/ui'
import { actions as appActions } from '@store/app'

import { StyledMenuGrid, StyledMenuItem } from './styled'

const Menus = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const menus: any[] = useSelector((state: any) => state.app.menus)
  const activeMenus: any[] = useSelector((state: any) => state.app.activeMenus)

  const activeMenu = useMemo(() => {
    return activeMenus?.[0] ?? null
  }, [activeMenus])

  const handleMenuClick = (menu: any) => {
    const children: any[] = menu?.children ?? []
    dispatch(appActions.setNavMenus(children))
  }

  const handleRediectHome = () => {
    const result = menus.find((nav: any) => nav.name === 'IT云')
    const navMenus = result?.children ?? []
    dispatch(appActions.setNavMenus(navMenus))
    navigate('/')
  }

  return (
    <StyledMenuGrid>
      <OButton type="link" onClick={handleRediectHome}>
        <OI18n id="global.home" />
      </OButton>
      {menus.map((menu: any) => {
        const { id, name } = menu
        return (
          <StyledMenuItem
            key={id}
            className={clsx({
              active: activeMenu?.id === id
            })}
          >
            <OButton
              type="link"
              onClick={() => {
                handleMenuClick(menu)
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: name }} />
            </OButton>
          </StyledMenuItem>
        )
      })}
    </StyledMenuGrid>
  )
}

export default Menus
