import { notification } from 'antd'
import { ArgsProps } from 'antd/es/notification/interface'

const internalNotification = (options: ArgsProps) => {
  return notification.config({
    bottom: 50,
    duration: 3,
    prefixCls: 'ocloud',
    placement: 'bottomRight',
    ...options
  })
}

export default internalNotification
