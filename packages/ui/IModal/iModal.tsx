import { useImperativeHandle, useState } from 'react'
import { ModalProps } from 'antd/es/modal'

import OModal from '../OModal'
import { StyledIModal } from './styled'

export type IModalRef = React.Ref<{
  openModal: () => void
  closeModal: () => void
}>

export interface IModalProps extends Omit<ModalProps, 'open' | 'footer' | 'onCancel'> {}

const IModal = (props: IModalProps, ref: IModalRef) => {
  const { children, title, ...modalProps } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  useImperativeHandle(ref, () => ({
    openModal: handleOpenModal,
    closeModal: handleCloseModal
  }))

  return (
    <StyledIModal>
      <OModal open={isOpen} title={title} onCancel={handleCloseModal} {...modalProps}>
        {children}
      </OModal>
    </StyledIModal>
  )
}

export default IModal
