import { Upload } from 'antd'

import InternalUpload from './upload'

const { Dragger, LIST_IGNORE } = Upload

type InternalUploadType = typeof InternalUpload
type CompoundedComponent = InternalUploadType & {
  Dragger: typeof Dragger
  LIST_IGNORE: typeof LIST_IGNORE
}

const OUpload = InternalUpload as CompoundedComponent
OUpload.Dragger = Dragger
OUpload.LIST_IGNORE = LIST_IGNORE

export default OUpload
