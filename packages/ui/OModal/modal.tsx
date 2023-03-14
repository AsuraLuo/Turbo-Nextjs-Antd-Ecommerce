import { FC } from 'react'
import { Modal as AntdModal, ModalProps } from 'antd'

const OModal: FC<ModalProps> = ({ children, ...props }) => {
  return <AntdModal {...props}>{children}</AntdModal>
}

export default OModal
