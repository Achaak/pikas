import type { IconProps, IconCSS } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type { CSS, FontsSizes } from '@pikas-ui/styles'
import type { TooltipCSS } from '@pikas-ui/tooltip'
import { Tooltip } from '@pikas-ui/tooltip'
import { styled } from '@pikas-ui/styles'
import { Label, TextError } from '@pikas-ui/text'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import type { ButtonHTMLAttributes } from 'react'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const SwitchContainer = styled('div', {
  width: '100%',
  br: 'lg',
  display: 'flex',
  alignItems: 'center',
})

const SwitchStyle = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 48,
  height: 24,
  backgroundColor: '$GRAY',
  br: 'round',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  transition: 'all 500ms',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '$ELEVATION_BOTTOM_1',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$PRIMARY',
  },
})

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 20,
  height: 20,
  backgroundColor: '$WHITE',
  br: 'round',
  boxShadow: '$ELEVATION_BOTTOM_1',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    backgroundColor: '$WHITE_FIX',
    transform: 'translateX(26px)',
  },
})

const LabelContainer = styled('div', {
  display: 'flex',
})

const Required = styled('div', {
  color: '$WARNING',
  marginLeft: 4,
})

export interface SwitchCSS {
  container?: CSS
  content?: CSS
  infoTooltip?: TooltipCSS
  infoIcon?: IconCSS
  label?: CSS
  required?: CSS
  textError?: CSS
}

export interface BasicSwitchProps {
  label?: string
  name?: string
  fontSize?: FontsSizes
  textError?: string

  onCheckedChange?: (val: boolean) => void
  defaultChecked?: boolean
  css?: SwitchCSS
  disabled?: boolean
  side?: 'left' | 'right'
  Icons?: {
    checked: React.FC<IconProps>
    unchecked: React.FC<IconProps>
  }
  required?: boolean
  checked?: boolean
  info?: string
}

export type SwitchProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BasicSwitchProps

export const Switch: React.FC<SwitchProps> = ({
  id,
  name,
  onCheckedChange,
  fontSize,
  textError,
  label,
  css,
  defaultChecked,
  Icons,
  disabled,
  side,
  info,
  required,
  checked,
  ...props
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked || checked)

  useEffect(() => {
    setCheckedState(checked)
  }, [checked])

  const onChangeInput = (val: boolean): void => {
    onCheckedChange?.(val)

    setCheckedState(val)
  }

  const getIcon = (): React.ReactNode => {
    if (!Icons) {
      return
    }

    if (checkedState) {
      return <Icons.checked size={14} color="BLACK_FIX" />
    } else {
      return <Icons.unchecked size={14} color="BLACK_FIX" />
    }
  }

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
                  color="BLACK_LIGHT"
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
                  color="BLACK_LIGHT"
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
  )
}

Switch.defaultProps = {
  fontSize: 'EM-MEDIUM',
  side: 'left',
  disabled: false,
}
