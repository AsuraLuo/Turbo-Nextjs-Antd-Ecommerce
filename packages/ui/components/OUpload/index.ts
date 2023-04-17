import { Upload } from 'antd'

import InternalUpload from './upload'

const { Dragger } = Upload

type InternalUploadType = typeof InternalUpload
type CompoundedComponent = InternalUploadType & {
  Dragger: typeof Dragger
}

const OUpload = InternalUpload as CompoundedComponent
OUpload.Dragger = Dragger

export default OUpload
