import Head from 'next/head'
import Link from 'next/link'

import { BaseImagesUpload, Button, I18n } from '@ecommerce/ui'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <Button type="primary">
          <I18n id="global.addToCart" />
        </Button>
        <div>
          <Link href="/cart" title="Jump Cart Page">
            Jump Cart Page
          </Link>
        </div>
        <BaseImagesUpload />
      </div>
    </>
  )
}

export default Home
