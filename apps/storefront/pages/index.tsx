import Head from 'next/head'
import Link from 'next/link'

import { OButton, OForm, OI18n, OInput, IUploadFile } from '@ocloud/ui'

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
      <OForm
        layout="vertical"
        autoComplete="off"
        style={{ maxWidth: 600, margin: '5rem auto' }}
        onFinish={handleFormSubmit}
      >
        <Link href="/cart">
          <span>Cart</span>
        </Link>
        <Loader />
        <OForm.Item name="name" label="Name" rules={[{ required: true }]}>
          <OInput />
        </OForm.Item>
        <IUploadFile
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
        </IUploadFile>
        <OForm.Item>
          <OButton type="primary" htmlType="submit">
            <OI18n id="global.submit" />
          </OButton>
        </OForm.Item>
      </OForm>
    </>
  )
}

export default Home
