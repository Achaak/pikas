import type {
  BorderRadiusType,
  ColorsType,
  CSS,
  FontsSizesType,
  ShadowsType,
} from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { IconByName } from '@pikas-ui/icons'
import { Description, Label, TextError } from '@pikas-ui/text'
import { Textfield } from '@pikas-ui/textfield'
import * as SelectPrimitive from '@radix-ui/react-select'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const SelectContainer = styled(SelectPrimitive.Root, {})

const Trigger = styled(SelectPrimitive.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  cursor: 'pointer',
  borderStyle: 'solid',
  width: '100%',

  variants: {
    padding: {
      none: {
        padding: 0,
      },
      xs: {
        padding: '2px 4px',
      },
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
})

const SelectValue = styled(SelectPrimitive.Value, {})

const Icon = styled(SelectPrimitive.Icon, {
  marginLeft: 4,
})

const Content = styled(SelectPrimitive.Content, {
  backgroundColor: '$WHITE',
  boxShadow: '$ELEVATION_1',
  br: 'sm',
})

const Viewport = styled(SelectPrimitive.Viewport, {
  padding: 4,
})

const Group = styled(SelectPrimitive.Group, {})

const scrollButtonStyles: CSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  cursor: 'default',
}

const ScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)

const ScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)

const ItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Separator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$GRAY_LIGHTER',
  margin: 5,
})

const GroupLabel = styled(SelectPrimitive.Label, {
  padding: '4px 16px 0px 24px',
  fontWeight: '$MEDIUM',
  fontSize: '$EM-SMALL',
})

const Item = styled(SelectPrimitive.Item, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  padding: '4px 16px 4px 24px',
  br: 'sm',
  cursor: 'pointer',
  transition: 'all 100ms',

  '&[data-disabled]': {
    opacity: 0.5,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$PRIMARY_LIGHTER',
    color: '$WHITE',
    fill: '$WHITE',
  },
})

const ItemText = styled(SelectPrimitive.ItemText, {
  fontSize: '$EM-SMALL',
})

const SearchContainer = styled('div', {
  padding: 8,
})

export type SelectItemType = {
  label: React.ReactNode
  value: string
  disabled?: boolean
  searchValue?: string
  hidden?: boolean
}

export const SelectDirections = {
  ltr: true,
  rtl: true,
}
export type SelectDirectionsType = keyof typeof SelectDirections

export const SelectPadding = {
  none: true,
  xs: true,
  sm: true,
  md: true,
  lg: true,
}
export type SelectPaddingType = keyof typeof SelectPadding

export interface SelectProps {
  styles?: {
    container?: CSS
    trigger?: CSS
  }
  hasSearch?: boolean
  searchPlaceholder?: string

  label?: string
  borderRadius?: BorderRadiusType
  padding?: SelectPaddingType
  fontSize?: FontsSizesType
  borderColor?: ColorsType
  borderWidth?: number
  data: {
    name?: string
    hidden?: boolean
    items: Array<SelectItemType>
  }[]
  id?: string
  onChange?: (value: string) => void
  defaultValue: string
  ariaLabel?: string
  textError?: string
  direction?: SelectDirectionsType
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  boxShadow?: ShadowsType | 'none'
  backgroundColor?: ColorsType
  outline?: boolean
  description?: string
  width?: string | number
  maxWidth?: string | number
  minWidth?: string | number
}

