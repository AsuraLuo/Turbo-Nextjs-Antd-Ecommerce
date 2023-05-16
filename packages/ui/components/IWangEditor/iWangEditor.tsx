import { FC } from 'react'
import loadable from '@loadable/component'
import type { IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

interface HackEditorProps {
  value?: string
  toolbarProps?: Partial<IToolbarConfig>
  editorProps?: Partial<IEditorConfig>
  handleChange?: (value: string) => void
}

const HackEditor = loadable(() => import('./hackEditor'))

const IWangEditor: FC<HackEditorProps> = ({ ...props }) => {
  return <HackEditor {...props} />
}

export default IWangEditor
