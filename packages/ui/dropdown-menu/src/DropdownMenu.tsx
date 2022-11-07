import {
  Content as DropdownMenuContent,
  Item as DropdownMenuItem,
  CheckboxItem as DropdownMenuCheckboxItem,
  RadioGroup as DropdownMenuRadioGroup,
  RadioItem as DropdownMenuRadioItem,
  SubTrigger as DropdownMenuSubTrigger,
  SubContent as DropdownMenuSubContent,
  Label as DropdownMenuLabel,
  Separator as DropdownMenuSeparator,
  ItemIndicator as DropdownMenuItemIndicator,
  Sub as DropdownMenuSub,
  Root as DropdownMenuRoot,
  Trigger as DropdownMenuTrigger,
  Portal as DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';

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
import { ReactNode, FC } from 'react';

const Content = styled(DropdownMenuContent, {
  ...MenuContentCSS,
});

const Item = styled(DropdownMenuItem, {
  ...MenuItemCSS,
});
const CheckboxItem = styled(DropdownMenuCheckboxItem, {
  ...MenuCheckboxItemCSS,
});
const RadioGroup = styled(DropdownMenuRadioGroup);
const RadioItem = styled(DropdownMenuRadioItem, {
  ...MenuRadioItemCSS,
});
const SubTrigger = styled(DropdownMenuSubTrigger, {
  ...MenuItemCSS,
});
const SubContent = styled(DropdownMenuSubContent, {
  ...MenuContentCSS,
});

const Label = styled(DropdownMenuLabel, {
  ...MenuLabelCSS,
});

const Separator = styled(DropdownMenuSeparator, {
  ...MenuSeparatorCSS,
});

const ItemIndicator = styled(DropdownMenuItemIndicator, {
  ...MenuItemIndicatorCSS,
});

const IconButton = styled('div', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

const Span = styled('span', {
  ...SpanCSS,
});

const RightSlot = styled('div', {
  ...RightSlotCSS,
});

export const dropdownMenuSide = {
  left: true,
  right: true,
  top: true,
  bottom: true,
} as const;
export type DropdownMenuSide = keyof typeof dropdownMenuSide;

export const dropdownMenuAlign = {
  center: true,
  start: true,
  end: true,
} as const;
export type DropdownMenuAlign = keyof typeof dropdownMenuAlign;

export const dropdownMenuDirection = {
  ltr: true,
  rtl: true,
} as const;
export type DropdownMenuDirection = keyof typeof dropdownMenuDirection;

export type DropdownMenuCSS = MenuCSS;
export type DropdownMenuDataItem = MenuDataItem;
export type DropdownMenuDataItemEntry = ItemEntry;
export type DropdownMenuData = MenuDataItem[];

type DropdownMenuDataProps = {
  data: MenuData;
  css?: DropdownMenuCSS;
};

const DropdownMenuDataElement: FC<DropdownMenuDataProps> = ({ data, css }) => (
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
            <Separator key={`separator-${dIndex}`} css={css?.separator} />
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
                      colorName={
                        item.iconColorName ?? item.colorName ?? 'GRAY_DARKER'
                      }
                      colorHex={item.iconColorHex ?? item.colorHex}
                    />
                  </ItemIndicator>
                ) : (
                  item.Icon && (
                    <ItemIndicator forceMount css={item.css?.indicator}>
                      <item.Icon
                        size={16}
                        colorName={
                          item.iconColorName ?? item.colorName ?? 'GRAY_DARKER'
                        }
                        colorHex={item.iconColorHex ?? item.colorHex}
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
                    colorName={
                      item.iconColorName ?? item.colorName ?? 'GRAY_DARKER'
                    }
                    colorHex={item.iconColorHex ?? item.colorHex}
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
                        colorName={
                          item.iconColorName ?? item.colorName ?? 'GRAY_DARKER'
                        }
                        colorHex={item.iconColorHex ?? item.colorHex}
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
              <DropdownMenuSub key={`menu-${dIndex}-${i}`}>
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
                      colorName={
                        item.iconColorName ?? item.colorName ?? 'GRAY_DARKER'
                      }
                      colorHex={item.iconColorHex ?? item.colorHex}
                      size={20}
                    />
                  </RightSlot>
                </SubTrigger>
                <SubContent>
                  {<DropdownMenuDataElement data={item.data} css={css} />}
                </SubContent>
              </DropdownMenuSub>
            );
          }
        }

        return res;
      })}
  </>
);

export type DropdownMenuProps = MenuProps & {
  triggerContent?: ReactNode;
  iconColorName?: PikasColor;
  iconSize?: number;

  direction?: DropdownMenuDirection;
  modal?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  loop?: boolean;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: () => void;
  onFocusOutside?: () => void;
  onInteractOutside?: () => void;
  side?: DropdownMenuSide;
  sideOffset?: number;
  align?: DropdownMenuAlign;
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number;
};

export const DropdownMenu: FC<DropdownMenuProps> = ({
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
}) => {
  const theme = useTheme();

  return (
    <>
      <DropdownMenuRoot
        modal={modal}
        open={open}
        onOpenChange={onOpenChange}
        dir={direction}
        defaultOpen={defaultOpen}
      >
        {triggerContent ? (
          <DropdownMenuTrigger asChild>
            <IconButton>{triggerContent}</IconButton>
          </DropdownMenuTrigger>
        ) : (
          <DropdownMenuTrigger asChild>
            <IconButton>
              <IconByName
                name="bx:dots-vertical-rounded"
                size={iconSize}
                colorName={iconColorName ?? 'BLACK_LIGHT'}
              />
            </IconButton>
          </DropdownMenuTrigger>
        )}

        <DropdownMenuPortal>
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
            <DropdownMenuDataElement data={data} css={css} />
          </Content>
        </DropdownMenuPortal>
      </DropdownMenuRoot>
    </>
  );
};
