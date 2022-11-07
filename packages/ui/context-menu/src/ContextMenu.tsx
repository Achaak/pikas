import {
  Content as MenuPrimitiveContent,
  Item as MenuPrimitiveItem,
  CheckboxItem as MenuPrimitiveCheckboxItem,
  RadioGroup as MenuPrimitiveRadioGroup,
  RadioItem as MenuPrimitiveRadioItem,
  SubTrigger as MenuPrimitiveSubTrigger,
  SubContent as MenuPrimitiveSubContent,
  Label as MenuPrimitiveLabel,
  Separator as MenuPrimitiveSeparator,
  ItemIndicator as MenuPrimitiveItemIndicator,
  Root as MenuPrimitiveRoot,
  Trigger as MenuPrimitiveTrigger,
  Sub as MenuPrimitiveSub,
} from '@radix-ui/react-context-menu';
import { styled } from '@pikas-ui/styles';
import { ClipLoader } from '@pikas-ui/loader';
import type {
  MenuData,
  MenuDataItem,
  MenuProps,
  MenuCSS,
  ItemEntry,
} from '@pikas-ui/menu';
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
} from '@pikas-ui/menu';
import { IconByName } from '@pikas-ui/icons';
import { FC, ReactNode } from 'react';

const Content = styled(MenuPrimitiveContent, {
  ...MenuContentCSS,
});

const Item = styled(MenuPrimitiveItem, {
  ...MenuItemCSS,
});
const CheckboxItem = styled(MenuPrimitiveCheckboxItem, {
  ...MenuCheckboxItemCSS,
});
const RadioGroup = styled(MenuPrimitiveRadioGroup);
const RadioItem = styled(MenuPrimitiveRadioItem, {
  ...MenuRadioItemCSS,
});
const SubTrigger = styled(MenuPrimitiveSubTrigger, {
  ...MenuItemCSS,
});
const SubContent = styled(MenuPrimitiveSubContent, {
  ...MenuContentCSS,
});

const Label = styled(MenuPrimitiveLabel, {
  ...MenuLabelCSS,
});

const Separator = styled(MenuPrimitiveSeparator, {
  ...MenuSeparatorCSS,
});

const ItemIndicator = styled(MenuPrimitiveItemIndicator, {
  ...MenuItemIndicatorCSS,
});

const RightSlot = styled('div', {
  ...RightSlotCSS,
});

const Span = styled('span', {
  ...SpanCSS,
});

export const contextMenuDirection = {
  ltr: true,
  rtl: true,
} as const;
export type ContextMenuDirection = keyof typeof contextMenuDirection;

export type ContextMenuCSS = MenuCSS;
export type ContextMenuDataItem = MenuDataItem;
export type ContextMenuDataItemEntry = ItemEntry;
export type ContextMenuData = MenuDataItem[];

type ContextMenuDataProps = {
  data: MenuData;
  css?: ContextMenuCSS;
};

