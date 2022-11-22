import {
  DropdownMenuCheckboxItem,
  ItemIndicator as DropdownMenuItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import { styled } from '@pikas-ui/styles';
import {
  CheckboxItem,
  MenuCheckboxItemCSS,
  MenuItemIndicatorCSS,
  RightSlotCSS,
  SpanCSS,
} from '@pikas-ui/menu';
import { FC } from 'react';
import { IconByName } from '@pikas-ui/icons';

const CheckboxItemStyled = styled(DropdownMenuCheckboxItem, {
  ...MenuCheckboxItemCSS,
});

const ItemIndicator = styled(DropdownMenuItemIndicator, {
  ...MenuItemIndicatorCSS,
});

const RightSlot = styled('div', {
  ...RightSlotCSS,
});

const Span = styled('span', {
  ...SpanCSS,
});

export const DropdownMenuCheckbox: FC<CheckboxItem> = ({
  checked,
  label,
  colorHex,
  colorName,
  iconColorHex,
  iconColorName,
  onCheckedChange,
  rightSlot,
  css,
  disabled,
}) => (
  <CheckboxItemStyled
    disabled={disabled}
    checked={checked}
    onCheckedChange={onCheckedChange}
    css={{
      color:
        colorHex ?? (colorName ? `$${colorName}` : undefined) ?? 'GRAY_DARKER',
      ...css?.container,
    }}
  >
    <ItemIndicator css={css?.indicator}>
      <IconByName
        name="bx:check"
        size={16}
        colorName={iconColorName ?? colorName ?? 'GRAY_DARKER'}
        colorHex={iconColorHex ?? colorHex}
      />
    </ItemIndicator>
    <Span css={css?.label}>{label}</Span>
    <RightSlot css={css?.rightSlot}>{rightSlot}</RightSlot>
  </CheckboxItemStyled>
);
