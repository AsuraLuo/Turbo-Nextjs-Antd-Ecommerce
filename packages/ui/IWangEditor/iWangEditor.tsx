import { FC, lazy } from 'react'
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

interface HackEditorProps {
  value?: string
  toolbarProps?: Partial<IToolbarConfig>
  editorProps?: Partial<IEditorConfig>
  handleChange?: (value: string) => void
}

const HackEditor = lazy(() => import('./hackEditor'))

const IWangEditor: FC<HackEditorProps> = ({ ...props }) => {
  return <HackEditor {...props} />
}

export default IWangEditor
