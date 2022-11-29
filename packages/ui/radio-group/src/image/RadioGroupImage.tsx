import { BorderRadius, styled } from '@pikas-ui/styles';
import { Description, Label, TextError } from '@pikas-ui/text';
import { ReactNode, useState, FC, useEffect } from 'react';
import { Tooltip } from '@pikas-ui/tooltip';
import { IconByName, IconCSS } from '@pikas-ui/icons';
import { RadioGroupBaseProps, RadioGroupCSS } from '../types.js';
import { Item } from '../components/Item/Item.js';
import { Container } from '../components/container/Container.js';
import { LabelContainer } from '../components/labelContainer/LabelContainer.js';
import { Required } from '../components/required/Required.js';
import { Root } from '../components/root/Root.js';
import { RadioGroupItemContainer } from '../components/radioGroupItemContainer/RadioGroupItemContainer.js';
import { RadioGroupItemLabel } from '../components/radioGroupItemLabel/RadioGroupItemLabel.js';
import { RadioGroupItem } from '../components/radioGroupItem/RadioGroupItem.js';
import { Indicator as RadioGroupPrimitiveIndicator } from '@radix-ui/react-radio-group';

const RadioGroupItemImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Indicator = styled(RadioGroupPrimitiveIndicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$PRIMARY',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.5,
});

export type RadioGroupImageItem = {
  value: string;
  imageSrc: string;
  label?: ReactNode;
  disabled?: boolean;
  required?: boolean;
};

export type RadioGroupImageCSS = RadioGroupCSS & {
  radioGroupItemIndicatorIcon?: IconCSS;
};

export type RadioGroupImageProps = RadioGroupBaseProps & {
  data: RadioGroupImageItem[];
  borderRadius?: BorderRadius;
  imageWidth?: number | string;
  imageHeight?: number | string;
  css?: RadioGroupImageCSS;
};

export const RadioGroupImage: FC<RadioGroupImageProps> = ({
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
  borderRadius = 'md',
  imageWidth = 40,
  imageHeight = 40,
  flexWrap,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultValue ?? '');

  const handleChange = (newValue: string) => {
    setCurrentValue(newValue);
    void onChange?.(newValue);
  };

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (defaultValue) {
      setCurrentValue(defaultValue);
    }
  }, [defaultValue]);

  return (
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
          value={currentValue}
          onValueChange={handleChange}
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
                  br: borderRadius,
                  width: imageWidth,
                  height: imageHeight,
                  overflow: 'hidden',
                  position: 'relative',

                  ...css?.radioGroupItem,

                  borderColor:
                    item.value === currentValue ? '$PRIMARY' : undefined,
                }}
              >
                <RadioGroupItemImage src={item.imageSrc} />

                <Indicator css={css?.radioGroupItemIndicator}>
                  <IconByName
                    name="bx:check"
                    colorName="WHITE_FIX"
                    css={{
                      container: {
                        width: '75%',
                        height: '75%',
                        ...css?.radioGroupItemIndicatorIcon?.container,
                      },
                      svg: {
                        width: '100%',
                        height: '100%',
                        ...css?.radioGroupItemIndicatorIcon?.svg,
                      },
                    }}
                  />
                </Indicator>
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
};
