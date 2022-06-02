import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { ColorsType } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React, { useState } from 'react'

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
  ...MenuItemStyles,
})
const TriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  ...MenuRadioItemStyle,
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

export type DropdownMenuDatas = MenuDatas & Record<string, unknown>
export interface DropdownMenuProps extends MenuProps {
  stayOpen?: boolean
  triggerContent?: React.ReactNode
  iconColor?: ColorsType
  openChange?: (open: boolean) => void
  iconSize?: number
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  datas,
  triggerItemLabel,
  triggerContent,
  stayOpen,
  iconColor,
  openChange,
  styles,
  iconSize,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (value: boolean): void => {
    setOpen(value)
    openChange?.(value)
  }

  return (
    <>
      <DropdownMenuPrimitive.Root
        open={stayOpen || open}
        onOpenChange={handleOpenChange}
      >
        {triggerItemLabel ? (
          <TriggerItem>
            {triggerItemLabel}
            <RightSlot>
              <IconByName
                name="bxs:chevron-right"
                color="GRAY_DARK"
                size={20}
              />
            </RightSlot>
          </TriggerItem>
        ) : triggerContent ? (
          <DropdownMenuPrimitive.Trigger asChild>
            <IconButton>{triggerContent}</IconButton>
          </DropdownMenuPrimitive.Trigger>
        ) : (
          <DropdownMenuPrimitive.Trigger asChild>
            <IconButton>
              <IconByName
                name="bx:dots-vertical-rounded"
                size={iconSize}
                color={iconColor || 'BLACK_LIGHTER'}
              />
            </IconButton>
          </DropdownMenuPrimitive.Trigger>
        )}

        <Content sideOffset={5} css={styles?.content}>
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
                        color: `$${item.color}`,
                        ...item?.styles?.container,
                      }}
                    >
                      {item.loading ? (
                        <ItemIndicator forceMount css={item?.styles?.indicator}>
                          <ClipLoader
                            size={16}
                            color={item.color || 'GRAY_DARKER'}
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
                              color={item.color || 'GRAY_DARKER'}
                            />
                          </ItemIndicator>
                        )
                      )}
                      <Span css={item?.styles?.label}>{item.label}</Span>
                      <RightSlot
                        css={{
                          color: `$${item.color}`,
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
                  res.push(
                    <DropdownMenu
                      key={`menu-${dataIndex}-${i}`}
                      datas={item.datas}
                      triggerItemLabel={item.label}
                      css={radio?.styles?.container}
                    />
                  )
                }
              }

              return res
            })}
        </Content>
      </DropdownMenuPrimitive.Root>
    </>
  )
}

DropdownMenu.defaultProps = {
  iconSize: 24,
}
