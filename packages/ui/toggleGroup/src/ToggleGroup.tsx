import { IconCSS, IconProps } from '@pikas-ui/icons';
import {
  styled,
  PikasCSS,
  PikasSize,
  PikasRadius,
  PikasShadow,
  PikasColor,
  useTheme,
} from '@pikas-ui/styles';
import { Item, Root } from '@radix-ui/react-toggle-group';
import { FC } from 'react';
import { Color } from '@pikas-utils/color';

const RootStyled = styled(Root, {
  borderRadius: '$lg',
  borderStyle: 'solid',
  borderWidth: 2,
  boxShadow: '$bottom-sm',
  display: 'flex',
  overflow: 'hidden',

  "&[data-orientation='horizontal']": {
    flexDirection: 'row',
  },
  "&[data-orientation='vertical']": {
    flexDirection: 'column',
  },
});

export const getContentColor = ({
  contentColorHex,
  colorHex,
  outlined,
}: {
  contentColorHex?: string;
  colorHex?: string;
  outlined?: boolean;
}): string | undefined => {
  if (contentColorHex) {
    return contentColorHex;
  }

  if (!outlined) {
    return new Color(colorHex ?? '').getContrast();
  } else {
    return colorHex;
  }
};

export const getColors = ({
  colorHex,
  contentColorHex,
  outlined,
}: {
  colorHex?: string;
  contentColorHex?: string;
  outlined?: boolean;
}): PikasCSS => {
  if (!outlined) {
    const colors: PikasCSS = {
      backgroundColor: colorHex,
      color: getContentColor({
        contentColorHex,
        colorHex,
        outlined,
      }),
    };

    return colors;
  } else {
    const colors: PikasCSS = {
      backgroundColor: '$transparent',
      color: getContentColor({
        contentColorHex,
        colorHex,
        outlined,
      }),
    };

    return colors;
  }
};

export const toggleGroupPadding = {
  none: true,
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type ToggleGroupPadding = keyof typeof toggleGroupPadding;

export const toggleGroupOrientation = {
  horizontal: true,
  vertical: true,
} as const;
export type ToggleGroupOrientation = keyof typeof toggleGroupOrientation;

export const toggleGroupType = {
  single: true,
  multiple: true,
} as const;
export type ToggleGroupType = keyof typeof toggleGroupType;

export const toggleGroupDirection = {
  ltr: true,
  rtl: true,
} as const;
export type ToggleGroupDirection = keyof typeof toggleGroupDirection;

export type ToggleGroupData = {
  value: string;
  Icon: FC<IconProps>;
  ariaLabel?: string;
  css?: {
    button?: PikasCSS;
    icon?: IconCSS;
  };
  disabled?: boolean;
};

export type ToggleGroupBaseProps = {
  data: ToggleGroupData[];
  css?: PikasCSS;
  size?: PikasSize;
  padding?: ToggleGroupPadding;
  borderRadius?: PikasRadius;
  borderWidth?: number;
  boxShadow?: PikasShadow | 'none';
  colorName?: PikasColor;
  colorHex?: string;
  contentColorName?: PikasColor;
  contentColorHex?: string;
  orientation?: ToggleGroupOrientation;
  outlined?: boolean;
  type: ToggleGroupType;
  disabled?: boolean;
  rovingFocus?: boolean;
  direction?: ToggleGroupDirection;
  loop?: boolean;
};

export type ToggleGroupSingleProps = ToggleGroupBaseProps & {
  type: 'single';
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export type ToggleGroupMultipleProps = ToggleGroupBaseProps & {
  type: 'multiple';
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

export type ToggleGroupProps =
  | ToggleGroupMultipleProps
  | ToggleGroupSingleProps;

export const ToggleGroup: FC<ToggleGroupProps> = ({
  css,
  data,
  size = 24,
  padding = 'md',
  borderRadius = 'md',
  borderWidth = 2,
  boxShadow = 'bottom-sm',
  colorName = 'primary',
  colorHex,
  contentColorName,
  contentColorHex,
  orientation = 'horizontal',
  outlined = false,
  type,
  defaultValue,
  onValueChange,
  disabled,
  direction = 'ltr',
  rovingFocus = true,
  loop = true,
}) => {
  const theme = useTheme();

  if (!theme) {
    return <></>;
  }

  const colorHexFinal = colorHex ?? theme.colors[colorName].value;
  const contentColorHexFinal =
    contentColorHex ??
    (contentColorName && theme.colors[contentColorName].value);

  return (
    <RootStyled
      css={{
        borderRadius: `$${borderRadius}`,
        borderWidth,
        boxShadow: `$${boxShadow}`,
        borderColor: colorHexFinal,

        ...css,
      }}
      {...(type === 'single'
        ? {
            type: type,
            defaultValue: defaultValue,
            onValueChange: onValueChange,
          }
        : {
            type: type,
            defaultValues: defaultValue,
            onValuesChange: onValueChange,
          })}
      orientation={orientation}
      disabled={disabled}
      dir={direction}
      rovingFocus={rovingFocus}
      loop={loop}
    >
      {data.map((item) => (
        <ToggleGroupItem
          {...item}
          size={size}
          padding={padding}
          key={item.value}
          contentColorHex={contentColorHexFinal}
          colorHex={colorHexFinal}
          outlined={outlined}
        />
      ))}
    </RootStyled>
  );
};

const ItemStyled = styled(Item, {
  all: 'unset',
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  space: 2,
  boxSizing: 'border-box',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',

  '&[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  "&[data-state='on']": {
    filter: 'brightness(0.9)',

    '.bg-outlined': {
      opacity: 0.1,
    },
  },

  variants: {
    padding: {
      none: {
        padding: 0,
      },
      xs: {
        padding: 2,
      },
      sm: {
        padding: 4,
      },
      md: {
        padding: 8,
      },
      lg: {
        padding: 16,
      },
      xl: {
        padding: 24,
      },
    },
  },
});

const BGOutlined = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: 'all 0.2s ease-in-out',
  opacity: 0,
});

type ToggleGroupItemProps = ToggleGroupData & {
  size: PikasSize;
  padding: ToggleGroupPadding;
  contentColorHex?: string;
  colorHex?: string;
  outlined?: boolean;
};

const ToggleGroupItem: FC<ToggleGroupItemProps> = ({
  value,
  Icon,
  ariaLabel,
  css,
  disabled,
  padding,
  size,
  contentColorHex,
  colorHex,
  outlined,
}) => (
  <ItemStyled
    value={value}
    aria-label={ariaLabel}
    disabled={disabled}
    padding={padding}
    css={{
      ...getColors({
        colorHex,
        contentColorHex,
        outlined,
      }),
      ...css?.button,
    }}
  >
    {outlined && (
      <BGOutlined
        className="bg-outlined"
        css={{
          ...getColors({
            colorHex,
            contentColorHex,
            outlined: false,
          }),
        }}
      />
    )}
    <Icon
      size={size}
      css={css?.icon}
      colorHex={getContentColor({
        contentColorHex,
        colorHex,
        outlined,
      })}
    />
  </ItemStyled>
);
