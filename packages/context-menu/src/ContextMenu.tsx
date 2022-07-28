import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { styled } from '@pikas-ui/styles'

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
import React from 'react'

const Content = styled(ContextMenuPrimitive.Content, {
  ...MenuContentStyle,
})

const Item = styled(ContextMenuPrimitive.Item, {
  ...MenuItemStyles,
})
const CheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
  ...MenuCheckboxItemStyle,
})
const RadioGroup = styled(ContextMenuPrimitive.RadioGroup)
const RadioItem = styled(ContextMenuPrimitive.RadioItem, {
  ...MenuRadioItemStyle,
})
const SubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  ...MenuItemStyles,
})
const SubContent = styled(ContextMenuPrimitive.SubContent, {
  ...MenuContentStyle,
})

const Label = styled(ContextMenuPrimitive.Label, {
  ...MenuLabelStyle,
})

const Separator = styled(ContextMenuPrimitive.Separator, {
  ...MenuSeparatorStyle,
})

const ItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  ...MenuItemIndicatorStyle,
})

const Arrow = styled(ContextMenuPrimitive.Arrow, {
  ...MenuItemIndicatorStyle,
})

const RightSlot = styled('div', {
  ...RightSlotStyle,
})

const Span = styled('span', {
  ...SpanStyle,
})

export const ContextMenuDirection = {
  ltr: true,
  rtl: true,
}
export type ContextMenuDirectionType = keyof typeof ContextMenuDirection

export type ContextMenuData = MenuDataItem[]
export interface ContextMenuProps extends MenuProps {
  children?: React.ReactNode

  onOpenChange?: (open: boolean) => void
  modal?: boolean

  loop?: boolean
  direction?: ContextMenuDirectionType
  onCloseAutoFocus?: (event: Event) => void
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: () => void
  onFocusOutside?: () => void
  onInteractOutside?: () => void
  alignOffset?: number
  avoidCollisions?: boolean
  collisionPadding?: number
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  data,
  children,
  styles,
  onOpenChange,
  modal,
  loop,
  direction,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  alignOffset,
  avoidCollisions,
  collisionPadding,
}) => {
  return (
    <ContextMenuPrimitive.Root
      onOpenChange={onOpenChange}
      modal={modal}
      dir={direction}
    >
      <ContextMenuPrimitive.Trigger>{children}</ContextMenuPrimitive.Trigger>

      <Content
        css={styles?.content}
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
        <ContextMenuData data={data} styles={styles} />
        <Arrow />
      </Content>
    </ContextMenuPrimitive.Root>
  )
}

interface ContextMenuDataProps {
  data: MenuData
  styles?: MenuStylesType
}

const ContextMenuData: React.FC<ContextMenuDataProps> = ({ data, styles }) => {
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
              <Separator key={`separator-${dataIndex}`} css={styles?.content} />
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
                <ContextMenuPrimitive.Sub key={`menu-${dataIndex}-${i}`}>
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
                    {<ContextMenuData data={item.data} styles={styles} />}
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

ContextMenu.defaultProps = {
  modal: true,
  loop: false,
  avoidCollisions: true,
}
