import Head from 'next/head'

import { Button, Form, I18n, Input, Upload } from '@ecommerce/ui'

const Home = () => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

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
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
        >
          <Upload listType="picture-card">
            <div>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
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
