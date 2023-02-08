import { FC, useState } from 'react'
import { Button } from 'antd'
import ImageUploading, {
  ImageUploadingPropsType,
  ImageListType
} from 'react-images-uploading'

import { StyledImagesUpload } from './styled'

interface BaseImagesUploadProps
  extends Omit<ImageUploadingPropsType, 'value' | 'onChange'> {
  label?: string
}

const BaseImagesUpload: FC<BaseImagesUploadProps> = ({
  label = '',
  maxNumber = 4,
  ...props
}) => {
  const [images, setImages] = useState<ImageListType>([])

  const handleImageChange = (imageList: ImageListType) => {
    setImages(imageList)
  }

  return (
    <StyledImagesUpload>
      <span dangerouslySetInnerHTML={{ __html: label }} />
      <ImageUploading
        multiple
        dataURLKey="data_url"
        {...props}
        value={images}
        maxNumber={maxNumber}
        onChange={handleImageChange}
      >
        {({
          dragProps,
          errors: uploadErrors,
          imageList,
          onImageUpload,
          onImageRemove
        }) => (
          <div className="reviews__drag">
            {imageList.length > 0 && (
              <ul className="reviews__upload">
                {imageList.map((image: any, index: number) => (
                  <li key={`image__${Math.random()}`}>
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${image.data_url})`
                      }}
                    />
                    <Button
                      className="reviews__close"
                      onClick={() => onImageRemove(index)}
                    >
                      <i className="icon icon-remove" />
                    </Button>
                  </li>
                ))}
              </ul>
            )}
            <div>
              <Button
                className="reviews__add"
                onClick={onImageUpload}
                {...dragProps}
              >
                <i className="icon icon-upload" />
              </Button>
            </div>
            {uploadErrors && (
              <div>
                {uploadErrors.maxNumber && (
                  <span>Number of selected images exceed maxNumber</span>
                )}
                {uploadErrors.acceptType && (
                  <span>Your selected file type is not allow</span>
                )}
                {uploadErrors.maxFileSize && (
                  <span>Selected file size exceed maxFileSize</span>
                )}
                {uploadErrors.resolution && (
                  <span>
                    Selected file is not match your desired resolution
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </StyledImagesUpload>
  )
}

export default BaseImagesUpload
