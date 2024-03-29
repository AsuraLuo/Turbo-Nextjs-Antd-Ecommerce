import { FC, useEffect, useState } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

import { StyledWangEditor } from './styled'

interface HackEditorProps {
  value?: string
  toolbarProps?: Partial<IToolbarConfig>
  editorProps?: Partial<IEditorConfig>
  handleChange?: (value: string) => void
}

const HackEditor: FC<HackEditorProps> = ({
  value = '',
  toolbarProps = {},
  editorProps = {},
  handleChange = () => {}
}) => {
  const [editor, setEditor] = useState<IDomEditor | null>(null)
  const [html, setHtml] = useState<string>('')
  const toolbarConfig: Partial<IToolbarConfig> = {
    ...toolbarProps
  }
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
    MENU_CONF: {
      uploadImage: {
        server: '/api/upload-image',
        base64LimitSize: 200 * 1024
      }
    },
    ...editorProps
  }

  const handleEditorChange = (text: IDomEditor) => {
    const content = text.getHtml()
    setHtml(content)
    if (handleChange) handleChange(content)
  }

  useEffect(() => {
    if (editor) setHtml(value)

    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor, value])

  return (
    <StyledWangEditor>
      <Toolbar
        className="wangEditor__toolbar"
        mode="default"
        editor={editor}
        defaultConfig={toolbarConfig}
      />
      <Editor
        className="wangEditor__editor"
        mode="default"
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={handleEditorChange}
      />
    </StyledWangEditor>
  )
}

export default HackEditor
