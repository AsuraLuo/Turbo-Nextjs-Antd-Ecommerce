import Head from 'next/head'

import { BaseImagesUpload, Button, Form, I18n, Input } from '@ecommerce/ui'

const Home = () => {
  const handleFormSubmit = (values: any) => {
    console.info(values)
  }

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Form
        layout="vertical"
        autoComplete="off"
        style={{ maxWidth: 600, margin: '5rem auto' }}
        onFinish={handleFormSubmit}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <BaseImagesUpload />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            <I18n id="global.submit" />
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Home
