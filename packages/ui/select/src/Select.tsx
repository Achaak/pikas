import type {
  BorderRadius,
  PikasCSS,
  PikasColor,
  PikasShadow,
  PikasFontSize,
} from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';

import type { IconCSS } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { Description, Label, TextError } from '@pikas-ui/text';
import {
  Root as SelectPrimitiveRoot,
  Trigger as SelectPrimitiveTrigger,
  Value as SelectPrimitiveValue,
  Icon as SelectPrimitiveIcon,
  Content as SelectPrimitiveContent,
  Viewport as SelectPrimitiveViewport,
  Group as SelectPrimitiveGroup,
  ScrollUpButton as SelectPrimitiveScrollUpButton,
  ScrollDownButton as SelectPrimitiveScrollDownButton,
  ItemIndicator as SelectPrimitiveItemIndicator,
  Separator as SelectPrimitiveSeparator,
  Label as SelectPrimitiveLabel,
  Item as SelectPrimitiveItem,
  ItemText as SelectPrimitiveItemText,
  Portal as SelectPrimitivePortal,
} from '@radix-ui/react-select';
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
import { Textfield } from '@pikas-ui/textfield';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const SelectContainer = styled(SelectPrimitiveRoot, {});

const Trigger = styled(SelectPrimitiveTrigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  cursor: 'pointer',
  borderStyle: 'solid',
  width: '100%',
  color: '$BLACK',

  variants: {
    padding: {
      none: {
        padding: 0,
      },
      xs: {
        padding: '2px 4px',
      },
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
    },
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
      },
    },
  },
});

const SelectValue = styled(SelectPrimitiveValue, {});

const Icon = styled(SelectPrimitiveIcon, {
  marginLeft: 4,
});

const Content = styled(SelectPrimitiveContent, {
  backgroundColor: '$WHITE',
  boxShadow: '$ELEVATION_1',
  br: 'sm',
  zIndex: '$XXX-HIGH',
});

const Viewport = styled(SelectPrimitiveViewport, {
  padding: 4,
});

const Group = styled(SelectPrimitiveGroup, {});

const scrollButtonCSS: PikasCSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  cursor: 'default',
};

const ScrollUpButton = styled(SelectPrimitiveScrollUpButton, scrollButtonCSS);

const ScrollDownButton = styled(
  SelectPrimitiveScrollDownButton,
  scrollButtonCSS
);

const ItemIndicator = styled(SelectPrimitiveItemIndicator, {
  position: 'absolute',
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Separator = styled(SelectPrimitiveSeparator, {
  height: 1,
  backgroundColor: '$GRAY_LIGHTER',
  margin: 8,
});

const GroupLabel = styled(SelectPrimitiveLabel, {
  padding: '4px 16px 4px 24px',
  fontWeight: '$MEDIUM',
  fontSize: '$EM-SMALL',
  color: '$BLACK',
});

const Item = styled(SelectPrimitiveItem, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  padding: '4px 16px 4px 24px',
  br: 'sm',
  cursor: 'pointer',
  transition: 'all 100ms',

  '&[data-disabled]': {
    opacity: 0.5,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$PRIMARY_LIGHTER',
    color: '$WHITE',
    fill: '$WHITE',
  },
});

const ItemText = styled('span', {
  fontSize: '$EM-SMALL',
  color: '$BLACK',
});

const SearchContainer = styled('div', {
  padding: 8,
});

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
  color: '$BLACK',
});

