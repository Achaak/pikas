import {
  Content as DropdownMenuContent,
  SubTrigger as DropdownMenuSubTrigger,
  SubContent as DropdownMenuSubContent,
  Label as DropdownMenuLabel,
  Separator as DropdownMenuSeparator,
  Sub as DropdownMenuSub,
  Root as DropdownMenuRoot,
  Trigger as DropdownMenuTrigger,
  Portal as DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import type {
  MenuData,
  MenuDataItem,
  MenuProps,
  MenuCSS,
  ItemEntry,
} from '@pikas-ui/menu';
import {
  MenuContentCSS,
  MenuSeparatorCSS,
  MenuLabelCSS,
  MenuItemCSS,
  RightSlotCSS,
} from '@pikas-ui/menu';
import { IconByName } from '@pikas-ui/icons';
import { ReactNode, FC } from 'react';
import { DropdownMenuRadio } from './Radio/index.js';
import { DropdownMenuCheckbox } from './Checkbox/index.js';
import { DropdownMenuItem } from './Item/index.js';

const Content = styled(DropdownMenuContent, {
  ...MenuContentCSS,
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

const IconButton = styled('div', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
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
              <DropdownMenuItem key={`item-${dIndex}-${i}`} {...item} />
            );
          }

          if (item.type === 'checkbox') {
            res.push(
              <DropdownMenuCheckbox key={`checkbox-${dIndex}-${i}`} {...item} />
            );
          }

          if (item.type === 'radio') {
            res.push(
              <DropdownMenuRadio key={`radio-${dIndex}-${i}`} {...item} />
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
  avoidCollisions = true,
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
