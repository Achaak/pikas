import Compressor from 'compressorjs';
import type { CroppedImageType } from './types.js';

export const createImage = async (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

export const getRadianAngle = (degreeValue: number): number =>
  (degreeValue * Math.PI) / 180;

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export const rotateSize = (
  width: number,
  height: number,
  rotation: number
): { width: number; height: number } => {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
};

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export const getCroppedImg = async ({
  flip,
  image,
  pixelCrop,
  rotation,
}: {
  image: string;
  pixelCrop: CroppedImageType;
  rotation: number;
  flip: { horizontal: boolean; vertical: boolean };
}): Promise<string | null> => {
  const imageCreated = await createImage(image);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    imageCreated.width,
    imageCreated.height,
    rotation
  );

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-imageCreated.width / 2, -imageCreated.height / 2);

  // draw rotated image
  ctx.drawImage(imageCreated, 0, 0);

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  );

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image at the top left corner
  ctx.putImageData(data, 0, 0);

  // As Base64 string
  return canvas.toDataURL('image/jpeg');

  // As a blob
  // return new Promise((resolve, reject) => {
  //   canvas.toBlob((file) => {
  //     resolve(URL.createObjectURL(file))
  //   }, 'image/jpeg')
  // })
};

export const getRotatedImage = async (
  image: string,
  rotation = 0
): Promise<string | undefined> => {
  const imageCreated = await createImage(image);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return;
  }

  const orientationChanged =
    rotation === 90 ||
    rotation === -90 ||
    rotation === 270 ||
    rotation === -270;
  if (orientationChanged) {
    canvas.width = imageCreated.height;
    canvas.height = imageCreated.width;
  } else {
    canvas.width = imageCreated.width;
    canvas.height = imageCreated.height;
  }

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.drawImage(
    imageCreated,
    -imageCreated.width / 2,
    -imageCreated.height / 2
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      if (file) {
        return resolve(URL.createObjectURL(file));
      }
      reject(
        new Error(
          'Something went wrong while rotating the image. Please try again.'
        )
      );
    }, 'image/jpeg');
  });
};

export const fileToBase64 = async (file: Blob | File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (): void => resolve(reader.result as string);
    reader.onerror = (error): void => reject(error);
  });

export const readFile = async (file: File): Promise<string> =>
  new Promise(
    (resolve) =>
      new Compressor(file, {
        quality: 0.6,
        maxHeight: 500,
        maxWidth: 500,
        convertSize: 1,
        async success(result): Promise<void> {
          resolve(await fileToBase64(result));
        },
        error(err): void {
          // eslint-disable-next-line no-console
          console.error(err.message);
        },
      })
  );
