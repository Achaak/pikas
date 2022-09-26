import { useEffect, useState } from 'react'
import * as usehook from 'usehooks-ts'

const { useWindowSize } = usehook

export { useWindowSize }

export type Medias = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const getMediaByScreenSize = (screenSize: number): Medias => {
  if (screenSize < 480) {
    return 'xs'
  } else if (screenSize < 640) {
    return 'sm'
  } else if (screenSize < 768) {
    return 'md'
  } else if (screenSize < 1024) {
    return 'lg'
  } else {
    return 'xl'
  }
}

export const getScreenSizeByMedia = (media: Medias): number => {
  switch (media) {
    case 'xs':
      return 480
    case 'sm':
      return 640
    case 'md':
      return 768
    case 'lg':
      return 1024
    case 'xl':
      return 1280
  }
}

export const useMediaScreen = (): Medias | undefined => {
  const { width } = useWindowSize()
  const [media, setMedia] = useState<Medias | undefined>(undefined)

  useEffect(() => {
    setMedia(getMediaByScreenSize(width))
  }, [width])

  return media
}

export const useMediaScreenValid = ({
  media,
  operator,
}: {
  media: Medias
  operator?: '>' | '<' | '>=' | '<=' | '='
}): boolean | undefined => {
  const { width } = useWindowSize()
  const [valid, setValid] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    switch (operator) {
      case '>':
        setValid(width > getScreenSizeByMedia(media))
        break
      case '<':
        setValid(width < getScreenSizeByMedia(media))
        break
      case '>=':
        setValid(width >= getScreenSizeByMedia(media))
        break
      case '<=':
        setValid(width <= getScreenSizeByMedia(media))
        break
      case '=':
        setValid(width === getScreenSizeByMedia(media))
        break
      default:
        setValid(width === getScreenSizeByMedia(media))
        break
    }
  }, [width, media, operator])

  return valid
}
