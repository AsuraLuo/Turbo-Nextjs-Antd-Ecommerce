import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { OButton, OForm, OI18n, OInput, IUploadFile } from '@ocloud/ui'

const IWangEditor = dynamic(() => import('@ocloud/ui/IWangEditor'), {
  ssr: false
})

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
        style={{ maxWidth: 600, margin: '5rem auto' }}
        onFinish={handleFormSubmit}
      >
        <Image
          src="https://us.olicdn.com/239decb1f21c4278a1f473da8daa9f70.png"
          alt="Picture of the author"
          width={500}
          height={500}
          priority
        />
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
        <IWangEditor />
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
