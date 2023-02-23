import type { IconProps, IconCSS } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import type {
  PikasColor,
  PikasRadius,
  PikasCSS,
  PikasShadow,
  PikasFontSize,
} from '@pikas-ui/styles';
import { styled, useTheme } from '@pikas-ui/styles';
import { Description, Label, TextError } from '@pikas-ui/text';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Color } from '@pikas-utils/color';
import {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useState,
  ReactNode,
  FC,
} from 'react';
import type { TooltipCSS } from '@pikas-ui/tooltip';
import { Tooltip } from '@pikas-ui/tooltip';
import { useMergedRef } from '@pikas-utils/hooks';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
});

const InputContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',

  variants: {
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$primary',
        outlineWidth: 2,
      },
    },

    gap: {
      xs: {
        columnGap: 2,
      },
      sm: {
        columnGap: 4,
      },
      md: {
        columnGap: 8,
      },
      lg: {
        columnGap: 16,
      },
      xl: {
        columnGap: 32,
      },
    },
  },
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  outline: 'none',
  border: 'none',
  fontFamily: '$roboto',
  backgroundColor: '$transparent',

  '&::placeholder': {
    color: '$gray-dark',
  },

  variants: {
    padding: {
      none: {
        padding: 0,
      },
      xs: {
        padding: '4px 8px',
      },
      sm: {
        padding: '6px 12px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '12px 24px',
      },
      xl: {
        padding: '16px 32px',
      },
    },
  },
});

const LeftContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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
        padding: 32,
      },
    },
  },
});

const RightContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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
        padding: 32,
      },
    },
  },
});

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
});

const Required = styled('div', {
  color: '$warning',
  marginLeft: 4,
});

export const textfieldType = {
  color: true,
  date: true,
  'datetime-local': true,
  email: true,
  hidden: true,
  month: true,
  number: true,
  password: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true,
} as const;
export type TextfieldType = keyof typeof textfieldType;

export const textfieldPadding = {
  none: true,
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type TextfieldPadding = keyof typeof textfieldPadding;

export const textfieldGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type TextfieldGap = keyof typeof textfieldGap;

export type TextfieldCSS = {
  container?: PikasCSS;
  inputContainer?: PikasCSS;
  input?: PikasCSS;
  left?: PikasCSS;
  right?: PikasCSS;
  leftIcon?: IconCSS;
  rightIcon?: IconCSS;
  infoTooltip?: TooltipCSS;
  infoIcon?: IconCSS;
  label?: PikasCSS;
  description?: PikasCSS;
  textError?: PikasCSS;
  required?: PikasCSS;
};

export type TextfieldProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: TextfieldType;
  id?: string;
  label?: ReactNode | string;
  boxShadow?: PikasShadow | 'none';
  borderRadius?: PikasRadius;
  padding?: TextfieldPadding;
  gap?: TextfieldGap;
  fontSize?: PikasFontSize;
  borderColorName?: PikasColor;
  borderColorHex?: string;
  borderWidth?: number;
  colorName?: PikasColor;
  colorHex?: string;
  placeholderColorName?: PikasColor;
  placeholderColorHex?: string;
  backgroundColorName?: PikasColor;
  backgroundColorHex?: string;
  textError?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  LeftIcon?: FC<IconProps>;
  RightIcon?: FC<IconProps>;
  leftIconColorName?: PikasColor;
  leftIconColorHex?: string;
  rightIconColorName?: PikasColor;
  rightIconColorHex?: string;
  leftIconSize?: number;
  rightIconSize?: number;
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
  css?: TextfieldCSS;
  min?: number;
  max?: number;
  outline?: boolean;
  description?: string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  info?: ReactNode;
  data?: DOMStringMap;
};

