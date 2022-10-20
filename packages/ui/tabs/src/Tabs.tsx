import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { PikasCSS } from '@pikas-ui/styles'
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
  overflow: 'auto',

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
      none: {},
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
      none: {},
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
  display: 'none',

  '&[data-state="active"]': {
    display: 'flex',
    flex: 1,
  },

  variants: {
    padding: {
      none: {},
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
    trigger?: PikasCSS
    content?: PikasCSS
  }
}

export type TabsOrientation = 'horizontal' | 'vertical'

export type TabsDirection = 'ltr' | 'rtl'

export type TabsActivationMode = 'manual' | 'automatic'

export interface TabsCSS {
  container?: PikasCSS
  triggerList?: PikasCSS
  endTrigger?: PikasCSS
  startTrigger?: PikasCSS
  trigger?: PikasCSS
  content?: PikasCSS
}

export interface TabsPadding {
  trigger?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
  content?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

export type TabsAlignmentTrigger = 'start' | 'center' | 'end' | 'stretch'

export interface TabsProps<T extends string> {
  items: TabsItem<T>[]
  defaultValue: T
  value?: string
  onValueChange?: (value: string) => void
  orientation?: TabsOrientation

  direction?: TabsDirection
  activationMode?: TabsActivationMode
  loop?: boolean
  css?: TabsCSS
  padding?: TabsPadding
  alignmentTrigger?: TabsAlignmentTrigger
  startTrigger?: React.ReactNode
  endTrigger?: React.ReactNode
}

export const Tabs = <T extends string>({
  items,
  defaultValue,
  value,
  onValueChange,
  orientation = 'vertical',
  direction = 'ltr',
  activationMode,
  loop,
  css,
  padding = {
    trigger: 'md',
    content: 'md',
  },
  alignmentTrigger = 'stretch',
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
        {items.map((item, itemKey) => {
          return (
            <Trigger
              key={itemKey}
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
      {items.map((item, itemKey) => {
        return (
          <Content
            key={itemKey}
            value={item.id}
            css={{
              ...css?.content,
              ...item?.css?.content,
            }}
            padding={padding?.content}
          >
            {item.content}
          </Content>
        )
      })}
    </Root>
  )
}
