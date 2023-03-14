import { FC, Fragment, useState } from 'react'
import { Upload, FormItemProps, UploadProps, UploadFile } from 'antd'
import { RcFile } from 'antd/es/upload'

import Form from '../OForm'
import Modal from '../OModal'
import { formatMessage } from '../OLocale'
import { StyledUploadImage } from './styled'

interface BaseUploadProps extends UploadProps {
  name?: string
  label?: string
  formItemProps?: FormItemProps
}

const OUpload: FC<BaseUploadProps> = ({
  children,
  multiple = true,
  name = '',
  label = formatMessage({ id: 'global.upload' }),
  formItemProps,
  ...props
}) => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [previewTitle, setPreviewTitle] = useState<string>('')

  const handleValueEvent = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  const handleBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error: any) => reject(error)
    })

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await handleBase64(file.originFileObj as RcFile)
    }
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  return (
    <Fragment>
      <Form.Item
        valuePropName="fileList"
        name={name}
        label={label}
        {...formItemProps}
        getValueFromEvent={handleValueEvent}
      >
        <Upload {...props} multiple={multiple} onPreview={handlePreview}>
          {children}
        </Upload>
      </Form.Item>
      <Modal footer={null} open={previewOpen} title={previewTitle} onCancel={handleCancel}>
        <StyledUploadImage>
          <picture>
            <img src={previewImage} alt={previewTitle} />
          </picture>
        </StyledUploadImage>
      </Modal>
    </Fragment>
  )
}

export default OUpload
