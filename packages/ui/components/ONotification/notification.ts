import { notification } from 'antd'
import type { ArgsProps } from 'antd/es/notification/interface'

const ONotification = (options: ArgsProps) => {
  return notification.config({
    bottom: 50,
    duration: 3,
    prefixCls: 'ocloud',
    placement: 'bottomRight',
    ...options
  })
}

export default ONotification
