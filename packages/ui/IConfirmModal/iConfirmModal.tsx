import { forwardRef, useImperativeHandle, useState } from 'react'
import { Button, Modal } from 'antd'
import type { ButtonProps } from 'antd/es/button'
import type { ModalProps } from 'antd/es/modal'

import { StyledButtons, StyledConfirmModal } from './styled'

type ExcludeType = 'className' | 'style'

type MOdalExcludeType =
  | ExcludeType
  | 'footer'
  | 'open'
  | 'cancelButtonProps'
  | 'cancelText'
  | 'okButtonProps'
  | 'okText'
  | 'onCancel'

export interface IButtonProps extends Omit<ButtonProps, ExcludeType | 'type' | 'onClick'> {}

export interface IModalProps extends Omit<ModalProps, MOdalExcludeType> {
  getContainer?: HTMLElement | false
}

export type IConfirmModalRef = React.Ref<{
  openModal: () => void
  closeModal: () => void
}>

export interface IConfirmModalProps {
  /** 子节点 */
  children?: React.ReactNode
  /** 弹窗标题 */
  title?: string
  /** modal配置属性 */
  modalProps?: Omit<IModalProps, 'title'>
  /** 取消按钮文本 */
  cancelText?: string | React.ReactNode
  /** 取消按钮配置属性 */
  cancelProps?: IButtonProps
  /** 确认按钮文本 */
  confirmText?: string | React.ReactNode
  /** 确认按钮配置属性 */
  confirmProps?: IButtonProps
  /** 取消按钮显示隐藏 */
  showCancel?: boolean
  /** 确认事件回调函数 */
  handleConfirm?: () => void
  /** 取消事件回调函数 */
  handleCancel?: () => void
}

const IConfirmModal = forwardRef((props: Omit<IConfirmModalProps, ExcludeType>, ref) => {
  const {
    children,
    title = '',
    confirmText = '确认',
    confirmProps = {},
    cancelText = '取消',
    cancelProps = {},
    showCancel = true,
    modalProps = {
      centered: true,
      getContainer: false
    },
    handleConfirm = () => {},
    handleCancel = () => {}
  } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleModalConfirm = () => {
    handleConfirm()
  }

  const handleModalCanel = () => {
    handleCancel()
    handleCloseModal()
  }

  useImperativeHandle(ref, () => ({
    openModal: handleOpenModal,
    closeModal: handleCloseModal
  }))

  return (
    <StyledConfirmModal>
      <Modal
        width={276}
        open={isOpen}
        title={title}
        footer={
          <StyledButtons>
            <Button type="primary" {...confirmProps} onClick={handleModalConfirm}>
              <span>{confirmText}</span>
            </Button>
            {showCancel && (
              <Button {...cancelProps} onClick={handleModalCanel}>
                <span>{cancelText}</span>
              </Button>
            )}
          </StyledButtons>
        }
        onCancel={handleCloseModal}
        {...modalProps}
      >
        {children}
      </Modal>
    </StyledConfirmModal>
  )
})

export default IConfirmModal
