import { message } from 'antd'
import { ArgsProps } from 'antd/es/message'

const OMessage = (options: ArgsProps) => {
  return message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
    rtl: true,
    prefixCls: 'ocloud',
    ...options
  })
}

export default OMessage
