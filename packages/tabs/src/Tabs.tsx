import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Root = styled(TabsPrimitive.Root, {
  display: 'flex',
  width: '100%',

  '&[data-orientation="horizontal"]': {
    flexDirection: 'row',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
  },
})

const List = styled(TabsPrimitive.List, {
  display: 'flex',

  '&[aria-orientation="horizontal"]': {
    flexDirection: 'column',
    customRowGap: 8,
  },
  '&[aria-orientation="vertical"]': {
    flexDirection: 'row',
    customColumnGap: 8,
  },

  variants: {
    alignment: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      stretch: {
        '*': {
          flex: 1,
        },
      },
    },
  },
})

const Trigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$BLACK',
  userSelect: 'none',
  cursor: 'pointer',

  '&[data-state="active"]': {
    color: '$PRIMARY',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },

  '&[disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    padding: {
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
        padding: '16px 24px',
      },
      xl: {
        padding: '24px 32px',
      },
    },
  },
})

const TriggerExtremities = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$BLACK',

  variants: {
    padding: {
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
        padding: '16px 24px',
      },
      xl: {
        padding: '24px 32px',
      },
    },
  },
})

const StartTrigger = styled(TriggerExtremities, {})

const EndTrigger = styled(TriggerExtremities, {})

const Content = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  color: '$BLACK',

  variants: {
    padding: {
      xs: {
        padding: 4,
      },
      sm: {
        padding: 8,
      },
      md: {
        padding: 16,
      },
      lg: {
        padding: 24,
      },
      xl: {
        padding: 32,
      },
    },
  },
})

export interface TabsItem<T extends string> {
  trigger: React.ReactNode
  id: T
  content: React.ReactNode
  disabled?: boolean
  css?: {
    trigger?: CSS
    content?: CSS
  }
}

export type TabsOrientationType = 'horizontal' | 'vertical'

export type TabsDirectionType = 'ltr' | 'rtl'

export type TabsActivationModeType = 'manual' | 'automatic'

export interface TabsCSSType {
  container?: CSS
  triggerList?: CSS
  endTrigger?: CSS
  startTrigger?: CSS
  trigger?: CSS
}

export interface TabsPaddingType {
  trigger?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  content?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export type TabsAlignmentTriggerType = 'start' | 'center' | 'end' | 'stretch'

export interface TabsProps<T extends string> {
  items: TabsItem<T>[]
  defaultValue: T
  value?: string
  onValueChange?: (value: string) => void
  orientation?: TabsOrientationType

  direction?: TabsDirectionType
  activationMode?: TabsActivationModeType
  loop?: boolean
  css?: TabsCSSType
  padding?: TabsPaddingType
  alignmentTrigger?: TabsAlignmentTriggerType
  startTrigger?: React.ReactNode
  endTrigger?: React.ReactNode
}

export const Tabs = <T extends string>({
  items,
  defaultValue,
  value,
  onValueChange,
  orientation,
  direction,
  activationMode,
  loop,
  css,
  padding,
  alignmentTrigger,
  endTrigger,
  startTrigger,
}: TabsProps<T>): JSX.Element => {
  return (
    <Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      orientation={orientation}
      dir={direction}
      activationMode={activationMode}
      css={css?.container}
    >
      <List loop={loop} alignment={alignmentTrigger} css={css?.triggerList}>
        {startTrigger && (
          <StartTrigger padding={padding?.trigger} css={css?.startTrigger}>
            {startTrigger}
          </StartTrigger>
        )}
        {items.map((item) => {
          return (
            <Trigger
              value={item.id}
              disabled={item.disabled}
              css={{
                ...css?.trigger,
                ...item.css?.trigger,
              }}
              padding={padding?.trigger}
            >
              {item.trigger}
            </Trigger>
          )
        })}
        {endTrigger && (
          <EndTrigger padding={padding?.trigger} css={css?.endTrigger}>
            {endTrigger}
          </EndTrigger>
        )}
      </List>
      {items.map((item) => {
        return (
          <Content
            value={item.id}
            css={item?.css?.content}
            padding={padding?.content}
          >
            {item.content}
          </Content>
        )
      })}
    </Root>
  )
}

Tabs.defaultProps = {
  padding: {
    trigger: 'md',
    content: 'md',
  },
  alignmentTrigger: 'stretch',
  orientation: 'vertical',
  direction: 'ltr',
}
