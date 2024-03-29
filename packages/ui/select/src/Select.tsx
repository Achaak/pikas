import type {
  PikasRadius,
  PikasCSS,
  PikasColor,
  PikasShadow,
  PikasFontSize,
} from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';

import type { IconCSS } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { Description, Label, TextError } from '@pikas-ui/text';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import type { TooltipCSS } from '@pikas-ui/tooltip';
import { Tooltip } from '@pikas-ui/tooltip';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const SelectContainer = styled(SelectPrimitive.Root, {});

const Trigger = styled(SelectPrimitive.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  cursor: 'pointer',
  borderStyle: 'solid',
  width: '100%',
  color: '$black',

  '&[data-placeholder]': {
    color: '$gray-dark',
  },

  variants: {
    padding: {
      none: {
        padding: 0,
      },
      xs: {
        padding: '4px 8px',
      },
      sm: {
        padding: '6px 12px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '12px 24px',
      },
      xl: {
        padding: '16px 32px',
      },
    },
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$primary',
        outlineWidth: 2,
      },
    },
  },
});

const SelectValue = styled(SelectPrimitive.Value, {});

const Icon = styled(SelectPrimitive.Icon, {
  marginLeft: 4,
});

const Content = styled(SelectPrimitive.Content, {
  backgroundColor: '$white',
  boxShadow: '$bottom-md',
  borderRadius: '$sm',
  zIndex: '$3x-high',
});

const Viewport = styled(SelectPrimitive.Viewport, {
  padding: 4,
});

const Group = styled(SelectPrimitive.Group, {});

const scrollButtonCSS: PikasCSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  cursor: 'default',
};

const ScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonCSS);

const ScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonCSS
);

const ItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Separator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$gray-lighter',
  margin: 8,
});

const GroupLabel = styled(SelectPrimitive.Label, {
  padding: '4px 16px 4px 24px',
  fontWeight: '$medium',
  fontSize: '$em-small',
  color: '$black',
});

const Item = styled(SelectPrimitive.Item, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  padding: '4px 16px 4px 24px',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: 'all 100ms',
  fontSize: '$em-small',
  color: '$black',

  '&[data-disabled]': {
    opacity: 0.5,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$primary-lighter',
    color: '$white',
    fill: '$white',
  },
});

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
  color: '$black',
});

const Required = styled('div', {
  color: '$warning',
  marginLeft: 4,
});

export type SelectItem = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  searchValue?: string;
  hidden?: boolean;
};

export const selectDirections = {
  ltr: true,
  rtl: true,
} as const;
export type SelectDirections = keyof typeof selectDirections;

