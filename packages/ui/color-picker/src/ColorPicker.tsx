import { PikasCSS, PikasFontSize, styled } from '@pikas-ui/styles';
import { createRef, FC, ReactNode, useEffect, useState } from 'react';
import type { TooltipCSS } from '@pikas-ui/tooltip';
import { Tooltip } from '@pikas-ui/tooltip';
import { Textfield, TextfieldCSS, TextfieldProps } from '@pikas-ui/textfield';
import { IconByName, IconCSS } from '@pikas-ui/icons';
import { Description, Label, TextError } from '@pikas-ui/text';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
});

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
});

const Required = styled('div', {
  color: '$WARNING',
  marginLeft: 4,
});

const InputContainer = styled('div', {
  display: 'flex',
  customColumnGap: 8,
  alignItems: 'center',
});

const ColorInputWrapper = styled('div', {
  display: 'flex',
  height: 32,
  width: 32,
  br: 'sm',
  cursor: 'pointer',
  boxShadow: '$DIMINUTION_1',
});

const ColorInput = styled('input', {
  visibility: 'hidden',
  pointerEvents: 'none',
});

export type ColorPickerCSS = {
  container?: PikasCSS;
  inputContainer?: PikasCSS;
  infoTooltip?: TooltipCSS;
  infoIcon?: IconCSS;
  label?: PikasCSS;
  description?: PikasCSS;
  textError?: PikasCSS;
  required?: PikasCSS;
  textfield?: TextfieldCSS;
  colorInput?: PikasCSS;
};

export type ColorPickerProps = {
  css?: ColorPickerCSS;
  label?: ReactNode | string;
  description?: string;
  info?: ReactNode;
  fontSize?: PikasFontSize;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  textError?: string;
  onChange?: (value: string) => void;
  textfield?: TextfieldProps;
  hideTextfield?: boolean;
  value?: string;
  defaultValue?: string;
};

export const ColorPicker: FC<ColorPickerProps> = ({
  css,
  description,
  info,
  label,
  fontSize = 'EM-MEDIUM',
  width = '100%',
  maxWidth = '100%',
  minWidth,
  disabled,
  id,
  required,
  textError,
  onChange,
  textfield,
  hideTextfield = false,
  value,
  defaultValue = '#FFFFFF',
}) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultValue);
  const colorInputRef = createRef<HTMLInputElement>();

  const handleColorChange = (newValue: string) => {
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

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

      <InputContainer css={css?.inputContainer}>
        <ColorInputWrapper
          css={{
            ...css?.colorInput,
            backgroundColor: currentValue,
          }}
          onClick={() => {
            colorInputRef.current?.click();
          }}
        >
          <ColorInput
            ref={colorInputRef}
            type="color"
            value={currentValue}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </ColorInputWrapper>

        {!hideTextfield ? (
          <Textfield
            value={currentValue}
            onChange={(e) => handleColorChange(e.target.value)}
            placeholder="#ffffff"
            {...textfield}
            css={{
              ...textfield?.css,
              ...css?.textfield,
              input: {
                textTransform: 'uppercase',
                ...textfield?.css?.input,
                ...css?.textfield?.input,
              },
            }}
          />
        ) : null}
      </InputContainer>

      {textError && (
        <TextError css={{ marginTop: 5, ...css?.textError }}>
          {textError}
        </TextError>
      )}
    </Container>
  );
};
