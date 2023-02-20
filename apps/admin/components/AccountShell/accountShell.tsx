import { FC, memo } from 'react'

import { Content, Layout } from '@ecommerce/ui'
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
        <Layout hasSider style={{ minHeight: '100vh' }}>
          <SideBar />
          <Layout>
            <Header />
            <Content>
              {menus.length > 0 && <StyledMain>{children}</StyledMain>}
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </StyledLayout>
    </AccountProvider>
  ) : (
    <div>{children}</div>
  )
}

export default memo(AccountShell)
