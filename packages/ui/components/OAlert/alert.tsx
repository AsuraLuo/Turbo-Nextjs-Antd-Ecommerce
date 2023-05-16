import { FC } from 'react'
import { Alert } from 'antd'
import type { AlertProps } from 'antd/es/alert'

const OAlert: FC<AlertProps> = ({ ...props }) => {
  return <Alert {...props} />
}

export default OAlert