export const selectPadding = {
  none: true,
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type SelectPadding = keyof typeof selectPadding;

export type SelectCSS = {
  container?: PikasCSS;
  trigger?: PikasCSS;
  infoTooltip?: TooltipCSS;
  infoIcon?: IconCSS;
  required?: PikasCSS;
  label?: PikasCSS;
  description?: PikasCSS;
  textError?: PikasCSS;
  content?: PikasCSS;
};

export type SelectData = Array<{
  name?: string;
  hidden?: boolean;
  items: SelectItem[];
}>;

export type SelectProps = {
  css?: SelectCSS;
  label?: ReactNode | string;
  borderRadius?: PikasRadius;
  padding?: SelectPadding;
  fontSize?: PikasFontSize;
  borderColorName?: PikasColor;
  borderWidth?: number;
  data: SelectData;
  id?: string;
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  ariaLabel?: string;
  textError?: string;
  direction?: SelectDirections;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  boxShadow?: PikasShadow | 'none';
  backgroundColorName?: PikasColor;
  outline?: boolean;
  description?: string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  info?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

export type SelectRef = {
  setValue: (value: string) => void;
};

export const Select = forwardRef<SelectRef, SelectProps>(
  (
    {
      data,
      css,
      onChange,
      defaultValue,
      label,
      id,
      ariaLabel,
      borderRadius = 'md',
      padding = 'md',
      textError,
      direction,
      onOpenChange,
      defaultOpen,
      borderColorName = 'transparent',
      borderWidth = 0,
      fontSize = 'em-base',
      boxShadow = 'inner-sm',
      backgroundColorName = 'gray-lightest-1',
      outline = true,
      description,
      maxWidth = '100%',
      width = '100%',
      minWidth,
      info,
      required = false,
      disabled = false,
      value,
      placeholder,
    },
    ref
  ) => {
    const [valueState, setValueState] = useState<string | undefined>(
      defaultValue ?? undefined
    );
    const [focus, setFocus] = useState(false);
    const theme = useTheme();

    useEffect(() => {
      if (value) {
        setValueState(value);
      }
    }, [value]);

    const handleChange = (newValue: string): void => {
      onChange?.(newValue);
      setValueState(newValue);
    };

    useImperativeHandle(ref, () => ({
      setValue: (newValue: string): void => {
        handleChange(newValue);
      },
    }));

    const handleOpenChange = (open: boolean): void => {
      onOpenChange?.(open);
    };

    const viewport = useMemo(
      () => (
        <Viewport>
          {data.map((group, groupIndex) => {
            const res = [];
            const hidden = !group.items.some((item) => !item.hidden);

            if (groupIndex > 0 && !hidden && !data[groupIndex - 1]?.hidden) {
              res.push(<Separator key={`separator-${groupIndex}`} />);
            }

            res.push(
              <Group
                key={groupIndex}
                css={{
                  ...(hidden ? { display: 'none' } : {}),
                }}
              >
                {group.name ? <GroupLabel>{group.name}</GroupLabel> : null}
                {group.items.map((item, itemIndex) => (
                  <Item
                    key={itemIndex}
                    value={item.value}
                    disabled={item.disabled}
                    css={{
                      ...(item.hidden ? { display: 'none' } : {}),
                    }}
                  >
                    <SelectPrimitive.ItemText>
                      {item.label}
                    </SelectPrimitive.ItemText>
                    <ItemIndicator>
                      <IconByName name="bx:check" size={20} colorName="black" />
                    </ItemIndicator>
                  </Item>
                ))}
              </Group>
            );

            return res;
          })}
        </Viewport>
      ),
      [data]
    );

    return (
      <Container
        css={{
          fontSize: `$${fontSize}`,
          width,
          maxWidth,
          minWidth,
          opacity: disabled ? 0.5 : 1,
          ...css?.container,
        }}
      >
        {label ? (
          <LabelContainer>
            <Label
              htmlFor={id}
              css={{
                ...css?.label,
              }}
            >
              {label}
            </Label>

            {required ? (
              <Required
                css={{
                  ...css?.required,
                }}
              >
                *
              </Required>
            ) : null}
            {info ? (
              <Tooltip content={info} css={css?.infoTooltip}>
                <IconByName
                  name="bx:info-circle"
                  colorName="black-light"
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

        <SelectContainer
          defaultValue={defaultValue}
          onValueChange={handleChange}
          dir={direction}
          onOpenChange={handleOpenChange}
          defaultOpen={defaultOpen}
          value={valueState}
          css={{
            ...css?.container,
          }}
          disabled={disabled}
          required={required}
        >
          <Trigger
            aria-label={ariaLabel}
            padding={padding}
            focus={outline ? focus : undefined}
            onFocus={(): void => setFocus(true)}
            onBlur={(): void => setFocus(false)}
            css={{
              borderRadius: `$${borderRadius}`,
              borderColor: `$${borderColorName}`,
              borderWidth,
              boxShadow: `$${boxShadow}`,
              backgroundColor: `$${backgroundColorName}`,
              ...css?.trigger,
            }}
          >
            <SelectValue placeholder={placeholder} />
            <Icon>
              <IconByName name="bx:chevron-down" size="1em" colorName="black" />
            </Icon>
          </Trigger>

          <SelectPrimitive.Portal>
            <Content css={css?.content} className={theme}>
              <ScrollUpButton>
                <IconByName name="bx:chevron-up" size={20} colorName="black" />
              </ScrollUpButton>

              {viewport}

              <ScrollDownButton>
                <IconByName
                  name="bx:chevron-down"
                  size={20}
                  colorName="black"
                />
              </ScrollDownButton>
            </Content>
          </SelectPrimitive.Portal>
        </SelectContainer>

        {textError ? (
          <TextError css={{ marginTop: 5, ...css?.textError }}>
            {textError}
          </TextError>
        ) : null}
      </Container>
    );
  }
);

Select.displayName = 'Select';
