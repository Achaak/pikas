import type { PikasColor } from '@pikas-ui/styles'
import { useCallback, useEffect, useState } from 'react'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { SelectImageDialogContent } from './SelectImageDialogContent/index.js'
import { SelectImageDialogFooter } from './SelectImageDialogFooter/index.js'
import { SelectImageDialogHeader } from './SelectImageDialogHeader/index.js'
import type { CroppedImageType } from './types.js'
import { getCroppedImg } from './utils.js'

export interface SelectImageDialogProps extends DialogProps {
  cancelButtonLabel?: string
  validateButtonLabel?: string
  cancelButtonColorName?: PikasColor
  validateButtonColorName?: PikasColor
  cancelButtonDisabled?: boolean
  validateButtonDisabled?: boolean
  cancelButtonLoading?: boolean
  validateButtonLoading?: boolean
  onCancel?: () => Promise<void> | void
  title?: string
  onValidate?: (b64: string, b64Full: string) => Promise<void>
  defaultImage?: string
  defaultImageFull?: string
  selectImageLabel?: string
  maxZoom?: number
  minZoom?: number
  defaultZoom?: number
  aspect?: number
  cropShape?: 'rect' | 'round'
  cropSize?: { width: number; height: number }
}

export const SelectImageDialog: React.FC<SelectImageDialogProps> = ({
  onClose,
  cancelButtonLabel = 'Cancel',
  validateButtonLabel = 'Validate',
  cancelButtonColorName = 'DANGER',
  validateButtonColorName = 'SUCCESS',
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
  onCancel,
  title = 'Image selection',
  selectImageLabel = 'Select an image',
  onValidate,
  defaultImage,
  defaultImageFull,
  maxZoom = 5,
  minZoom = 1,
  defaultZoom = 1,
  aspect = 1 / 1,
  cropShape = 'rect',
  cropSize,
  ...props
}) => {
  const [image, setImage] = useState<string | undefined>(defaultImage)
  const [imageFull, setImageFull] = useState<string | undefined>(
    defaultImageFull
  )
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<CroppedImageType | null>(null)

  useEffect(() => {
    setImage(defaultImage)
  }, [defaultImage])

  useEffect(() => {
    setImageFull(defaultImageFull)
  }, [defaultImageFull])

  const validateCroppedImage = useCallback(async () => {
    if (!croppedAreaPixels) {
      return
    }
    if (!image) {
      return
    }
    if (!imageFull) {
      return
    }

    try {
      const croppedImage = await getCroppedImg({
        image: imageFull,
        pixelCrop: croppedAreaPixels,
        rotation,
        flip: { horizontal: false, vertical: false },
      })

      if (croppedImage) {
        onValidate?.(croppedImage, imageFull)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [image, croppedAreaPixels, rotation])

  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<SelectImageDialogHeader title={title} />}
      content={
        <SelectImageDialogContent
          setImage={setImage}
          setImageFull={setImageFull}
          image={image}
          imageFull={imageFull}
          selectImageLabel={selectImageLabel}
          setCroppedAreaPixels={setCroppedAreaPixels}
          setRotation={setRotation}
          rotation={rotation}
          aspect={aspect}
          cropShape={cropShape}
          cropSize={cropSize}
          maxZoom={maxZoom}
          minZoom={minZoom}
          defaultZoom={defaultZoom}
        />
      }
      footer={
        <SelectImageDialogFooter
          cancelButtonLabel={cancelButtonLabel}
          validateButtonLabel={validateButtonLabel}
          cancelButtonColorName={cancelButtonColorName}
          validateButtonColorName={validateButtonColorName}
          cancelButtonDisabled={cancelButtonDisabled}
          validateButtonDisabled={validateButtonDisabled}
          cancelButtonLoading={cancelButtonLoading}
          validateButtonLoading={validateButtonLoading}
          onCancel={onCancel}
          onValidate={validateCroppedImage}
          onClose={onClose}
        />
      }
      padding={{
        container: 'md',
        header: 'no-padding',
        content: 'no-padding',
        footer: 'no-padding',
      }}
      gap={{
        container: 'md',
        content: 'md',
        footer: 'md',
        header: 'md',
      }}
      {...props}
    />
  )
}
