import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
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

const RadioGroup = styled(ContextMenuPrimitive.RadioGroup);
const RadioItemStyled = styled(ContextMenuPrimitive.RadioItem, {
  ...MenuRadioItemCSS,
});

const ItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
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
        colorHex ?? (colorName ? `$${colorName}` : undefined) ?? 'gray-darker',
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
            colorName={iconColorName ?? colorName ?? 'gray-darker'}
            colorHex={iconColorHex ?? colorHex}
          />
        </ItemIndicator>
        <Span css={radio.css?.label}>{radio.label}</Span>
        <RightSlot css={radio.css?.rightSlot}>{radio.rightSlot}</RightSlot>
      </RadioItemStyled>
    ))}
  </RadioGroup>
);
