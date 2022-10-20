import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { PikasConfigRecord } from '@pikas-ui/styles'
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

export const dropdownMenuSide = {
  left: true,
  right: true,
  top: true,
  bottom: true,
} as const
export type DropdownMenuSide = keyof typeof dropdownMenuSide

export const dropdownMenuAlign = {
  center: true,
  start: true,
  end: true,
} as const
export type DropdownMenu = keyof typeof dropdownMenuAlign

export const dropdownMenuDirection = {
  ltr: true,
  rtl: true,
} as const
export type DropdownMenuDirection = keyof typeof dropdownMenuDirection

export type DropdownMenuCSS<
  Config extends PikasConfigRecord = PikasConfigRecord
> = MenuCSS<Config>
export type DropdownMenuDataItem<
  Config extends PikasConfigRecord = PikasConfigRecord
> = MenuDataItem<Config>
export type DropdownMenuDataItemEntry<
  Config extends PikasConfigRecord = PikasConfigRecord
> = ItemEntry<Config>
export type DropdownMenuData<
  Config extends PikasConfigRecord = PikasConfigRecord
> = MenuDataItem<Config>[]
export interface DropdownMenuProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> extends MenuProps<Config> {
  triggerContent?: React.ReactNode
  iconColorName?: keyof Config['theme']['colors']
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

export const DropdownMenu = <Config extends PikasConfigRecord>({
  data,
  triggerContent,
  iconColorName,
  onOpenChange,
  css,
  modal = false,
  iconSize = 24,
  open,
  direction,
  defaultOpen = false,
  loop = false,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions = false,
  collisionPadding,
}: DropdownMenuProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

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
              <IconByName<Config>
                name="bx:dots-vertical-rounded"
                size={iconSize}
                colorName={iconColorName || 'BLACK_LIGHT'}
              />
            </IconButton>
          </DropdownMenuPrimitive.Trigger>
        )}

        <DropdownMenuPrimitive.Portal>
          <Content
            className={theme}
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

interface DropdownMenuDataProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  data: MenuData<Config>
  css?: DropdownMenuCSS<Config>
}

const DropdownMenuData = <Config extends PikasConfigRecord>({
  data,
  css,
}: DropdownMenuDataProps<Config>): JSX.Element => {
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
                    color:
                      item.colorHex ||
                      (item.colorName && `$${item.colorName}`) ||
                      '$GRAY_DARKER',
                    ...item?.css?.container,
                  }}
                >
                  {item.loading ? (
                    <ItemIndicator forceMount css={item?.css?.indicator}>
                      <ClipLoader
                        size={16}
                        colorName={item.iconColorName || item.colorName}
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
                          colorName={item.iconColorName || item.colorName}
                          colorHex={
                            item.iconColorHex || item.colorName || 'GRAY_DARKER'
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
                    color:
                      item.colorHex ||
                      (item.colorName && `$${item.colorName}`) ||
                      '$GRAY_DARKER',
                    ...item?.css?.container,
                  }}
                >
                  <ItemIndicator css={item?.css?.indicator}>
                    <IconByName
                      name="bx:check"
                      size={16}
                      colorName={item.colorName}
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
                    color:
                      item.colorHex ||
                      (item.colorName && `$${item.colorName}`) ||
                      '$GRAY_DARKER',
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
                          colorName={item.colorName}
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
                      color:
                        item.colorHex ||
                        (item.colorName && `$${item.colorName}`) ||
                        '$GRAY_DARKER',
                      ...item?.css?.container,
                    }}
                  >
                    {item.label}
                    <RightSlot>
                      <IconByName
                        name="bxs:chevron-right"
                        colorName={item.colorName}
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
