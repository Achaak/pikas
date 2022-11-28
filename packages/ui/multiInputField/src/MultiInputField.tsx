import { IconByName, IconCSS, IconProps } from '@pikas-ui/icons';
import {
  BorderRadius,
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
import useMergedRef from '@react-hook/merged-ref';
import { Root } from '@radix-ui/react-label';
import { Description, Label, TextError } from '@pikas-ui/text';
import { Tooltip, TooltipCSS } from '@pikas-ui/tooltip';
import fontColorContrast from 'font-color-contrast';
import { MultiInputFieldBadge } from './badge/index.js';

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
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
      },
    },

    gap: {
      xs: {
        customColumnGap: 2,
      },
      sm: {
        customColumnGap: 4,
      },
      md: {
        customColumnGap: 8,
      },
      lg: {
        customColumnGap: 16,
      },
      xl: {
        customColumnGap: 32,
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
        customGap: 2,
      },
      sm: {
        customGap: 4,
      },
      md: {
        customGap: 8,
      },
      lg: {
        customGap: 16,
      },
      xl: {
        customGap: 32,
      },
    },
  },
});

const Input = styled('input', {
  width: 'initial',
  minWidth: 120,
  outline: 'none',
  fontSize: '$EM-SMALL',
  border: 'none',
  fontFamily: '$roboto',
  backgroundColor: '$TRANSPARENT',
  flex: 1,
});

const LeftContainer = styled(Root, {
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

const RightContainer = styled(Root, {
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
  color: '$WARNING',
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
  label?: string;
  boxShadow?: PikasShadow | 'none';
  borderRadius?: BorderRadius;
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
    return fontColorContrast(
      theme.colors[backgroundColorName ?? 'WHITE'].value,
      0.7
    );
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
      boxShadow = 'DIMINUTION_1',
      borderRadius = 'md',
      padding = 'md',
      fontSize = 'EM-MEDIUM',
      textError,
      label,
      css,
      borderColorName = 'TRANSPARENT',
      borderWidth = 0,
      autoComplete,
      min,
      max,
      LeftIcon,
      RightIcon,
      leftChildren,
      rightChildren,
      backgroundColorName = 'GRAY_LIGHTEST_1',
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
      placeholderColorName = 'BLACK_LIGHT',
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
                  colorName="BLACK_LIGHT"
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
            br: borderRadius,
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
