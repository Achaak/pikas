import type {
  PikasColor,
  BorderRadius,
  PikasCSS,
  PikasShadow,
  PikasFontSize,
} from '@pikas-ui/styles';
import { styled, useTheme } from '@pikas-ui/styles';
import { Label, TextError, Description } from '@pikas-ui/text';
import fontColorContrast from 'font-color-contrast';
import type { ChangeEvent, ForwardedRef, TextareaHTMLAttributes } from 'react';
import { forwardRef, useState, ReactNode } from 'react';
import type { IconCSS } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import type { TooltipCSS } from '@pikas-ui/tooltip';
import { Tooltip } from '@pikas-ui/tooltip';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
});

const TextareaContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',

  variants: {
    padding: {
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
    },
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
      },
    },
  },
});

const TextareaStyled = styled('textarea', {
  width: '100%',
  outline: 'none',
  fontSize: '$EM-SMALL',
  border: 'none',
  fontFamily: '$roboto',
  backgroundColor: '$TRANSPARENT',
});

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
});

const Required = styled('div', {
  color: '$WARNING',
  marginLeft: 4,
});

export const textareaPadding = {
  sm: true,
  md: true,
  lg: true,
} as const;
export type TextareaPadding = keyof typeof textareaPadding;

export const textareaResize = {
  none: true,
  vertical: true,
  horizontal: true,
  both: true,
} as const;
export type TextareaResize = keyof typeof textareaResize;

export type TextareaCSS = {
  container?: PikasCSS;
  textareaContainer?: PikasCSS;
  textarea?: PikasCSS;
  infoTooltip?: TooltipCSS;
  infoIcon?: IconCSS;
  label?: PikasCSS;
  description?: PikasCSS;
  textError?: PikasCSS;
  required?: PikasCSS;
};

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id?: string;
  label?: string;
  boxShadow?: PikasShadow | 'none';
  borderRadius?: BorderRadius;
  padding?: TextareaPadding;
  fontSize?: PikasFontSize;
  textError?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  css?: TextareaCSS;
  outline?: boolean;
  resize?: TextareaResize;
  description?: string;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  borderColorName?: PikasColor;
  borderColorHex?: string;
  borderWidth?: number;
  colorName?: PikasColor;
  colorHex?: string;
  placeholderColorName?: PikasColor;
  placeholderColorHex?: string;
  backgroundColorName?: PikasColor;
  backgroundColorHex?: string;
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
    return fontColorContrast(
      theme.colors[backgroundColorName ?? 'WHITE'].value,
      0.7
    );
  } else {
    return '';
  }
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
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
      backgroundColorName = 'GRAY_LIGHTEST_1',
      outline = true,
      resize,
      description,
      width = '100%',
      maxWidth = '100%',
      height = 300,
      maxHeight,
      minHeight,
      minWidth,
      backgroundColorHex,
      borderColorHex,
      colorName,
      colorHex,
      placeholderColorName = 'BLACK_LIGHT',
      placeholderColorHex,
      info,
      required,
      disabled = false,
      data,
      ...props
    }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [focus, setFocus] = useState(false);

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
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

        <TextareaContainer
          padding={padding}
          focus={outline ? focus : undefined}
          css={{
            br: borderRadius,
            borderColor: borderColorHex ?? `$${borderColorName}`,
            backgroundColor: backgroundColorHex ?? `$${backgroundColorName}`,
            boxShadow: `$${boxShadow}`,
            borderWidth,

            ...css?.textareaContainer,
          }}
        >
          <TextareaStyled
            ref={ref}
            id={id}
            onChange={onChangeTextarea}
            onFocus={(): void => setFocus(true)}
            onBlur={(): void => setFocus(false)}
            required={required}
            disabled={disabled}
            css={{
              resize,
              height,
              maxHeight,
              minHeight,
              color: getColor({ colorName, colorHex, backgroundColorName }),

              '&::placeholder': {
                color: getColor({
                  colorName: placeholderColorName,
                  colorHex: placeholderColorHex,
                  backgroundColorName,
                }),
              },

              ...css?.textarea,
            }}
            {...props}
            {...data}
          />
        </TextareaContainer>

        {textError && (
          <TextError css={{ marginTop: 5, ...css?.textError }}>
            {textError}
          </TextError>
        )}
      </Container>
    );
  }
);

Textarea.displayName = 'Textarea';
