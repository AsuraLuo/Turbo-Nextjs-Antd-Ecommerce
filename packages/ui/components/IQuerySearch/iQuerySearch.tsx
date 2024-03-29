import { FC } from 'react'
import type { SearchProps } from 'antd/es/input'

import Input from '../OInput'

type ExcludeType = 'className' | 'style' | 'enterButton'

export interface IQuerySearchProps extends Omit<SearchProps, ExcludeType> {
  buttonText?: React.ReactNode
  handleSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
}

const IQuerySearch: FC<IQuerySearchProps> = ({
  allowClear = true,
  buttonText = '查询',
  placeholder = '请输入查询内容',
  handleSearch
}) => {
  return (
    <Input.Search
      allowClear={allowClear}
      placeholder={placeholder}
      enterButton={buttonText}
      onSearch={handleSearch}
    />
  )
}

export default IQuerySearch
