import { FC } from 'react'
import { Result as AntdResult, ResultProps } from 'antd'

const Result: FC<ResultProps> = ({ children, ...props }) => {
  return <AntdResult {...props}>{children}</AntdResult>
}

export default Result