const Required = styled('div', {
  color: '$WARNING',
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

export type SelectProps = {
  css?: SelectCSS;
  hasSearch?: boolean;
  searchPlaceholder?: string;

  label?: ReactNode | string;
  borderRadius?: BorderRadius;
  padding?: SelectPadding;
  fontSize?: PikasFontSize;
  borderColorName?: PikasColor;
  borderWidth?: number;
  data: Array<{
    name?: string;
    hidden?: boolean;
    items: SelectItem[];
  }>;
  id?: string;
  onChange?: (value: string) => void;
  defaultValue: string;
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
      hasSearch,
      searchPlaceholder,
      id,
      ariaLabel,
      borderRadius = 'md',
      padding = 'md',
      textError,
      direction,
      onOpenChange,
      defaultOpen,
      borderColorName = 'TRANSPARENT',
      borderWidth = 0,
      fontSize = 'EM-MEDIUM',
      boxShadow = 'DIMINUTION_1',
      backgroundColorName = 'GRAY_LIGHTEST_1',
      outline = true,
      description,
      maxWidth = '100%',
      width = '100%',
      minWidth,
      info,
      required = false,
      disabled = false,
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = useState('');
    const [value, setValue] = useState(defaultValue || '');
    const [formattedData, setFormattedData] = useState(data);
    const [focus, setFocus] = useState(false);
    const theme = useTheme();

    useEffect(() => {
      setFormattedData(
        data.map((group) => {
          const items = group.items.map((item) => {
            let hidden = item.hidden ?? false;

            if (searchValue.length > 0) {
              if (
                item.searchValue &&
                !item.searchValue
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              ) {
                hidden = false;
              }
            }

            return {
              ...item,
              hidden,
            };
          });

          return {
            ...group,
            hidden: !items.some((item) => !item.hidden),
            items,
          };
        })
      );
    }, [data, searchValue]);

    const handleChange = (newValue: string): void => {
      onChange?.(newValue);
      setValue(newValue);
    };

    useImperativeHandle(ref, () => ({
      setValue: (newValue: string): void => {
        handleChange(newValue);
      },
    }));

    const handleOpenChange = (open: boolean): void => {
      onOpenChange?.(open);

      if (!open) {
        setSearchValue('');
      }
    };

    const viewport = useMemo(
      () => (
        <Viewport>
          {formattedData.map((group, groupIndex) => {
            const res = [];
            const hidden = !group.items.some((item) => !item.hidden);

            if (
              groupIndex > 0 &&
              !hidden &&
              !formattedData[groupIndex - 1]?.hidden
            ) {
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
                    <SelectPrimitiveItemText>
                      <ItemText>{item.label}</ItemText>
                    </SelectPrimitiveItemText>
                    <ItemIndicator>
                      <IconByName name="bx:check" size={20} colorName="BLACK" />
                    </ItemIndicator>
                  </Item>
                ))}
              </Group>
            );

            return res;
          })}
        </Viewport>
      ),
      [formattedData]
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

        <SelectContainer
          defaultValue={defaultValue}
          onValueChange={handleChange}
          dir={direction}
          onOpenChange={handleOpenChange}
          defaultOpen={defaultOpen}
          value={value}
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
              br: borderRadius,
              borderColor: `$${borderColorName}`,
              borderWidth,
              boxShadow: `$${boxShadow}`,
              backgroundColor: `$${backgroundColorName}`,
              ...css?.trigger,
            }}
          >
            <SelectValue />
            <Icon>
              <IconByName name="bx:chevron-down" size="1em" colorName="BLACK" />
            </Icon>
          </Trigger>

          <SelectPrimitivePortal>
            <Content css={css?.content} className={theme}>
              {hasSearch ? (
                <>
                  <SearchContainer>
                    <Textfield
                      onChange={(e): void => {
                        setSearchValue(e.target.value);
                      }}
                      placeholder={searchPlaceholder}
                      borderRadius="round"
                      padding="sm"
                      fontSize="EM-SMALL"
                    />
                  </SearchContainer>
                  <Separator />
                </>
              ) : null}

              <ScrollUpButton>
                <IconByName name="bx:chevron-up" size={20} colorName="BLACK" />
              </ScrollUpButton>
              {viewport}
              <ScrollDownButton>
                <IconByName
                  name="bx:chevron-down"
                  size={20}
                  colorName="BLACK"
                />
              </ScrollDownButton>
            </Content>
          </SelectPrimitivePortal>
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
