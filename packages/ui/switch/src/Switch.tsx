import type { IconProps, IconCSS } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import type { TooltipCSS } from '@pikas-ui/tooltip';
import { Tooltip } from '@pikas-ui/tooltip';
import type { PikasCSS, PikasFontSize } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { Label, TextError } from '@pikas-ui/text';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import type { ButtonHTMLAttributes } from 'react';
import { useEffect, useState, FC, ReactNode } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const SwitchContainer = styled('div', {
  width: '100%',
  borderRadius: '$2xl',
  display: 'flex',
  alignItems: 'center',
});

const SwitchStyle = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 48,
  height: 24,
  backgroundColor: '$gray',
  borderRadius: '$full',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  transition: 'all 500ms',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '$bottom-md',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary',
  },
});

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 20,
  height: 20,
  backgroundColor: '$white',
  borderRadius: '$full',
  boxShadow: '$bottom-sm',
  transition: 'all 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    backgroundColor: '$white-fixed',
    transform: 'translateX(26px)',
  },
});

const LabelContainer = styled('div', {
  display: 'flex',
});

const Required = styled('div', {
  color: '$warning',
  marginLeft: 4,
});

export type SwitchCSS = {
  container?: PikasCSS;
  content?: PikasCSS;
  infoTooltip?: TooltipCSS;
  infoIcon?: IconCSS;
  label?: PikasCSS;
  required?: PikasCSS;
  textError?: PikasCSS;
};

export type BasicSwitchProps = {
  label?: ReactNode | string;
  name?: string;
  fontSize?: PikasFontSize;
  textError?: string;

  onCheckedChange?: (val: boolean) => void;
  defaultChecked?: boolean;
  css?: SwitchCSS;
  disabled?: boolean;
  side?: 'left' | 'right';
  Icons?: {
    checked: FC<IconProps>;
    unchecked: FC<IconProps>;
  };
  required?: boolean;
  checked?: boolean;
  info?: string;
};

export type SwitchProps = BasicSwitchProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Switch: FC<SwitchProps> = ({
  id,
  name,
  onCheckedChange,
  fontSize = 'em-base',
  textError,
  label,
  css,
  defaultChecked,
  Icons,
  disabled = false,
  side = 'left',
  info,
  required,
  checked,
  ...props
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked ?? checked);

  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  useEffect(() => {
    if (defaultChecked) {
      setCheckedState(defaultChecked);
    }
  }, [defaultChecked]);

  const onChangeInput = (val: boolean): void => {
    onCheckedChange?.(val);

    setCheckedState(val);
  };

  const getIcon = (): ReactNode => {
    if (!Icons) {
      return;
    }

    if (checkedState) {
      return <Icons.checked size={14} colorName="black-fixed" />;
    } else {
      return <Icons.unchecked size={14} colorName="black-fixed" />;
    }
  };

  return (
    <Container
      css={{
        fontSize: `$${fontSize}`,
        cursor: disabled ? 'not-allowed' : undefined,
        opacity: disabled ? 0.5 : 1,

        '& > *': {
          pointerEvents: disabled ? 'none' : undefined,
        },

        ...css?.container,
      }}
    >
      <SwitchContainer css={css?.content}>
        {label && side === 'left' ? (
          <LabelContainer
            css={{
              marginRight: 8,
            }}
          >
            <Label
              htmlFor={id}
              css={{
                ...css?.label,
              }}
            >
              {label}
            </Label>

            {required ? (
              <Required
                css={{
                  ...css?.required,
                }}
              >
                *
              </Required>
            ) : null}
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

        <SwitchStyle
          {...props}
          defaultChecked={defaultChecked}
          checked={checkedState}
          id={id}
          name={name}
          onCheckedChange={onChangeInput}
        >
          <SwitchThumb>{getIcon()}</SwitchThumb>
        </SwitchStyle>

        {label && side === 'right' ? (
          <LabelContainer
            css={{
              marginLeft: 8,
            }}
          >
            <Label
              htmlFor={id}
              css={{
                ...css?.label,
              }}
            >
              {label}
            </Label>

            {required ? (
              <Required
                css={{
                  ...css?.required,
                }}
              >
                *
              </Required>
            ) : null}
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
      </SwitchContainer>

      {textError && (
        <TextError css={{ marginTop: 5, ...css?.textError }}>
          {textError}
        </TextError>
      )}
    </Container>
  );
};
