import { FC } from 'react'
import { Upload } from 'antd'
import type { UploadProps } from 'antd/es/upload'

const OUpload: FC<UploadProps<any>> = ({ children, ...props }) => {
  return <Upload {...props}>{children}</Upload>
}

export default OUpload
