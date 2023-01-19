import type {
  BorderRadius,
  PikasColor,
  PikasCSS,
  PikasFontSize,
  PikasShadow,
} from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import type { IconCSS } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { Label, TextError } from '@pikas-ui/text';
import { ReactNode, useRef, useEffect, useState, FC } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Color } from '@pikas-utils/color';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
});

const CheckboxStyled = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderStyle: 'solid',

  variants: {
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
      },
    },
  },
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {});

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const checkboxSide = {
  left: true,
  right: true,
} as const;
export type CheckboxSide = keyof typeof checkboxSide;

export type CheckboxCSS = {
  container?: PikasCSS;
  label?: PikasCSS;
  checkboxRoot?: PikasCSS;
  checkboxIndicator?: PikasCSS;
  textError?: PikasCSS;
  icon?: IconCSS;
};

export type CheckboxValue = CheckboxPrimitive.CheckedState;

export type CheckboxProps = {
  defaultChecked?: CheckboxValue;
  onChange?: (checked: CheckboxValue) => void;
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: ReactNode | string;
  backgroundColorName?: PikasColor;
  backgroundColorNameChecked?: PikasColor;
  textError?: string;
  boxShadow?: PikasShadow | 'none';
  borderColorName?: PikasColor;
  borderWidth?: number;
  borderRadius?: BorderRadius;
  fontSize?: PikasFontSize;
  size?: number;
  checked?: CheckboxValue;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  side?: CheckboxSide;
  outline?: boolean;
  css?: CheckboxCSS;
};

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  textError,
  fontSize,
  className,
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  required = false,
  name,
  backgroundColorName = 'WHITE_FIX',
  backgroundColorNameChecked = 'PRIMARY',
  borderRadius = 'md',
  boxShadow = 'DIMINUTION_1',
  borderColorName,
  borderWidth = 0,
  size = 24,
  side = 'right',
  outline = true,
  css,
  onChangeEvent,
}) => {
  const theme = useTheme();

  const [isChecked, setIsChecked] = useState<CheckboxValue>(defaultChecked);
  const [focus, setFocus] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleChange = (newChecked: CheckboxPrimitive.CheckedState): void => {
    setIsChecked(newChecked);
    refInput.current?.click();

    if (onChange) {
      onChange(newChecked);
    }
  };

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  return (
    <Container
      className={className}
      css={{
        fontSize: fontSize && `$${fontSize}`,
        cursor: disabled ? 'not-allowed' : undefined,
        opacity: disabled ? 0.5 : 1,

        '& > *': {
          pointerEvents: disabled ? 'none' : undefined,
        },

        ...css?.container,
      }}
    >
      <Item>
        {label && side === 'left' ? (
          <Label
            htmlFor={id}
            css={{
              marginRight: 8,
              fontWeight: '$NORMAL',
              ...css?.label,
            }}
          >
            {label}
          </Label>
        ) : null}

        <input
          ref={refInput}
          type="checkbox"
          id={`${id}-input`}
          onChange={onChangeEvent}
          checked={typeof isChecked === 'boolean' ? isChecked : true}
          style={{
            display: 'none',
          }}
        />

        <CheckboxStyled
          defaultChecked={defaultChecked}
          id={id}
          onCheckedChange={handleChange}
          checked={isChecked}
          disabled={disabled}
          required={required}
          name={name}
          focus={outline ? focus : undefined}
          onFocus={(): void => setFocus(true)}
          onBlur={(): void => setFocus(false)}
          css={{
            backgroundColor: `$${backgroundColorName}`,
            br: borderRadius,
            boxShadow: `$${boxShadow}`,
            borderColor: borderColorName && `$${borderColorName}`,
            borderWidth,
            width: size,
            height: size,

            '&[aria-checked="true"]': {
              backgroundColor: `$${backgroundColorNameChecked}`,
            },

            ...css?.checkboxRoot,
          }}
        >
          <CheckboxIndicator
            css={{
              color:
                theme &&
                new Color(
                  theme.colors[backgroundColorNameChecked].value
                ).getContrast(),

              ...css?.checkboxIndicator,
            }}
          >
            {isChecked === 'indeterminate' && (
              <IconByName
                name="bx:minus"
                colorHex={
                  theme &&
                  new Color(
                    theme.colors[backgroundColorName].value
                  ).getContrast()
                }
                css={{
                  ...css?.icon,
                  container: {
                    opacity: 0.5,

                    ...css?.icon?.container,
                  },
                }}
                size={size ? size / 1.25 : undefined}
              />
            )}
            {isChecked === true && (
              <IconByName
                name="bx:check"
                size={size ? size / 1.25 : undefined}
                css={css?.icon}
              />
            )}
          </CheckboxIndicator>
        </CheckboxStyled>

        {label && side === 'right' ? (
          <Label
            htmlFor={id}
            css={{
              marginLeft: 8,
              fontWeight: '$NORMAL',
              ...css?.label,
            }}
          >
            {label}
          </Label>
        ) : null}
      </Item>

      {textError ? (
        <TextError css={{ marginTop: 5, ...css?.textError }}>
          {textError}
        </TextError>
      ) : null}
    </Container>
  );
};
