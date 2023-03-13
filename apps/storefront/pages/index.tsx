import Head from 'next/head'
import Link from 'next/link'

import { Button, Form, I18n, Input, Upload } from '@ocloud/ui'

import Loader from '@svgs/loader.svg'

const Home = () => {
  const handleFormSubmit = (values: any) => {
    console.info('Received values of form: ', values)
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
        <Link href="/cart">
          <span>Cart</span>
        </Link>
        <Loader />
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Upload
          name="upload"
          label="Upload"
          listType="picture-card"
          formItemProps={{
            rules: [{ required: true }]
          }}
        >
          <div>
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
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
