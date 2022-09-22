export const BorderRadius = {
  none: true,
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
  round: true,
}

export type BorderRadiusType = keyof typeof BorderRadius

export const BR = {
  br: (value: BorderRadiusType): Record<string, unknown> => {
    switch (value) {
      case 'none':
        return {
          borderRadius: 0,
        }
      case 'xs':
        return {
          borderRadius: 2,
        }
      case 'sm':
        return {
          borderRadius: 4,
        }
      case 'md':
        return {
          borderRadius: 8,
        }
      case 'lg':
        return {
          borderRadius: 16,
        }
      case 'xl':
        return {
          borderRadius: 32,
        }
      case 'round':
        return {
          borderRadius: 5000,
        }
    }
  },
  brTL: (value: BorderRadiusType): Record<string, unknown> => {
    switch (value) {
      case 'none':
        return {
          borderTopLeftRadius: 0,
        }
      case 'xs':
        return {
          borderTopLeftRadius: 2,
        }
      case 'sm':
        return {
          borderTopLeftRadius: 4,
        }
      case 'md':
        return {
          borderTopLeftRadius: 8,
        }
      case 'lg':
        return {
          borderTopLeftRadius: 16,
        }
      case 'xl':
        return {
          borderTopLeftRadius: 32,
        }
      case 'round':
        return {
          borderTopLeftRadius: 5000,
        }
    }
  },
  brTR: (value: BorderRadiusType): Record<string, unknown> => {
    switch (value) {
      case 'none':
        return {
          borderTopRightRadius: 0,
        }
      case 'xs':
        return {
          borderTopRightRadius: 2,
        }
      case 'sm':
        return {
          borderTopRightRadius: 4,
        }
      case 'md':
        return {
          borderTopRightRadius: 8,
        }
      case 'lg':
        return {
          borderTopRightRadius: 16,
        }
      case 'xl':
        return {
          borderTopRightRadius: 32,
        }
      case 'round':
        return {
          borderTopRightRadius: 5000,
        }
    }
  },
  brBL: (value: BorderRadiusType): Record<string, unknown> => {
    switch (value) {
      case 'none':
        return {
          borderBottomLeftRadius: 0,
        }
      case 'xs':
        return {
          borderBottomLeftRadius: 2,
        }
      case 'sm':
        return {
          borderBottomLeftRadius: 4,
        }
      case 'md':
        return {
          borderBottomLeftRadius: 8,
        }
      case 'lg':
        return {
          borderBottomLeftRadius: 16,
        }
      case 'xl':
        return {
          borderBottomLeftRadius: 32,
        }
      case 'round':
        return {
          borderBottomLeftRadius: 5000,
        }
    }
  },
  brBR: (value: BorderRadiusType): Record<string, unknown> => {
    switch (value) {
      case 'none':
        return {
          borderBottomRightRadius: 0,
        }
      case 'xs':
        return {
          borderBottomRightRadius: 2,
        }
      case 'sm':
        return {
          borderBottomRightRadius: 4,
        }
      case 'md':
        return {
          borderBottomRightRadius: 8,
        }
      case 'lg':
        return {
          borderBottomRightRadius: 16,
        }
      case 'xl':
        return {
          borderBottomRightRadius: 32,
        }
      case 'round':
        return {
          borderBottomRightRadius: 5000,
        }
    }
  },
}
