import { FC, useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import type { ModalProps } from 'antd/es/modal'
import type { UploadProps } from 'antd/es/upload'

import IButton from '../IButton'
import OModal from '../OModal'
import OUpload from '../OUpload'
import { StyledUploadModal, StyledButtons, StyledUploadNotify } from './styled'

type ModalExcludeType =
  | 'className'
  | 'style'
  | 'destroyOnClose'
  | 'footer'
  | 'getContainer'
  | 'open'
  | 'title'
  | 'onCancel'

type UploadExcludeType = 'className' | 'style' | 'accept' | 'multiple'

export interface IUploadModalProps {
  accept?: string[]
  title?: string
  multiple?: boolean
  reverse?: boolean
  destroyOnClose?: boolean
  uploadText?: string
  uploadNotify?: string
  modalProps?: Omit<ModalProps, ModalExcludeType>
  uploadProps?: Omit<UploadProps, UploadExcludeType>
  handleConfirm?: () => void
}

const IUploadModal: FC<IUploadModalProps> = ({
  accept = ['.xls', '.xlsx'],
  title = '上传文件',
  multiple = false,
  reverse = true,
  destroyOnClose = true,
  uploadText = '将文件拖动到此处或点击上传',
  uploadNotify = '只支持xls, xlsx格式文件!',
  modalProps = {},
  uploadProps = {},
  handleConfirm = () => {}
}) => {
  const [visible, setVisible] = useState<boolean>(true)

  const handleModalOpen = () => {
    setVisible(true)
  }

  const handleModalClose = () => {
    setVisible(false)
  }

  const handleModalConfirm = async () => {
    await handleConfirm()
    await handleModalClose()
  }

  return (
    <StyledUploadModal>
      <IButton type="upload" onClick={handleModalOpen} />
      <OModal
        {...modalProps}
        title={title}
        open={visible}
        destroyOnClose={destroyOnClose}
        footer={
          <StyledButtons reverse={reverse}>
            <IButton type="confirm" onClick={handleModalConfirm} />
            <IButton type="cancel" onClick={handleModalClose} />
          </StyledButtons>
        }
        onCancel={handleModalClose}
      >
        <OUpload.Dragger {...uploadProps} accept={accept.join(',')} multiple={multiple}>
          <p className="upload__drag-icon">
            <InboxOutlined style={{ fontSize: 40 }} />
          </p>
          <p className="upload__drag-text">{uploadText}</p>
        </OUpload.Dragger>
        <StyledUploadNotify>{uploadNotify}</StyledUploadNotify>
      </OModal>
    </StyledUploadModal>
  )
}

export default IUploadModal
