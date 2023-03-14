import { FC, memo } from 'react'

import { OLayout } from '@ocloud/ui'
import { useAccountShell } from '@hooks/AccountShell'

import AccountProvider from '@components/AccountProvider'
import Header from '@components/Header'
import Footer from '@components/Footer'
import SideBar from '@components/Sidebar'
import { StyledLayout, StyledMain } from './styled'

const AccountShell: FC<any> = ({ children }) => {
  const { isLogin, menus } = useAccountShell()

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
