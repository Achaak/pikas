import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { styled, theme } from '@pikas-ui/styles'

import { ClipLoader } from '@pikas-ui/loader'
import type { MenuDatas, MenuProps } from '@pikas-ui/menu'
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
  ...MenuItemStyles,
})
const TriggerItem = styled(ContextMenuPrimitive.TriggerItem, {
  ...MenuRadioItemStyle,
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

export type ContextMenuDatas = MenuDatas & Record<string, unknown>
export interface ContextMenuProps extends MenuProps {
  children?: React.ReactNode

  onOpenChange?: (open: boolean) => void
  modal?: boolean

  allowPinchZoom?: boolean
  loop?: boolean
  direction?: ContextMenuDirectionType
  onCloseAutoFocus?: (event: Event) => void
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: () => void
  onFocusOutside?: () => void
  onInteractOutside?: () => void
  sideOffset?: number
  alignOffset?: number
  avoidCollisions?: boolean
  collisionTolerance?: number
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  datas,
  triggerItemLabel,
  children,
  styles,
  onOpenChange,
  modal,
  allowPinchZoom,
  loop,
  direction,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  sideOffset,
  alignOffset,
  avoidCollisions,
  collisionTolerance,
}) => {
  return (
    <ContextMenuPrimitive.Root onOpenChange={onOpenChange} modal={modal}>
      {triggerItemLabel ? (
        <TriggerItem>
          {triggerItemLabel}
          <RightSlot>
            <IconByName name="bx:chevron-right" color="GRAY_DARK" size={20} />
          </RightSlot>
        </TriggerItem>
      ) : (
        <ContextMenuPrimitive.Trigger asChild>
          {children}
        </ContextMenuPrimitive.Trigger>
      )}

      <Content
        css={styles?.content}
        allowPinchZoom={allowPinchZoom}
        loop={loop}
        dir={direction}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onFocusOutside={onFocusOutside}
        onInteractOutside={onInteractOutside}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        collisionTolerance={collisionTolerance}
      >
        {datas
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
                  css={styles?.content}
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

            res.push(
              <>
                {data.items.map((item, itemIndex) => {
                  if (item.type === 'item') {
                    return (
                      <Item
                        key={`item-${dataIndex}-${itemIndex}`}
                        disabled={item?.disabled}
                        onClick={item.onClick}
                        css={{
                          color:
                            item.colorHex || `$${item.color}` || 'GRAY_DARKER',
                          ...item?.styles?.container,
                        }}
                      >
                        {item.loading ? (
                          <ItemIndicator
                            forceMount
                            css={item?.styles?.indicator}
                          >
                            <ClipLoader
                              size={16}
                              colorHex={
                                item.iconColorHex ||
                                (item.iconColor
                                  ? theme.colors[item.iconColor].value
                                  : undefined) ||
                                item.colorHex ||
                                (item.color
                                  ? theme.colors[item.color].value
                                  : undefined) ||
                                'GRAY_DARKER'
                              }
                            />
                          </ItemIndicator>
                        ) : (
                          item.Icon && (
                            <ItemIndicator
                              forceMount
                              css={item?.styles?.indicator}
                            >
                              <item.Icon
                                size={16}
                                colorHex={
                                  item.iconColorHex ||
                                  (item.iconColor
                                    ? theme.colors[item.iconColor].value
                                    : undefined) ||
                                  item.colorHex ||
                                  (item.color
                                    ? theme.colors[item.color].value
                                    : undefined) ||
                                  'GRAY_DARKER'
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
                    return (
                      <CheckboxItem
                        key={`checkbox-${dataIndex}-${itemIndex}`}
                        disabled={item?.disabled}
                        checked={item.checked}
                        onCheckedChange={item.onCheckedChange}
                        css={item?.styles?.container}
                      >
                        <ItemIndicator css={item?.styles?.indicator}>
                          <IconByName
                            name="bx:check"
                            size={16}
                            color="GRAY_DARKER"
                          />
                        </ItemIndicator>
                        <Span css={item?.styles?.label}>{item.label}</Span>
                        <RightSlot css={item?.styles?.rightSlot}>
                          {item.rightSlot}
                        </RightSlot>
                      </CheckboxItem>
                    )
                  }

                  if (item.type === 'radio') {
                    return (
                      <RadioGroup
                        key={`radio-${dataIndex}-${itemIndex}`}
                        value={item.value}
                        onValueChange={item.onValueChange}
                        css={item?.styles?.container}
                      >
                        {item.radios.map((radio, radioIndex) => (
                          <RadioItem
                            key={`radio-${dataIndex}-${itemIndex}-${radioIndex}`}
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
                            <Span css={radio?.styles?.label}>{item.label}</Span>
                            <RightSlot css={radio?.styles?.rightSlot}>
                              {radio.rightSlot}
                            </RightSlot>
                          </RadioItem>
                        ))}
                      </RadioGroup>
                    )
                  }

                  if (item.type === 'menu') {
                    return (
                      <ContextMenu
                        key={`menu-${dataIndex}-${itemIndex}`}
                        datas={item.datas}
                        triggerItemLabel={item.label}
                      />
                    )
                  }

                  return <></>
                })}
              </>
            )

            return res
          })}

        {triggerItemLabel ? undefined : <Arrow />}
      </Content>
    </ContextMenuPrimitive.Root>
  )
}

ContextMenu.defaultProps = {
  modal: false,
  allowPinchZoom: false,
  loop: false,
  avoidCollisions: false,
}