const getColor = ({
  colorName,
  colorHex,
  backgroundColorName,
}: {
  colorName?: PikasColor;
  colorHex?: string;
  backgroundColorName?: PikasColor;
}): string => {
  const theme = useTheme();

  if (colorHex) {
    return colorHex;
  } else if (colorName) {
    return `$${colorName}`;
  } else if (theme) {
    return new Color(
      theme.colors[backgroundColorName ?? 'white'].value
    ).getContrast();
  } else {
    return '';
  }
};

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      id,
      type = 'text',
      onChange,
      boxShadow = 'inner-md',
      borderRadius = 'md',
      padding = 'md',
      fontSize = 'em-base',
      textError,
      label,
      css,
      borderColorName = 'transparent',
      borderWidth = 0,
      autoComplete,
      min,
      max,
      LeftIcon,
      RightIcon,
      leftChildren,
      rightChildren,
      backgroundColorName = 'gray-lightest-1',
      outline = true,
      description,
      gap,
      width = '100%',
      maxWidth = '100%',
      minWidth,
      backgroundColorHex,
      borderColorHex,
      colorName,
      colorHex,
      placeholderColorName = 'black-light',
      placeholderColorHex,
      leftIconColorName,
      leftIconColorHex,
      rightIconColorName,
      rightIconColorHex,
      leftIconSize,
      rightIconSize,
      required,
      info,
      disabled = false,
      data,
      ...props
    },
    ref
  ) => {
    const refInput = useRef<HTMLInputElement>(null);
    const multiRef = useMergedRef(ref, refInput);
    const [focus, setFocus] = useState(false);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
      if (type === 'number' && refInput.current) {
        const value = parseInt(e.target.value);

        if (max !== undefined && value > max) {
          refInput.current.value = `${max}`;
        } else if (min !== undefined && value < min) {
          refInput.current.value = `${min}`;
        }
      }

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <Container
        css={{
          fontSize: `$${fontSize}`,
          width,
          maxWidth,
          minWidth,
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : undefined,

          '& > *': {
            pointerEvents: disabled ? 'none' : undefined,
          },
          ...css?.container,
        }}
      >
        {label ? (
          <LabelContainer>
            <Label htmlFor={id} css={css?.label}>
              {label}
            </Label>

            {required ? <Required css={css?.required}>*</Required> : null}
            {info ? (
              <Tooltip content={info} css={css?.infoTooltip}>
                <IconByName
                  name="bx:info-circle"
                  colorName="black-light"
                  css={{
                    container: {
                      marginLeft: 4,
                      ...css?.infoIcon?.container,
                    },
                    svg: {
                      ...css?.infoIcon?.svg,
                    },
                  }}
                />
              </Tooltip>
            ) : null}
          </LabelContainer>
        ) : null}

        {description ? (
          <Description
            css={{
              marginBottom: 4,
              ...css?.description,
            }}
          >
            {description}
          </Description>
        ) : null}

        <InputContainer
          focus={outline ? focus : undefined}
          gap={gap}
          css={{
            borderRadius: `$${borderRadius}`,
            borderColor: borderColorHex ?? `$${borderColorName}`,
            backgroundColor: backgroundColorHex ?? `$${backgroundColorName}`,
            boxShadow: `$${boxShadow}`,
            borderWidth,

            ...css?.inputContainer,
          }}
        >
          {leftChildren && (
            <LeftContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.left,
              }}
            >
              {leftChildren}
            </LeftContainer>
          )}

          {LeftIcon && (
            <LeftContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.left,
              }}
            >
              <LeftIcon
                size={leftIconSize ?? '1em'}
                colorHex={getColor({
                  colorName: leftIconColorName ?? colorName,
                  colorHex: leftIconColorHex ?? colorHex,
                  backgroundColorName,
                })}
                css={css?.leftIcon}
              />
            </LeftContainer>
          )}

          <Input
            ref={multiRef}
            id={id}
            type={type}
            padding={padding}
            onChange={onChangeInput}
            autoComplete={autoComplete}
            min={min}
            max={max}
            onFocus={(): void => setFocus(true)}
            onBlur={(): void => setFocus(false)}
            disabled={disabled}
            required={required}
            css={{
              color: getColor({ colorName, colorHex, backgroundColorName }),

              '&::placeholder': {
                color: getColor({
                  colorName: placeholderColorName,
                  colorHex: placeholderColorHex,
                  backgroundColorName,
                }),
              },

              ...css?.input,
            }}
            {...props}
            {...data}
          />

          {RightIcon && (
            <RightContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.right,
              }}
            >
              <RightIcon
                size={rightIconSize ?? '1em'}
                colorHex={getColor({
                  colorName: rightIconColorName ?? colorName,
                  colorHex: rightIconColorHex ?? colorHex,
                  backgroundColorName,
                })}
                css={css?.rightIcon}
              />
            </RightContainer>
          )}

          {rightChildren && (
            <RightContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.right,
              }}
            >
              {rightChildren}
            </RightContainer>
          )}
        </InputContainer>

        {textError && (
          <TextError css={{ marginTop: 5, ...css?.textError }}>
            {textError}
          </TextError>
        )}
      </Container>
    );
  }
);

Textfield.displayName = 'Textfield';
