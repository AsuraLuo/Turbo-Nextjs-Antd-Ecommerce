import { FC } from 'react'
import { Modal as AntdModal, ModalProps } from 'antd'

const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return <AntdModal {...props}>{children}</AntdModal>
}

export default Modal
