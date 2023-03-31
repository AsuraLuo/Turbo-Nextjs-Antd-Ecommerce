import { FC, useState } from 'react'
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

export interface IButtonProps extends Omit<ButtonProps, ExcludeType | 'onClick'> {}

export interface IModalProps extends Omit<ModalProps, MOdalExcludeType> {
  getContainer?: HTMLElement | false
}

export interface IConfirmModalProps {
  /** 按钮排列方向 */
  reverse?: boolean
  /** modal配置属性 */
  modalProps?: IModalProps
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
  /** 触发按钮文本 */
  triggerText?: string | React.ReactNode
  /** 触发按钮配置属性 */
  triggerProps?: IButtonProps
  /** 确认事件回调函数 */
  handleConfirm?: () => void
  /** 取消事件回调函数 */
  handleCancel?: () => void
}

const IConfirmModal: FC<React.PropsWithChildren<Omit<IConfirmModalProps, ExcludeType>>> = ({
  children,
  reverse = false,
  confirmText = '确认',
  confirmProps = {},
  cancelText = '取消',
  cancelProps = {},
  showCancel = true,
  triggerText = '触发',
  triggerProps = {},
  modalProps = {
    centered: true,
    getContainer: false
  },
  handleConfirm = () => {},
  handleCancel = () => {}
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleModalConfirm = () => {
    handleConfirm()
    if (!showCancel) handleCloseModal()
  }

  const handleModalCanel = () => {
    handleCancel()
    handleCloseModal()
  }

  return (
    <StyledConfirmModal>
      <Button {...triggerProps} onClick={handleOpenModal}>
        <span>{triggerText}</span>
      </Button>
      <Modal
        open={isOpen}
        footer={
          <StyledButtons reverse={reverse}>
            <Button {...confirmProps} onClick={handleModalConfirm}>
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
}

export default IConfirmModal
