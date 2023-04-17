import { FC } from 'react'
import { Upload, UploadProps } from 'antd'

const OUpload: FC<UploadProps<any>> = ({ children, ...props }) => {
  return <Upload {...props}>{children}</Upload>
}

export default OUpload
