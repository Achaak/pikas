import {
  ItemIndicator as DropdownMenuItemIndicator,
  RadioGroup as DropdownMenuRadioGroup,
  RadioItem as DropdownMenuRadioItem,
} from '@radix-ui/react-dropdown-menu';
import { styled } from '@pikas-ui/styles';
import {
  MenuItemIndicatorCSS,
  MenuRadioItemCSS,
  RadioItem,
  RightSlotCSS,
  SpanCSS,
} from '@pikas-ui/menu';
import { FC } from 'react';
import { IconByName } from '@pikas-ui/icons';

const RadioGroup = styled(DropdownMenuRadioGroup);
const RadioItemStyled = styled(DropdownMenuRadioItem, {
  ...MenuRadioItemCSS,
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

export const DropdownMenuRadio: FC<RadioItem> = ({
  onValueChange,
  radios,
  css,
  value,
  colorHex,
  colorName,
  iconColorHex,
  iconColorName,
}) => (
  <RadioGroup
    value={value}
    css={{
      color:
        colorHex ?? (colorName ? `$${colorName}` : undefined) ?? 'GRAY_DARKER',
      ...css?.container,
    }}
    onValueChange={onValueChange}
  >
    {radios.map((radio, radioIndex) => (
      <RadioItemStyled
        key={`radio-${radioIndex}`}
        disabled={radio.disabled}
        value={radio.value}
        css={radio.css?.container}
      >
        <ItemIndicator css={radio.css?.indicator}>
          <IconByName
            name="bxs:circle"
            size={8}
            colorName={iconColorName ?? colorName ?? 'GRAY_DARKER'}
            colorHex={iconColorHex ?? colorHex}
          />
        </ItemIndicator>
        <Span css={radio.css?.label}>{radio.label}</Span>
        <RightSlot css={radio.css?.rightSlot}>{radio.rightSlot}</RightSlot>
      </RadioItemStyled>
    ))}
  </RadioGroup>
);
