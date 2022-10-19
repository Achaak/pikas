import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

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
import React from 'react'

const Content = styled(ContextMenuPrimitive.Content, {
  ...MenuContentCSS,
})

const Item = styled(ContextMenuPrimitive.Item, {
  ...MenuItemCSS,
})
const CheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
  ...MenuCheckboxItemCSS,
})
const RadioGroup = styled(ContextMenuPrimitive.RadioGroup)
const RadioItem = styled(ContextMenuPrimitive.RadioItem, {
  ...MenuRadioItemCSS,
})
const SubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  ...MenuItemCSS,
})
const SubContent = styled(ContextMenuPrimitive.SubContent, {
  ...MenuContentCSS,
})

const Label = styled(ContextMenuPrimitive.Label, {
  ...MenuLabelCSS,
})

const Separator = styled(ContextMenuPrimitive.Separator, {
  ...MenuSeparatorCSS,
})

const ItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  ...MenuItemIndicatorCSS,
})

const Arrow = styled(ContextMenuPrimitive.Arrow, {
  ...MenuItemIndicatorCSS,
})

const RightSlot = styled('div', {
  ...RightSlotCSS,
})

const Span = styled('span', {
  ...SpanCSS,
})

export const contextMenuDirection = {
  ltr: true,
  rtl: true,
} as const
export type ContextMenuDirection = keyof typeof contextMenuDirection

export type ContextMenuCSS<Config extends PikasConfigRecord = any> =
  MenuCSS<Config>
export type ContextMenuDataItem<Config extends PikasConfigRecord = any> =
  MenuDataItem<Config>
export type ContextMenuDataItemEntry<Config extends PikasConfigRecord = any> =
  ItemEntry<Config>
export type ContextMenuData<Config extends PikasConfigRecord = any> =
  MenuDataItem<Config>[]
export interface ContextMenuProps<Config extends PikasConfigRecord = any>
  extends MenuProps<Config> {
  children?: React.ReactNode

  onOpenChange?: (open: boolean) => void
  modal?: boolean

  loop?: boolean
  direction?: ContextMenuDirection
  onCloseAutoFocus?: (event: Event) => void
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: () => void
  onFocusOutside?: () => void
  onInteractOutside?: () => void
  alignOffset?: number
  avoidCollisions?: boolean
  collisionPadding?: number
}

export const ContextMenu = <Config extends PikasConfigRecord>({
  data,
  children,
  css,
  onOpenChange,
  modal = true,
  loop = false,
  direction,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  alignOffset,
  avoidCollisions = true,
  collisionPadding,
}: ContextMenuProps<Config>): JSX.Element => {
  return (
    <ContextMenuPrimitive.Root
      onOpenChange={onOpenChange}
      modal={modal}
      dir={direction}
    >
      <ContextMenuPrimitive.Trigger>{children}</ContextMenuPrimitive.Trigger>

      <Content
        css={css?.content}
        loop={loop}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onFocusOutside={onFocusOutside}
        onInteractOutside={onInteractOutside}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        collisionPadding={collisionPadding}
      >
        <ContextMenuData data={data} css={css} />
        <Arrow />
      </Content>
    </ContextMenuPrimitive.Root>
  )
}

interface ContextMenuDataProps<Config extends PikasConfigRecord = any> {
  data: MenuData<Config>
  css?: ContextMenuCSS<Config>
}

const ContextMenuData = <Config extends PikasConfigRecord>({
  data,
  css,
}: ContextMenuDataProps<Config>): JSX.Element => {
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
              <Separator key={`separator-${dataIndex}`} css={css?.content} />
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
                      item.colorHex || `$${item.colorName}` || 'GRAY_DARKER',
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
                    color:
                      item.colorHex || `$${item.colorName}` || 'GRAY_DARKER',
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
                  onValueChange={item.onValueChange}
                  css={{
                    color:
                      item.colorHex || `$${item.colorName}` || 'GRAY_DARKER',
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
                <ContextMenuPrimitive.Sub key={`menu-${dataIndex}-${i}`}>
                  <SubTrigger
                    css={{
                      color:
                        item.colorHex || `$${item.colorName}` || 'GRAY_DARKER',
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
                    {<ContextMenuData data={item.data} css={css} />}
                  </SubContent>
                </ContextMenuPrimitive.Sub>
              )
            }
          }

          return res
        })}
    </>
  )
}
