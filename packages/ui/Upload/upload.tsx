import { FC, Fragment, useState } from 'react'
import { Upload as AntdUpload, UploadProps, UploadFile } from 'antd'
import { RcFile } from 'antd/es/upload'

import Modal from '../Modal'
import { StyledUploadImage } from './styled'

const Upload: FC<UploadProps> = ({ children, multiple = true, ...props }) => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [previewTitle, setPreviewTitle] = useState<string>('')

  const handleBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await handleBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    )
  }

  return (
    <Fragment>
      <AntdUpload {...props} multiple={multiple} onPreview={handlePreview}>
        {children}
      </AntdUpload>
      <Modal
        footer={null}
        open={previewOpen}
        title={previewTitle}
        onCancel={handleCancel}
      >
        <StyledUploadImage>
          <picture>
            <img src={previewImage} alt={previewTitle} />
          </picture>
        </StyledUploadImage>
      </Modal>
    </Fragment>
  )
}

export default Upload
