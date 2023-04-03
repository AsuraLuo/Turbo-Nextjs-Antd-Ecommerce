import { FC } from 'react'
import { Modal as AntdModal, ModalProps } from 'antd'

const OModal: FC<ModalProps> = ({ children, getContainer = false, ...props }) => {
  return (
    <AntdModal getContainer={getContainer} {...props}>
      {children}
    </AntdModal>
  )
}

export default OModal
