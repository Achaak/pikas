export const borderRadius = {
  br: (value: 1 | 2 | 3 | 4 | 'round'): Record<string, unknown> => {
    switch (value) {
      case 1:
        return {
          borderRadius: 4,
        }
      case 2:
        return {
          borderRadius: 8,
        }
      case 3:
        return {
          borderRadius: 16,
        }
      case 4:
        return {
          borderRadius: 32,
        }
      case 'round':
        return {
          borderRadius: 5000,
        }
    }
  },
  brTL: (value: 1 | 2 | 3 | 4 | 'round'): Record<string, unknown> => {
    switch (value) {
      case 1:
        return {
          borderTopLeftRadius: 4,
        }
      case 2:
        return {
          borderTopLeftRadius: 8,
        }
      case 3:
        return {
          borderTopLeftRadius: 16,
        }
      case 4:
        return {
          borderTopLeftRadius: 32,
        }
      case 'round':
        return {
          borderTopLeftRadius: 5000,
        }
    }
  },
  brTR: (value: 1 | 2 | 3 | 4 | 'round'): Record<string, unknown> => {
    switch (value) {
      case 1:
        return {
          borderTopRightRadius: 4,
        }
      case 2:
        return {
          borderTopRightRadius: 8,
        }
      case 3:
        return {
          borderTopRightRadius: 16,
        }
      case 4:
        return {
          borderTopRightRadius: 32,
        }
      case 'round':
        return {
          borderTopRightRadius: 5000,
        }
    }
  },
  brBL: (value: 1 | 2 | 3 | 4 | 'round'): Record<string, unknown> => {
    switch (value) {
      case 1:
        return {
          borderBottomLeftRadius: 4,
        }
      case 2:
        return {
          borderBottomLeftRadius: 8,
        }
      case 3:
        return {
          borderBottomLeftRadius: 16,
        }
      case 4:
        return {
          borderBottomLeftRadius: 32,
        }
      case 'round':
        return {
          borderBottomLeftRadius: 5000,
        }
    }
  },
  brBR: (value: 1 | 2 | 3 | 4 | 'round'): Record<string, unknown> => {
    switch (value) {
      case 1:
        return {
          borderBottomRightRadius: 4,
        }
      case 2:
        return {
          borderBottomRightRadius: 8,
        }
      case 3:
        return {
          borderBottomRightRadius: 16,
        }
      case 4:
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
