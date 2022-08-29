import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { ColorsType } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

import { ClipLoader } from '@pikas-ui/loader'
import type {
  MenuData,
  MenuDataItem,
  MenuProps,
  MenuStylesType,
} from '@pikas-ui/menu'
import {
  MenuContentStyle,
  MenuCheckboxItemStyle,
  MenuRadioItemStyle,
  MenuItemIndicatorStyle,
  MenuSeparatorStyle,
  MenuLabelStyle,
  MenuItemStyles,
  RightSlotStyle,
  SpanStyle,
} from '@pikas-ui/menu'
import { IconByName } from '@pikas-ui/icons'

const Content = styled(DropdownMenuPrimitive.Content, {
  ...MenuContentStyle,
})

const Item = styled(DropdownMenuPrimitive.Item, {
  ...MenuItemStyles,
})
const CheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...MenuCheckboxItemStyle,
})
const RadioGroup = styled(DropdownMenuPrimitive.RadioGroup)
const RadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...MenuRadioItemStyle,
})
const SubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  ...MenuItemStyles,
})
const SubContent = styled(DropdownMenuPrimitive.SubContent, {
  ...MenuContentStyle,
})

const Label = styled(DropdownMenuPrimitive.Label, {
  ...MenuLabelStyle,
})

const Separator = styled(DropdownMenuPrimitive.Separator, {
  ...MenuSeparatorStyle,
})

const ItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  ...MenuItemIndicatorStyle,
})

const IconButton = styled('div', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

const Span = styled('span', {
  ...SpanStyle,
})

const RightSlot = styled('div', {
  ...RightSlotStyle,
})

export const DropdownMenuSide = {
  left: true,
  right: true,
  top: true,
  bottom: true,
}
export type DropdownMenuSideType = keyof typeof DropdownMenuSide

export const DropdownMenuAlign = {
  center: true,
  start: true,
  end: true,
}
export type DropdownMenuAlignType = keyof typeof DropdownMenuAlign

export const DropdownMenuDirection = {
  ltr: true,
  rtl: true,
}
export type DropdownMenuDirectionType = keyof typeof DropdownMenuDirection

export type DropdownMenuData = MenuDataItem[]
export interface DropdownMenuProps extends MenuProps {
  triggerContent?: React.ReactNode
  iconColor?: ColorsType
  iconSize?: number

  direction?: DropdownMenuDirectionType
  modal?: boolean
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void

  loop?: boolean
  onCloseAutoFocus?: (event: Event) => void
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: () => void
  onFocusOutside?: () => void
  onInteractOutside?: () => void
  side?: DropdownMenuSideType
  sideOffset?: number
  align?: DropdownMenuAlignType
  alignOffset?: number
  avoidCollisions?: boolean
  collisionPadding?: number
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  data,
  triggerContent,
  iconColor,
  onOpenChange,
  styles,
  modal,
  iconSize,
  open,
  direction,
  defaultOpen,
  loop,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
  collisionPadding,
}) => {
  const theme = useTheme()

  return (
    <>
      <DropdownMenuPrimitive.Root
        modal={modal}
        open={open}
        onOpenChange={onOpenChange}
        dir={direction}
        defaultOpen={defaultOpen}
      >
        {triggerContent ? (
          <DropdownMenuPrimitive.Trigger asChild>
            <IconButton>{triggerContent}</IconButton>
          </DropdownMenuPrimitive.Trigger>
        ) : (
          <DropdownMenuPrimitive.Trigger asChild>
            <IconButton>
              <IconByName
                name="bx:dots-vertical-rounded"
                size={iconSize}
                color={iconColor || 'BLACK_LIGHT'}
              />
            </IconButton>
          </DropdownMenuPrimitive.Trigger>
        )}

        <DropdownMenuPrimitive.Portal className={theme}>
          <Content
            css={styles?.content}
            loop={loop}
            onCloseAutoFocus={onCloseAutoFocus}
            onEscapeKeyDown={onEscapeKeyDown}
            onPointerDownOutside={onPointerDownOutside}
            onFocusOutside={onFocusOutside}
            onInteractOutside={onInteractOutside}
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            avoidCollisions={avoidCollisions}
            collisionPadding={collisionPadding}
          >
            <DropdownMenuData data={data} styles={styles} />
          </Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </>
  )
}

interface DropdownMenuDataProps {
  data: MenuData
  styles?: MenuStylesType
}

