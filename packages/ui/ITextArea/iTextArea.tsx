import { FC } from 'react'
import type { TextAreaProps } from 'antd/es/input'

import OInput from '../OInput'

type ExcludeType = 'className' | 'style' | 'autoSize' | 'size' | 'bordered' | 'prefix' | 'suffix'

export interface ITextAreaProps extends Omit<TextAreaProps, ExcludeType> {
  maxRows?: number
}

const ITextArea: FC<ITextAreaProps> = ({ maxRows = 10, ...props }) => {
  return <OInput.TextArea autoSize={{ minRows: 6, maxRows }} {...props} />
}

export default ITextArea
