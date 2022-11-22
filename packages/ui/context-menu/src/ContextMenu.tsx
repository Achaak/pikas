import {
  Content as MenuPrimitiveContent,
  SubTrigger as MenuPrimitiveSubTrigger,
  SubContent as MenuPrimitiveSubContent,
  Label as MenuPrimitiveLabel,
  Separator as MenuPrimitiveSeparator,
  Root as MenuPrimitiveRoot,
  Trigger as MenuPrimitiveTrigger,
  Sub as MenuPrimitiveSub,
} from '@radix-ui/react-context-menu';
import { styled } from '@pikas-ui/styles';
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
import { FC, ReactNode } from 'react';
import { ContextMenuRadio } from './Radio/index.js';
import { ContextMenuCheckbox } from './Checkbox/index.js';
import { ContextMenuItem } from './Item/index.js';

const Content = styled(MenuPrimitiveContent, {
  ...MenuContentCSS,
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

const RightSlot = styled('div', {
  ...RightSlotCSS,
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
            res.push(<ContextMenuItem key={`item-${dIndex}-${i}`} {...item} />);
          }

          if (item.type === 'checkbox') {
            res.push(
              <ContextMenuCheckbox key={`checkbox-${dIndex}-${i}`} {...item} />
            );
          }

          if (item.type === 'radio') {
            res.push(
              <ContextMenuRadio key={`radio-${dIndex}-${i}`} {...item} />
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
                      colorName={
                        item.iconColorName ?? item.colorName ?? 'GRAY_DARKER'
                      }
                      colorHex={item.iconColorHex ?? item.colorHex}
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
