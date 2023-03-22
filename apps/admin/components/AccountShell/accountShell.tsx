import { FC, memo } from 'react'
import { useFetch } from 'use-http'

import { OLayout } from '@ocloud/ui'

import { useAccountShell } from '@hooks/AccountShell'

import AccountProvider from '@components/AccountProvider'
import Footer from '@components/Footer'
import Header from '@components/Header'
import SideBar from '@components/Sidebar'

import { StyledLayout, StyledMain } from './styled'

const AccountShell: FC<any> = ({ children }) => {
  const { isLogin, menus } = useAccountShell()
  useFetch()

  return isLogin ? (
    <AccountProvider>
      <StyledLayout>
        <OLayout hasSider style={{ minHeight: '100vh' }}>
          <SideBar />
          <OLayout>
            <Header />
            <OLayout.Content>
              {menus.length > 0 && <StyledMain>{children}</StyledMain>}
            </OLayout.Content>
            <Footer />
          </OLayout>
        </OLayout>
      </StyledLayout>
    </AccountProvider>
  ) : (
    <div>{children}</div>
  )
}

export default memo(AccountShell)
