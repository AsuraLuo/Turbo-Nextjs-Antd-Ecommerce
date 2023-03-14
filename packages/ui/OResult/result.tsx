import { FC } from 'react'
import { Result, ResultProps } from 'antd'

const OResult: FC<ResultProps> = ({ children, ...props }) => {
  return <Result {...props}>{children}</Result>
}

export default OResult
