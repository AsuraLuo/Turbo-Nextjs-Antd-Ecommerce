import { FC } from 'react'
import { Modal } from 'antd'
import type { ModalProps } from 'antd/es/modal'

const OModal: FC<ModalProps> = ({ children, getContainer = false, ...props }) => {
  return (
    <Modal getContainer={getContainer} {...props}>
      {children}
    </Modal>
  )
}

export default OModal
