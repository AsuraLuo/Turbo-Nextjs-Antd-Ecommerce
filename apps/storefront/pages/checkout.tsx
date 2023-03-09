import Head from 'next/head'

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <p>Checkout</p>
    </>
  )
}

Checkout.getInitialProps = async ({ res }) => {
  res.writeHead(302, { Location: '/cart' })
  res.end()

  return {}
}

export default Checkout