const DropdownMenuData: React.FC<DropdownMenuDataProps> = ({
  data,
  styles,
}) => {
  return (
    <>
      {data
        .map((data) => ({
          ...data,
          items: data.items.filter((item) => !item.hide),
        }))
        .filter((data) => data.items.length > 0)
        .map((data, dataIndex) => {
          const res: React.ReactNode[] = []

          if (dataIndex > 0) {
            res.push(
              <Separator
                key={`separator-${dataIndex}`}
                css={styles?.separator}
              />
            )
          }

          if (data.label) {
            res.push(
              <Label key={`label-${dataIndex}`} css={data?.style}>
                {data.label}
              </Label>
            )
          }

          for (let i = 0; i < data.items.length; i++) {
            const item = data.items[i]

            if (item.type === 'item') {
              res.push(
                <Item
                  key={`item-${dataIndex}-${i}`}
                  disabled={item?.disabled}
                  onClick={item.onClick}
                  css={{
                    color: item.colorHex || `$${item.color}` || 'GRAY_DARKER',
                    ...item?.styles?.container,
                  }}
                >
                  {item.loading ? (
                    <ItemIndicator forceMount css={item?.styles?.indicator}>
                      <ClipLoader
                        size={16}
                        color={item.iconColor || item.color}
                        colorHex={
                          item.iconColorHex || item.colorHex || 'GRAY_DARKER'
                        }
                      />
                    </ItemIndicator>
                  ) : (
                    item.Icon && (
                      <ItemIndicator forceMount css={item?.styles?.indicator}>
                        <item.Icon
                          size={16}
                          color={item.iconColor || item.color}
                          colorHex={
                            item.iconColorHex || item.colorHex || 'GRAY_DARKER'
                          }
                        />
                      </ItemIndicator>
                    )
                  )}
                  <Span css={item?.styles?.label}>{item.label}</Span>
                  <RightSlot
                    css={{
                      ...item?.styles?.rightSlot,
                    }}
                  >
                    {item.rightSlot}
                  </RightSlot>
                </Item>
              )
            }

            if (item.type === 'checkbox') {
              res.push(
                <CheckboxItem
                  key={`checkbox-${dataIndex}-${i}`}
                  disabled={item?.disabled}
                  checked={item.checked}
                  onCheckedChange={item.onCheckedChange}
                  css={item?.styles?.container}
                >
                  <ItemIndicator css={item?.styles?.indicator}>
                    <IconByName name="bx:check" size={16} color="GRAY_DARKER" />
                  </ItemIndicator>
                  <Span css={item?.styles?.label}>{item.label}</Span>
                  <RightSlot css={item?.styles?.rightSlot}>
                    {item.rightSlot}
                  </RightSlot>
                </CheckboxItem>
              )
            }

            if (item.type === 'radio') {
              res.push(
                <RadioGroup
                  key={`radio-${dataIndex}-${i}`}
                  value={item.value}
                  onValueChange={item.onValueChange}
                  css={item?.styles?.container}
                >
                  {item.radios.map((radio, radioIndex) => (
                    <RadioItem
                      key={`radio-${dataIndex}-${i}-${radioIndex}`}
                      disabled={radio?.disabled}
                      value={radio.value}
                      css={radio?.styles?.container}
                    >
                      <ItemIndicator css={radio?.styles?.indicator}>
                        <IconByName
                          name="bxs:circle"
                          size={8}
                          color="GRAY_DARKER"
                        />
                      </ItemIndicator>
                      <Span css={radio?.styles?.label}>{radio.label}</Span>
                      <RightSlot css={radio?.styles?.rightSlot}>
                        {radio.rightSlot}
                      </RightSlot>
                    </RadioItem>
                  ))}
                </RadioGroup>
              )
            }

            if (item.type === 'menu') {
              res.push(
                <DropdownMenuPrimitive.Sub key={`menu-${dataIndex}-${i}`}>
                  <SubTrigger>
                    {item.label}
                    <RightSlot>
                      <IconByName
                        name="bxs:chevron-right"
                        color="GRAY_DARK"
                        size={20}
                      />
                    </RightSlot>
                  </SubTrigger>
                  <SubContent>
                    {<DropdownMenuData data={item.data} styles={styles} />}
                  </SubContent>
                </DropdownMenuPrimitive.Sub>
              )
            }
          }

          return res
        })}
    </>
  )
}

DropdownMenu.defaultProps = {
  iconSize: 24,
  modal: false,
  defaultOpen: false,
  loop: false,
  avoidCollisions: false,
}
