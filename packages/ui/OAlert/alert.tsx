import { FC } from 'react'
import { Alert as AntdAlert, AlertProps } from 'antd'

const Alert: FC<AlertProps> = ({ ...props }) => {
  return <AntdAlert {...props} />
}

export default Alert
