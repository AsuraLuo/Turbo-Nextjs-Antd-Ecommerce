import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clsx } from 'clsx'

import { Button, Carousel, Divider } from '@ecommerce/ui'
import { actions as appActions } from '@store/app'

import { StyledNav, StyledNavItem } from './styled'

const Navigation = () => {
  const dispatch = useDispatch()
  const activeMenus: any[] = useSelector((state: any) => state.app.activeMenus)
  const navMenus = useSelector((state: any) => state.app.navMenus)
  const carousel: any = {
    autoplay: false,
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  const activeNav = useMemo(() => {
    return activeMenus?.[1] ?? null
  }, [activeMenus])

  const handleMenuClick = (menu: any) => {
    dispatch(appActions.setSideMenus([{ ...menu }]))
  }

  return (
    <StyledNav>
      {navMenus.length > 0 && (
        <Carousel {...carousel}>
          {navMenus.map((menu: any, index: number) => {
            const { id, name } = menu
            const count: number = navMenus.length
            return (
              <StyledNavItem key={id}>
                <div
                  className={clsx({
                    navigation__item: true,
                    navigation__active: activeNav?.id === id
                  })}
                >
                  <Button
                    type="text"
                    onClick={() => {
                      handleMenuClick(menu)
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: name }} />
                  </Button>
                  {index + 1 < count && <Divider type="vertical" />}
                </div>
              </StyledNavItem>
            )
          })}
        </Carousel>
      )}
    </StyledNav>
  )
}

export default Navigation
