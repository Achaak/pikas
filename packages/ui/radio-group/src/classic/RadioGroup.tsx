import { styled } from '@pikas-ui/styles';
import { Description, Label, TextError } from '@pikas-ui/text';
import type { ReactNode } from 'react';
import { Indicator as RadioGroupPrimitiveIndicator } from '@radix-ui/react-radio-group';
import { FC } from 'react';
import { Tooltip } from '@pikas-ui/tooltip';
import { IconByName } from '@pikas-ui/icons';
import { RadioGroupBaseProps, RadioGroupCSS } from '../types.js';
import { Item } from '../components/Item/Item.js';
import { Container } from '../components/container/Container.js';
import { LabelContainer } from '../components/labelContainer/LabelContainer.js';
import { Required } from '../components/required/Required.js';
import { Root } from '../components/root/Root.js';
import { RadioGroupItemContainer } from '../components/radioGroupItemContainer/RadioGroupItemContainer.js';
import { RadioGroupItemLabel } from '../components/radioGroupItemLabel/RadioGroupItemLabel.js';
import { RadioGroupItem } from '../components/radioGroupItem/RadioGroupItem.js';

const Indicator = styled(RadioGroupPrimitiveIndicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',

  '&::after': {
    content: '""',
    width: 8,
    height: 8,
    br: 'round',
    backgroundColor: '$PRIMARY',
  },
});

export type RadioGroupItem = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  required?: boolean;
};

export type RadioGroupProps = RadioGroupBaseProps & {
  data: RadioGroupItem[];
  css?: RadioGroupCSS;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  id,
  label,
  textError,
  fontSize = 'EM-MEDIUM',
  className,
  description,
  css,
  required,
  info,
  data,
  defaultValue,
  value,
  onChange,
  disabled,
  name,
  orientation = 'vertical',
  dir = 'ltr',
  loop = false,
  flexWrap,
}) => (
  <Container
    className={className}
    css={{
      fontSize: `$${fontSize}`,
      ...css?.container,
    }}
    disabled={disabled}
  >
    {label ? (
      <LabelContainer>
        <Label htmlFor={id} css={css?.label}>
          {label}
        </Label>

        {required ? <Required css={css?.required}>*</Required> : null}
        {info ? (
          <Tooltip content={info} css={css?.infoTooltip}>
            <IconByName
              name="bx:info-circle"
              colorName="BLACK_LIGHT"
              css={{
                container: {
                  marginLeft: 4,
                  ...css?.infoIcon?.container,
                },
                svg: {
                  ...css?.infoIcon?.svg,
                },
              }}
            />
          </Tooltip>
        ) : null}
      </LabelContainer>
    ) : null}

    {description ? (
      <Description
        css={{
          marginBottom: 4,
          ...css?.description,
        }}
      >
        {description}
      </Description>
    ) : null}

    <Item
      css={{
        ...css?.element,
      }}
    >
      <Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        name={name}
        orientation={orientation}
        dir={dir}
        loop={loop}
        css={css?.radioGroup}
        flexWrap={flexWrap}
      >
        {data.map((item, index) => (
          <RadioGroupItemContainer
            key={index}
            disabled={item.disabled}
            css={css?.radioGroupItemContainer}
          >
            <RadioGroupItem
              value={item.value}
              id={item.value}
              disabled={item.disabled}
              required={item.required}
              css={{
                width: 16,
                height: 16,
                br: 'round',
                ...css?.radioGroupItem,
              }}
            >
              <Indicator css={css?.radioGroupItemIndicator} />
            </RadioGroupItem>
            <RadioGroupItemLabel
              htmlFor={item.value}
              css={css?.radioGroupItemLabel}
            >
              {item.label}
            </RadioGroupItemLabel>
          </RadioGroupItemContainer>
        ))}
      </Root>
    </Item>

    {textError ? (
      <TextError css={{ marginTop: 5, ...css?.textError }}>
        {textError}
      </TextError>
    ) : null}
  </Container>
);
