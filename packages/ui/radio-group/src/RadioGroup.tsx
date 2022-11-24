import type { PikasCSS, PikasFontSize } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { Description, Label, TextError } from '@pikas-ui/text';
import type { ReactNode } from 'react';
import {
  Root as RadioGroupPrimitiveRoot,
  Item as RadioGroupPrimitiveItem,
  Indicator as RadioGroupPrimitiveIndicator,
} from '@radix-ui/react-radio-group';
import { FC } from 'react';
import { Tooltip, TooltipCSS } from '@pikas-ui/tooltip';
import { IconByName, IconCSS } from '@pikas-ui/icons';
import { Label as LabelRadixUI } from '@radix-ui/react-label';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
});

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingTop: 8,
  paddingBottom: 8,
});

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
});

const Required = styled('div', {
  color: '$WARNING',
  marginLeft: 4,
});

const Root = styled(RadioGroupPrimitiveRoot, {
  display: 'flex',

  "&[data-orientation='vertical']": {
    flexDirection: 'column',
    customRowGap: 8,
  },
  "&[data-orientation='horizontal']": {
    flexDirection: 'row',
    customColumnGap: 8,
  },
});

const RadioGroupItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  customColumnGap: 8,
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
});

const RadioGroupItem = styled(RadioGroupPrimitiveItem, {
  all: 'unset',
  width: 16,
  height: 16,
  backgroundColor: '$WHITE_FIX',
  br: 'round',
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: '$GRAY',

  variants: {
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
      },
    },
  },
});

const RadioGroupItemLabel = styled(LabelRadixUI, {
  fontSize: '$EM-SMALL',
  cursor: 'unset',
});

const Indicator = styled(RadioGroupPrimitiveIndicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '""',
    width: 8,
    height: 8,
    br: 'round',
    backgroundColor: '$PRIMARY',
  },
});

export const radioGroupDirection = {
  ltr: true,
  rtl: true,
} as const;
export type RadioGroupDirection = keyof typeof radioGroupDirection;

export const radioGroupOrientation = {
  horizontal: true,
  vertical: true,
} as const;
export type RadioGroupOrientation = keyof typeof radioGroupOrientation;

export type RadioGroupCSS = {
  container?: PikasCSS;
  label?: PikasCSS;
  description?: PikasCSS;
  textError?: PikasCSS;
  element?: PikasCSS;
  infoIcon?: IconCSS;
  required?: PikasCSS;
  infoTooltip?: TooltipCSS;
  radioGroup?: PikasCSS;
  radioGroupItemContainer?: PikasCSS;
  radioGroupItem?: PikasCSS;
  radioGroupItemLabel?: PikasCSS;
  radioGroupItemIndicator?: PikasCSS;
};

export type RadioGroupItem = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  required?: boolean;
};

export type RadioGroupProps = {
  id?: string;
  label?: ReactNode | string;
  textError?: string;
  fontSize?: PikasFontSize;
  className?: string;
  description?: string;
  info?: ReactNode;
  required?: boolean;
  css?: RadioGroupCSS;
  data: RadioGroupItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => Promise<void> | void;
  disabled?: boolean;
  name?: string;
  orientation?: RadioGroupOrientation;
  dir?: RadioGroupDirection;
  loop?: boolean;
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
              css={css?.radioGroupItem}
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
