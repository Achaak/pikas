import { styled } from '@pikas-ui/styles';
import { Slider } from '@pikas-ui/slider';
import * as Cropper from 'react-easy-crop';
import { IconByName } from '@pikas-ui/icons';
import { Button } from '@pikas-ui/button';
import type { ChangeEvent } from 'react';
import { useRef, useState, useCallback, FC } from 'react';
import { getRotatedImage, readFile } from '../utils.js';
import { getOrientation } from 'get-orientation/browser.js';
import { MoonLoader } from '@pikas-ui/loader';

const PictureContainer = styled('div', {
  width: '100%',
  minHeight: 300,
  height: 300,
  position: 'relative',
  backgroundColor: '$black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ImageEmpty = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '$gray-darker',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const InputImage = styled('input', {
  display: 'none',
});

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  rowGap: 16,
});

export type SelectImageDialogContentProps = {
  setImage: (image: string) => void;
  setImageFull: (image: string) => void;
  image?: string;
  imageFull?: string;
  selectImageLabel: string;
  setRotation: (rotate: number) => void;
  rotation: number;
  setCroppedAreaPixels: (area: Cropper.Area) => void;
  maxZoom: number;
  minZoom: number;
  defaultZoom: number;
  aspect: number;
  cropShape: 'rect' | 'round';
  cropSize?: { width: number; height: number };
};

export const SelectImageDialogContent: FC<SelectImageDialogContentProps> = ({
  setImage,
  setImageFull,
  image,
  imageFull,
  setCroppedAreaPixels,
  setRotation,
  selectImageLabel,
  rotation,
  maxZoom,
  minZoom,
  defaultZoom,
  aspect,
  cropShape,
  cropSize,
}) => {
  const inputImage = useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(defaultZoom | minZoom);
  const [loadingImage, setLoadingImage] = useState(false);

  const onCropComplete = useCallback(
    (_croppedArea: Cropper.Area, newCroppedAreaPixels: Cropper.Area) => {
      setCroppedAreaPixels(newCroppedAreaPixels);
    },
    []
  );

  const onFileChange = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    setLoadingImage(true);

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageFull(imageDataUrl);

      // apply rotation if needed
      const orientation: number = await getOrientation(file);
      let newRotation = 0;

      switch (orientation) {
        case 3:
          newRotation = 180;
          break;
        case 6:
          newRotation = -90;
          break;
        case 8:
          newRotation = -270;
          break;

        default:
          break;
      }

      if (newRotation) {
        const getRotatedImageRes = await getRotatedImage(
          imageDataUrl,
          newRotation
        );
        if (getRotatedImageRes) {
          imageDataUrl = getRotatedImageRes;
        }
      }

      setImage(imageDataUrl);
    }

    setLoadingImage(false);
  };

  const handleSelectImage = (): void => {
    inputImage.current?.click();
  };

  return (
    <Container>
      <PictureContainer>
        {imageFull && image ? (
          <Cropper.default
            image={imageFull}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            maxZoom={maxZoom}
            aspect={aspect}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropShape={cropShape}
            cropSize={cropSize}
            minZoom={minZoom}
          />
        ) : (
          <ImageEmpty>
            <IconByName name="bx:image" size={100} colorName="white" />
          </ImageEmpty>
        )}

        {loadingImage ? <MoonLoader size={100} colorName="primary" /> : null}
      </PictureContainer>

      <InputImage
        onChange={(e): void => {
          void onFileChange(e);
        }}
        ref={inputImage}
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
      />

      <Button
        type="button"
        colorName="primary"
        onClick={handleSelectImage}
        width="auto"
      >
        {selectImageLabel}
      </Button>

      <Slider
        label="Zoom"
        step={0.1}
        min={1}
        max={5}
        onChange={(value): void => setZoom(value[0])}
        value={[zoom]}
      />

      <Slider
        label="Rotation"
        step={1}
        min={-180}
        max={180}
        onChange={(value): void => setRotation(value[0])}
        value={[rotation]}
      />
    </Container>
  );
};