const ContextMenuDataElement: FC<ContextMenuDataProps> = ({ data, css }) => (
  <>
    {data
      .map((d) => ({
        ...d,
        items: d.items.filter((item) => !item.hide),
      }))
      .filter((d) => d.items.length > 0)
      .map((d, dIndex) => {
        const res: ReactNode[] = [];

        if (dIndex > 0) {
          res.push(
            <Separator key={`separator-${dIndex}`} css={css?.content} />
          );
        }

        if (d.label) {
          res.push(
            <Label key={`label-${dIndex}`} css={d.css}>
              {d.label}
            </Label>
          );
        }

        for (let i = 0; i < d.items.length; i++) {
          const item = d.items[i];

          if (item.type === 'item') {
            res.push(
              <Item
                key={`item-${dIndex}-${i}`}
                disabled={item.disabled}
                onClick={item.onClick}
                css={{
                  color:
                    item.colorHex ??
                    (item.colorName ? `$${item.colorName}` : undefined) ??
                    'GRAY_DARKER',
                  ...item.css?.container,
                }}
              >
                {item.loading ? (
                  <ItemIndicator forceMount css={item.css?.indicator}>
                    <ClipLoader
                      size={16}
                      colorName={item.iconColorName ?? item.colorName}
                      colorHex={
                        item.iconColorHex ?? item.colorHex ?? 'GRAY_DARKER'
                      }
                    />
                  </ItemIndicator>
                ) : (
                  item.Icon && (
                    <ItemIndicator forceMount css={item.css?.indicator}>
                      <item.Icon
                        size={16}
                        colorName={item.iconColorName ?? item.colorName}
                        colorHex={
                          item.iconColorHex ?? item.colorHex ?? 'GRAY_DARKER'
                        }
                      />
                    </ItemIndicator>
                  )
                )}
                <Span css={item.css?.label}>{item.label}</Span>
                <RightSlot
                  css={{
                    ...item.css?.rightSlot,
                  }}
                >
                  {item.rightSlot}
                </RightSlot>
              </Item>
            );
          }

          if (item.type === 'checkbox') {
            res.push(
              <CheckboxItem
                key={`checkbox-${dIndex}-${i}`}
                disabled={item.disabled}
                checked={item.checked}
                onCheckedChange={item.onCheckedChange}
                css={{
                  color:
                    item.colorHex ??
                    (item.colorName ? `$${item.colorName}` : undefined) ??
                    'GRAY_DARKER',
                  ...item.css?.container,
                }}
              >
                <ItemIndicator css={item.css?.indicator}>
                  <IconByName
                    name="bx:check"
                    size={16}
                    colorName={item.colorName}
                    colorHex={item.colorHex ?? 'GRAY_DARKER'}
                  />
                </ItemIndicator>
                <Span css={item.css?.label}>{item.label}</Span>
                <RightSlot css={item.css?.rightSlot}>
                  {item.rightSlot}
                </RightSlot>
              </CheckboxItem>
            );
          }

          if (item.type === 'radio') {
            res.push(
              <RadioGroup
                key={`radio-${dIndex}-${i}`}
                value={item.value}
                onValueChange={item.onValueChange}
                css={{
                  color:
                    item.colorHex ??
                    (item.colorName ? `$${item.colorName}` : undefined) ??
                    'GRAY_DARKER',
                  ...item.css?.container,
                }}
              >
                {item.radios.map((radio, radioIndex) => (
                  <RadioItem
                    key={`radio-${dIndex}-${i}-${radioIndex}`}
                    disabled={radio.disabled}
                    value={radio.value}
                    css={radio.css?.container}
                  >
                    <ItemIndicator css={radio.css?.indicator}>
                      <IconByName
                        name="bxs:circle"
                        size={8}
                        colorName={item.colorName}
                        colorHex={item.colorHex ?? 'GRAY_DARKER'}
                      />
                    </ItemIndicator>
                    <Span css={radio.css?.label}>{radio.label}</Span>
                    <RightSlot css={radio.css?.rightSlot}>
                      {radio.rightSlot}
                    </RightSlot>
                  </RadioItem>
                ))}
              </RadioGroup>
            );
          }

          if (item.type === 'menu') {
            res.push(
              <MenuPrimitiveSub key={`menu-${dIndex}-${i}`}>
                <SubTrigger
                  css={{
                    color:
                      item.colorHex ??
                      (item.colorName ? `$${item.colorName}` : undefined) ??
                      'GRAY_DARKER',
                    ...item.css?.container,
                  }}
                >
                  {item.label}
                  <RightSlot>
                    <IconByName
                      name="bxs:chevron-right"
                      colorName={item.colorName}
                      colorHex={item.colorHex ?? 'GRAY_DARKER'}
                      size={20}
                    />
                  </RightSlot>
                </SubTrigger>
                <SubContent>
                  {<ContextMenuDataElement data={item.data} css={css} />}
                </SubContent>
              </MenuPrimitiveSub>
            );
          }
        }

        return res;
      })}
  </>
);
export type ContextMenuProps = MenuProps & {
  children?: ReactNode;

  onOpenChange?: (open: boolean) => void;
  modal?: boolean;

  loop?: boolean;
  direction?: ContextMenuDirection;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: () => void;
  onFocusOutside?: () => void;
  onInteractOutside?: () => void;
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number;
};

export const ContextMenu: FC<ContextMenuProps> = ({
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
}) => (
  <MenuPrimitiveRoot onOpenChange={onOpenChange} modal={modal} dir={direction}>
    <MenuPrimitiveTrigger>{children}</MenuPrimitiveTrigger>

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
      <ContextMenuDataElement data={data} css={css} />
    </Content>
  </MenuPrimitiveRoot>
);
