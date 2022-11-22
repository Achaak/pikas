import {
  ItemIndicator as ContextMenuItemIndicator,
  RadioGroup as ContextMenuRadioGroup,
  RadioItem as ContextMenuRadioItem,
} from '@radix-ui/react-context-menu';
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

const RadioGroup = styled(ContextMenuRadioGroup);
const RadioItemStyled = styled(ContextMenuRadioItem, {
  ...MenuRadioItemCSS,
});

const ItemIndicator = styled(ContextMenuItemIndicator, {
  ...MenuItemIndicatorCSS,
});

const RightSlot = styled('div', {
  ...RightSlotCSS,
});

const Span = styled('span', {
  ...SpanCSS,
});

export const ContextMenuRadio: FC<RadioItem> = ({
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
