import { FC } from 'react'
import { Result } from 'antd'
import type { ResultProps } from 'antd/es/result'

const OResult: FC<ResultProps> = ({ children, ...props }) => {
  return <Result {...props}>{children}</Result>
}

export default OResult
