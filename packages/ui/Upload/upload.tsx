import { FC } from 'react'
import { Upload as AntdUpload, UploadProps } from 'antd'

const Upload: FC<UploadProps> = ({ children, ...props }) => {
  return <AntdUpload {...props}>{children}</AntdUpload>
}

export default Upload
