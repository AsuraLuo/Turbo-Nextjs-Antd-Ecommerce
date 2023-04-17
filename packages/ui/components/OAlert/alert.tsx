import { FC } from 'react'
import { Alert, AlertProps } from 'antd'

const OAlert: FC<AlertProps> = ({ ...props }) => {
  return <Alert {...props} />
}

export default OAlert
