import * as usehook from 'usehooks-ts'

const { useScreen } = usehook

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
  const screen = useScreen()

  if (!screen) {
    return undefined
  }

  return getMediaByScreenSize(screen.width)
}

export const useMediaScreenValid = ({
  media,
  operator,
}: {
  media: Medias
  operator?: '>' | '<' | '>=' | '<=' | '='
}): boolean | undefined => {
  const screen = useScreen()

  if (!screen) {
    return undefined
  }

  switch (operator) {
    case '>':
      return screen.width > getScreenSizeByMedia(media)
    case '<':
      return screen.width < getScreenSizeByMedia(media)
    case '>=':
      return screen.width >= getScreenSizeByMedia(media)
    case '<=':
      return screen.width <= getScreenSizeByMedia(media)
    case '=':
      return screen.width === getScreenSizeByMedia(media)
    default:
      return screen.width === getScreenSizeByMedia(media)
  }
}
