import { IconByName, IconCSS, IconProps } from '@pikas-ui/icons';
import {
  PikasRadius,
  PikasColor,
  PikasCSS,
  PikasFontSize,
  PikasShadow,
  styled,
  useTheme,
} from '@pikas-ui/styles';
import {
  FC,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Description, Label, TextError } from '@pikas-ui/text';
import { Tooltip, TooltipCSS } from '@pikas-ui/tooltip';
import { Color } from '@pikas-utils/color';
import { MultiInputFieldBadge } from './badge/index.js';
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

const InputContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',

  variants: {
    padding: {
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

    gap: {
      xs: {
        gap: 2,
      },
      sm: {
        gap: 4,
      },
      md: {
        gap: 8,
      },
      lg: {
        gap: 16,
      },
      xl: {
        gap: 32,
      },
    },
  },
});

const Input = styled('input', {
  width: 'initial',
  minWidth: 120,
  outline: 'none',
  fontSize: '$em-small',
  border: 'none',
  fontFamily: '$roboto',
  backgroundColor: '$transparent',
  flex: 1,
});

const LeftContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    padding: {
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

export const multiInputFieldType = {
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
export type MultiInputFieldType = keyof typeof multiInputFieldType;

export const multiInputFieldPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type MultiInputFieldPadding = keyof typeof multiInputFieldPadding;

export const multiInputFieldGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type MultiInputFieldGap = keyof typeof multiInputFieldGap;

export type MultiInputFieldCSS = {
  container?: PikasCSS;
  inputContainer?: PikasCSS;
  inputContent?: PikasCSS;
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
  badge?: PikasCSS;
};

export type MultiInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  css?: MultiInputFieldCSS;
  id?: string;
  label?: ReactNode | string;
  boxShadow?: PikasShadow | 'none';
  borderRadius?: PikasRadius;
  padding?: MultiInputFieldPadding;
  gap?: MultiInputFieldGap;
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
  onChange?: (values: string[]) => void;
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
  min?: number;
  max?: number;
  outline?: boolean;
  description?: string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  info?: ReactNode;
  data?: DOMStringMap;
  type?: MultiInputFieldType;
  defaultValues?: string[];
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

export const MultiInputField = forwardRef<
  HTMLInputElement,
  MultiInputFieldProps
>(
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
      gap = 'sm',
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
      defaultValues = [],
      ...props
    },
    ref
  ) => {
    const refInput = useRef<HTMLInputElement>(null);
    const multiRef = useMergedRef(ref, refInput);
    const [focus, setFocus] = useState(false);
    const [currentValues, setCurrentValues] = useState<string[]>(defaultValues);

    const handleDeleteValue = (index: number) => {
      setCurrentValues((currentState) => {
        const copy = [...currentState];
        copy.splice(index, 1);
        return copy;
      });
    };

    const handleRemoveLastValue = () => {
      setCurrentValues((currentState) => {
        const copy = [...currentState];
        copy.pop();
        return copy;
      });
    };

    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
      const inputValue = e.currentTarget.value;

      if (type === 'number' && refInput.current) {
        const value = parseInt(inputValue);

        if (max !== undefined && value > max) {
          refInput.current.value = `${max}`;
        } else if (min !== undefined && value < min) {
          refInput.current.value = `${min}`;
        }
      }

      if (e.key === 'Enter' && !!e.currentTarget.value) {
        setCurrentValues((currentState) => [...currentState, inputValue]);
        e.currentTarget.value = '';
      }
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (
        e.key === 'Backspace' &&
        !e.currentTarget.value &&
        currentValues.length
      ) {
        e.preventDefault();
        e.currentTarget.value = currentValues[currentValues.length - 1];
        handleRemoveLastValue();
      }
    };

    useEffect(() => {
      onChange?.(currentValues);
    }, [currentValues]);

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
          onBlur={(): void => setFocus(false)}
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

          <InputContent padding={padding} gap={gap} css={css?.inputContent}>
            {currentValues.map((item, index) => (
              <MultiInputFieldBadge
                index={index}
                value={item}
                key={index}
                onDelete={handleDeleteValue}
                css={css?.badge}
              />
            ))}
            <Input
              ref={multiRef}
              id={id}
              type={type}
              onKeyUp={handleKeyUp}
              onKeyDown={handleKeyDown}
              autoComplete={autoComplete}
              min={min}
              max={max}
              onFocus={(): void => setFocus(true)}
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
          </InputContent>

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

MultiInputField.displayName = 'MultiInputField';
