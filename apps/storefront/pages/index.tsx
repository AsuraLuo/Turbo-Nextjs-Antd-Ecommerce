import Head from 'next/head'
import Link from 'next/link'

import { Button, Input, I18n } from '@ecommerce/ui'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <Button type="primary">
          <I18n id="global.addToCart" />
        </Button>
        <Input />
        <div>
          <Button type="dashed">Dashed</Button>
        </div>
        <div>
          <Link href="/login" title="Jump Login Page">
            Jump Login Page
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
