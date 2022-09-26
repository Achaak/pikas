import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { Colors } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

import { ClipLoader } from '@pikas-ui/loader'
import type {
  MenuData,
  MenuDataItem,
  MenuProps,
  MenuCSS,
  ItemEntry,
} from '@pikas-ui/menu'
import {
  MenuContentCSS,
  MenuCheckboxItemCSS,
  MenuRadioItemCSS,
  MenuItemIndicatorCSS,
  MenuSeparatorCSS,
  MenuLabelCSS,
  MenuItemCSS,
  RightSlotCSS,
  SpanCSS,
} from '@pikas-ui/menu'
import { IconByName } from '@pikas-ui/icons'

const Content = styled(DropdownMenuPrimitive.Content, {
  ...MenuContentCSS,
})

const Item = styled(DropdownMenuPrimitive.Item, {
  ...MenuItemCSS,
})
const CheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...MenuCheckboxItemCSS,
})
const RadioGroup = styled(DropdownMenuPrimitive.RadioGroup)
const RadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...MenuRadioItemCSS,
})
const SubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  ...MenuItemCSS,
})
const SubContent = styled(DropdownMenuPrimitive.SubContent, {
  ...MenuContentCSS,
})

const Label = styled(DropdownMenuPrimitive.Label, {
  ...MenuLabelCSS,
})

const Separator = styled(DropdownMenuPrimitive.Separator, {
  ...MenuSeparatorCSS,
})

const ItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  ...MenuItemIndicatorCSS,
})

const IconButton = styled('div', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

const Span = styled('span', {
  ...SpanCSS,
})

const RightSlot = styled('div', {
  ...RightSlotCSS,
})

export const DropdownMenuSide = {
  left: true,
  right: true,
  top: true,
  bottom: true,
}
export type DropdownMenuSide = keyof typeof DropdownMenuSide

export const DropdownMenuAlign = {
  center: true,
  start: true,
  end: true,
}
export type DropdownMenu = keyof typeof DropdownMenuAlign

export const DropdownMenuDirection = {
  ltr: true,
  rtl: true,
}
export type DropdownMenuDirection = keyof typeof DropdownMenuDirection

export type DropdownMenuCSS = MenuCSS
export type DropdownMenuDataItem = MenuDataItem
export type DropdownMenuDataItemEntry = ItemEntry
export type DropdownMenuData = MenuDataItem[]
export interface DropdownMenuProps extends MenuProps {
  triggerContent?: React.ReactNode
  iconColor?: Colors
  iconSize?: number

  direction?: DropdownMenuDirection
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
  side?: DropdownMenuSide
  sideOffset?: number
  align?: DropdownMenu
  alignOffset?: number
  avoidCollisions?: boolean
  collisionPadding?: number
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  data,
  triggerContent,
  iconColor,
  onOpenChange,
  css,
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
            css={css?.content}
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
            <DropdownMenuData data={data} css={css} />
          </Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </>
  )
}

interface DropdownMenuDataProps {
  data: MenuData
  css?: DropdownMenuCSS
}

const DropdownMenuData: React.FC<DropdownMenuDataProps> = ({ data, css }) => {
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
              <Separator key={`separator-${dataIndex}`} css={css?.separator} />
            )
          }

          if (data.label) {
            res.push(
              <Label key={`label-${dataIndex}`} css={data?.css}>
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
                    ...item?.css?.container,
                  }}
                >
                  {item.loading ? (
                    <ItemIndicator forceMount css={item?.css?.indicator}>
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
                      <ItemIndicator forceMount css={item?.css?.indicator}>
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
                  <Span css={item?.css?.label}>{item.label}</Span>
                  <RightSlot
                    css={{
                      ...item?.css?.rightSlot,
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
                  css={{
                    color: item.colorHex || `$${item.color}` || 'GRAY_DARKER',
                    ...item?.css?.container,
                  }}
                >
                  <ItemIndicator css={item?.css?.indicator}>
                    <IconByName
                      name="bx:check"
                      size={16}
                      color={item.color}
                      colorHex={item.colorHex || 'GRAY_DARKER'}
                    />
                  </ItemIndicator>
                  <Span css={item?.css?.label}>{item.label}</Span>
                  <RightSlot css={item?.css?.rightSlot}>
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
                  css={{
                    color: item.colorHex || `$${item.color}` || 'GRAY_DARKER',
                    ...item?.css?.container,
                  }}
                >
                  {item.radios.map((radio, radioIndex) => (
                    <RadioItem
                      key={`radio-${dataIndex}-${i}-${radioIndex}`}
                      disabled={radio?.disabled}
                      value={radio.value}
                      css={radio?.css?.container}
                    >
                      <ItemIndicator css={radio?.css?.indicator}>
                        <IconByName
                          name="bxs:circle"
                          size={8}
                          color={item.color}
                          colorHex={item.colorHex || 'GRAY_DARKER'}
                        />
                      </ItemIndicator>
                      <Span css={radio?.css?.label}>{radio.label}</Span>
                      <RightSlot css={radio?.css?.rightSlot}>
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
                  <SubTrigger
                    css={{
                      color: item.colorHex || `$${item.color}` || 'GRAY_DARKER',
                      ...item?.css?.container,
                    }}
                  >
                    {item.label}
                    <RightSlot>
                      <IconByName
                        name="bxs:chevron-right"
                        color={item.color}
                        colorHex={item.colorHex || 'GRAY_DARKER'}
                        size={20}
                      />
                    </RightSlot>
                  </SubTrigger>
                  <SubContent>
                    {<DropdownMenuData data={item.data} css={css} />}
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
