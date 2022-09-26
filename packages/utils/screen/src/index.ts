import * as usehook from 'usehooks-ts'

const { useScreen } = usehook

// xs: '(min-width: 480px)',
// sm: '(min-width: 640px)',
// md: '(min-width: 768px)',
// lg: '(min-width: 1024px)',
// xl: '(min-width: 1280px)',

export type Medias = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const getMediaByScreenSize = (screenSize: number): Medias => {
  if (screen.width < 480) {
    return 'xs'
  } else if (screen.width < 640) {
    return 'sm'
  } else if (screen.width < 768) {
    return 'md'
  } else if (screen.width < 1024) {
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

export const useMediaScreen = (): Medias => {
  const screen = useScreen()

  return getMediaByScreenSize(screen.width)
}

export const useMediaScreenValid = ({
  media,
  operator,
}: {
  media: Medias
  operator?: '>' | '<' | '>=' | '<=' | '='
}) => {
  const screen = useScreen()

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
