import { message } from 'antd'
import { ArgsProps } from 'antd/es/message'

const internalMessage = (options: ArgsProps) => {
  return message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
    rtl: true,
    prefixCls: 'my-message',
    ...options
  })
}

export default internalMessage
