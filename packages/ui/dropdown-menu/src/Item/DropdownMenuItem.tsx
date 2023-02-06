import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { styled } from '@pikas-ui/styles';
import { ClipLoader } from '@pikas-ui/loader';
import {
  DefaultItem,
  MenuItemCSS,
  MenuItemIndicatorCSS,
  RightSlotCSS,
  SpanCSS,
} from '@pikas-ui/menu';
import { FC, useState } from 'react';

const Item = styled(DropdownMenuPrimitive.Item, {
  ...MenuItemCSS,
});

const ItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  ...MenuItemIndicatorCSS,
});

const RightSlot = styled('div', {
  ...RightSlotCSS,
});

const Span = styled('span', {
  ...SpanCSS,
});

export const DropdownMenuItem: FC<DefaultItem> = ({
  label,
  Icon,
  colorHex,
  colorName,
  iconColorHex,
  iconColorName,
  loading,
  rightSlot,
  onClick,
  css,
  disabled,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick?.();
    setIsLoading(false);
  };

  return (
    <Item
      disabled={disabled}
      onClick={() => {
        void handleClick();
      }}
      css={{
        color:
          colorHex ??
          (colorName ? `$${colorName}` : undefined) ??
          'gray-darker',
        ...css?.container,
      }}
    >
      {loading || isLoading ? (
        <ItemIndicator forceMount css={css?.indicator}>
          <ClipLoader
            size={16}
            colorName={iconColorName ?? colorName ?? 'gray-darker'}
            colorHex={iconColorHex ?? colorHex}
          />
        </ItemIndicator>
      ) : (
        Icon && (
          <ItemIndicator forceMount css={css?.indicator}>
            <Icon
              size={16}
              colorName={iconColorName ?? colorName ?? 'gray-darker'}
              colorHex={iconColorHex ?? colorHex}
            />
          </ItemIndicator>
        )
      )}
      <Span css={css?.label}>{label}</Span>
      <RightSlot
        css={{
          ...css?.rightSlot,
        }}
      >
        {rightSlot}
      </RightSlot>
    </Item>
  );
};