export const Select: React.FC<SelectProps> = ({
  data,
  styles,
  onChange,
  defaultValue,
  label,
  hasSearch,
  searchPlaceholder,
  id,
  ariaLabel,
  borderRadius,
  padding,
  textError,
  direction,
  onOpenChange,
  defaultOpen,
  borderColor,
  borderWidth,
  fontSize,
  boxShadow,
  backgroundColor,
  outline,
  description,
  maxWidth,
  width,
  minWidth,
}) => {
  const [searchValue, setSearchValue] = useState('')
  const [formatedData, setFormatedData] = useState(data)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    setFormatedData(
      data.map((group) => {
        const items = group.items.map((item) => {
          return {
            ...item,
            hidden: item.searchValue
              ? !item.searchValue?.includes(searchValue)
              : false,
          }
        })

        return {
          ...group,
          hidden: !items.some((item) => !item.hidden),
          items,
        }
      })
    )
  }, [data, searchValue])

  const handleChange = (value: string): void => {
    onChange?.(value)
  }

  const handleOpenChange = (open: boolean): void => {
    onOpenChange?.(open)

    if (!open) {
      setSearchValue('')
    }
  }

  return (
    <Container
      css={{
        fontSize: `$${fontSize}`,
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
      }}
    >
      {label ? (
        <Label
          htmlFor={id}
          style={{
            marginBottom: 4,
          }}
        >
          {label}
        </Label>
      ) : null}

      {description ? (
        <Description
          style={{
            marginBottom: 4,
          }}
        >
          {description}
        </Description>
      ) : null}

      <SelectContainer
        defaultValue={defaultValue}
        onValueChange={handleChange}
        dir={direction}
        onOpenChange={handleOpenChange}
        defaultOpen={defaultOpen}
        css={{
          ...styles?.container,
        }}
      >
        <Trigger
          aria-label={ariaLabel}
          padding={padding}
          focus={outline ? focus : undefined}
          onFocus={(): void => setFocus(true)}
          onBlur={(): void => setFocus(false)}
          css={{
            br: borderRadius,
            borderColor: `$${borderColor}`,
            borderWidth: borderWidth,
            boxShadow: `$${boxShadow}`,
            backgroundColor: `$${backgroundColor}`,
            ...styles?.trigger,
          }}
        >
          <SelectValue />
          <Icon>
            <IconByName name="bx:chevron-down" size="1em" color="BLACK" />
          </Icon>
        </Trigger>

        <Content>
          {hasSearch ? (
            <>
              <SearchContainer>
                <Textfield
                  onChange={(e): void => setSearchValue(e.target.value)}
                  placeholder={searchPlaceholder}
                  borderRadius="round"
                  padding="sm"
                  fontSize="EM-SMALL"
                />
              </SearchContainer>
              <Separator />
            </>
          ) : null}

          <ScrollUpButton>
            <IconByName name="bx:chevron-up" size={20} color="BLACK" />
          </ScrollUpButton>
          <Viewport>
            {formatedData.map((group, groupIndex) => {
              const res = []
              const hidden = !group.items.some((item) => !item.hidden)

              if (
                groupIndex > 0 &&
                !hidden &&
                !formatedData[groupIndex - 1]?.hidden
              ) {
                res.push(<Separator key={`separator-${groupIndex}`} />)
              }

              res.push(
                <Group
                  key={groupIndex}
                  css={{
                    ...(hidden ? { display: 'none' } : {}),
                  }}
                >
                  {group.name ? <GroupLabel>{group.name}</GroupLabel> : null}
                  {group.items.map((item, itemIndex) => (
                    <Item
                      key={itemIndex}
                      value={item.value}
                      disabled={item.disabled}
                      css={{
                        ...(item.hidden ? { display: 'none' } : {}),
                      }}
                    >
                      <ItemText>{item.label}</ItemText>
                      <ItemIndicator>
                        <IconByName name="bx:check" size={20} />
                      </ItemIndicator>
                    </Item>
                  ))}
                </Group>
              )

              return res
            })}
          </Viewport>
          <ScrollDownButton>
            <IconByName name="bx:chevron-down" size={20} color="BLACK" />
          </ScrollDownButton>
        </Content>
      </SelectContainer>

      {textError ? (
        <TextError style={{ marginTop: 5 }}>{textError}</TextError>
      ) : null}
    </Container>
  )
}

Select.defaultProps = {
  fontSize: 'EM-MEDIUM',
  padding: 'md',
  borderColor: 'TRANSPARENT',
  borderWidth: 0,
  borderRadius: 'md',
  boxShadow: 'DIMINUTION_1',
  backgroundColor: 'GRAY_LIGHTEST_1',
  outline: true,
  width: '100%',
  maxWidth: '100%',
}
