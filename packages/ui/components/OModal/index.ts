import { Modal } from 'antd'

import InternalModal from './modal'

const { info, success, error, warning, confirm, config, useModal, destroyAll } = Modal

type InternalModalType = typeof InternalModal
type CompoundedComponent = InternalModalType & {
  info: typeof info
  success: typeof success
  error: typeof error
  warning: typeof warning
  confirm: typeof confirm
  config: typeof config
  useModal: typeof useModal
  destroyAll: typeof destroyAll
}

const OModal = InternalModal as CompoundedComponent
OModal.info = info
OModal.success = success
OModal.error = error
OModal.warning = warning
OModal.confirm = confirm
OModal.config = config
OModal.useModal = useModal
OModal.destroyAll = destroyAll

export default OModal
