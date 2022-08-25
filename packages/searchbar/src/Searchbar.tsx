import { ButtonIcon } from '@pikas-ui/button'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import { ClipLoader } from '@pikas-ui/loader'
import { Separator } from '@pikas-ui/separator'
import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { TextfieldProps, TextfieldStylesType } from '@pikas-ui/textfield'
import { Textfield } from '@pikas-ui/textfield'
import React, { useEffect, useState, useRef } from 'react'
import * as usehook from 'usehooks-ts'

const { useDebounce, useOnClickOutside, useWindowSize } = usehook

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

const Result = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  backgroundColor: '$WHITE',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '$GRAY',
  br: 'md',
  boxShadow: '$ELEVATION_1',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.2s ease-in-out',
  maxHeight: 300,
  overflowY: 'auto',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
    direction: {
      down: {
        top: '100%',
      },
      up: {
        bottom: '100%',
      },
    },
  },
})

const SearchResultContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
})

const ResultGroup = styled('div', {})

const ResultGroupTitle = styled('span', {
  fontWeight: '$BOLD',
  padding: '16px 16px 8px 16px',
  color: '$BLACK',
})

const ResultItem = styled('div', {
  padding: '8px 16px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$GRAY_LIGHTER',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$GRAY_LIGHTER',
      },
    },
  },
})

const NoResult = styled('div', {
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$BLACK',
})

const ResultLoading = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
})

const DirectResultValue = styled('span', {
  color: '$BLACK',
})

const SearchIcon: React.FC<IconProps> = ({ ...props }) => (
  <IconByName name="bx:search" {...props} />
)

export const SearchbarDirection = {
  up: true,
  down: false,
}
export type SearchbarDirection = typeof SearchbarDirection

export type ResultItemType = {
  content: React.ReactNode
  onClick?: () => void
}

export type ResultGroupType = {
  title?: string
  items: ResultItemType[]
}

type ResultGroupWithIdType = {
  title?: string
  items: (ResultItemType & { id: number })[]
}

export type SearchbarStylesType = {
  container?: CSS
  resultContainer?: CSS
  noResult?: CSS
  resultItem?: CSS
  textfield?: TextfieldStylesType
  resultGroup?: CSS
  resultGroupTitle?: CSS
}

export interface SearchbarProps<T> {
  searchFunction: (value: string) => Promise<T>
  onSearch: (value: T) => ResultGroupType[] | null
  searchType?: 'button' | 'textfield'
  isOpen?: boolean
  id?: string
  searchWhenKeyUp?: boolean
  debounceDelay?: number
  textfield?: TextfieldProps
  styles?: SearchbarStylesType
  noResult?: React.ReactNode
  loading?: React.ReactNode
  direction?: SearchbarDirection
  width?: string | number
  maxWidth?: string | number
  minWidth?: string | number
  directResult?: {
    enabled: boolean
    onClick?: (value?: string) => void
  }
}

export const Searchbar = <T,>({
  onSearch,
  searchFunction,
  searchType,
  isOpen: isOpenProp,
  id,
  searchWhenKeyUp,
  styles,
  textfield,
  debounceDelay,
  loading: loadingProp,
  noResult,
  direction: directionProp,
  width,
  maxWidth,
  minWidth,
  directResult,
}: SearchbarProps<T>): JSX.Element => {
  const [result, setResult] = useState<ResultGroupWithIdType[]>()
  const [textfieldValue, setTextfieldValue] = useState<string>()
  const [nbItems, setNbItems] = useState(0)
  const [isOpen, setIsOpen] = useState(isOpenProp)
  const [loading, setLoading] = useState(loadingProp)
  const [direction, setDirection] = useState(directionProp)
  const [selectionId, setSelectionId] = useState(0)
  const debouncedValue = useDebounce(textfieldValue, debounceDelay)
  const refContainer = useRef<HTMLFormElement | null>(null)
  const refTextfield = useRef<HTMLInputElement | null>(null)
  const refResult = useRef<HTMLDivElement | null>(null)
  const refItem = useRef<(HTMLDivElement | null)[]>([])
  useOnClickOutside(refContainer, () => setIsOpen(false))
  const [outerHeight, setOuterHeight] = useState<number>()
  const windowSize = useWindowSize()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    setOuterHeight(window.outerHeight)
  }, [windowSize])

  const getResultFormat = (
    result: ResultGroupType[] | null
  ): ResultGroupWithIdType[] => {
    if (!result) return []

    let i = directResult?.enabled ? 1 : 0
    const resultFormat: ResultGroupWithIdType[] = []

    result.forEach((group) => {
      const items: (ResultItemType & { id: number })[] = []
      group.items.forEach((item) => {
        items.push({
          ...item,
          id: i,
        })
        i++
      })
      resultFormat.push({
        title: group.title,
        items,
      })
    })

    setNbItems(i)

    return resultFormat
  }

  const handleSearch = async (): Promise<void> => {
    if (!textfieldValue) return

    refItem.current = []
    const res = await searchFunction(textfieldValue)
    const resOnSearch = onSearch(res)
    setResult(getResultFormat(resOnSearch))
    setLoading(false)
  }

  useEffect(() => {
    setIsOpen(isOpenProp)
  }, [isOpenProp])

  useEffect(() => {
    setLoading(loadingProp)
  }, [loadingProp])

  useEffect(() => {
    setDirection(directionProp)
  }, [directionProp])

  useEffect(() => {
    if (searchWhenKeyUp) {
      handleSearch()
    }
  }, [debouncedValue])

  const handleAddSelectionId = (): void => {
    setSelectionId((ls) => {
      const currentItemArray = Object.values(refItem.current)
      const newId = Math.min(
        ls + 1,
        currentItemArray?.length ? currentItemArray?.length - 1 : 0
      )
      const currentItem = currentItemArray[newId]
      const currentResult = refResult.current
      if (
        currentItem &&
        currentResult &&
        currentItem.offsetTop + currentItem.offsetHeight >
          currentResult.scrollTop + currentResult.offsetHeight
      ) {
        currentResult.scrollTo({
          top:
            currentItem.offsetTop -
            currentResult.offsetHeight +
            currentItem.offsetHeight,
          behavior: 'smooth',
        })
      }
      return newId
    })
  }

  const handleRemoveSelectionId = (): void => {
    setSelectionId((ls) => {
      const currentItemArray = Object.values(refItem.current)
      const newId = Math.max(ls - 1, 0)
      const currentItem = currentItemArray[newId]
      const currentResult = refResult.current

      if (
        currentItem &&
        currentResult &&
        currentItem.offsetTop < currentResult.scrollTop
      ) {
        currentResult.scrollTo({
          top: currentItem.offsetTop,
          behavior: 'smooth',
        })
      }
      return newId
    })
  }

  return (
    <Form
      onSubmit={(e): void => {
        e.preventDefault()
        handleSearch()
      }}
      css={{
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
        ...styles?.container,
      }}
      ref={refContainer}
    >
      <Textfield
        {...textfield}
        ref={refTextfield}
        autoComplete="off"
        onChange={(e): void => {
          setIsOpen(true)
          setSelectionId(0)
          setLoading(true)
          textfield?.onChange?.(e)
          setTextfieldValue(e.target.value)

          if (!searchWhenKeyUp) {
            setIsOpen(false)
          }
        }}
        id={id || 'searchbar'}
        rightChildren={
          searchType === 'button' ? (
            <ButtonIcon
              Icon={SearchIcon}
              borderRadius="round"
              type="submit"
              size={5}
              padding="xs"
            />
          ) : undefined
        }
        RightIcon={searchType !== 'button' ? SearchIcon : undefined}
        onFocus={(e): void => {
          textfield?.onFocus?.(e)
          if (!textfieldValue) return
          setIsOpen(true)
        }}
        onKeyDown={(e): void => {
          textfield?.onKeyDown?.(e)
          if (loading && !directResult?.enabled) return

          switch (e.key) {
            case 'Enter':
              if (isOpen) {
                refItem.current[selectionId]?.click()
                refTextfield.current?.blur()
                setIsOpen(false)
              }
              break

            case 'ArrowDown':
              handleAddSelectionId()
              break

            case 'ArrowUp':
              handleRemoveSelectionId()
              break

            default:
              break
          }
        }}
        styles={{
          right: {
            paddingTop: 0,
            paddingBottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...styles?.textfield?.right,
          },
          ...styles?.textfield,
        }}
      />
      <Result
        ref={refResult}
        isOpen={isOpen}
        css={styles?.resultContainer}
        direction={
          direction ||
          (outerHeight &&
            outerHeight / 2 < (refContainer.current?.offsetTop || 0))
            ? 'up'
            : 'down'
        }
      >
        {directResult?.enabled && textfieldValue ? (
          <ResultItem
            ref={(ref): void => {
              refItem.current[0] = ref
            }}
            onClick={(): void => {
              directResult?.onClick?.(textfieldValue)
              setIsOpen(false)
            }}
            selected={selectionId === 0}
            css={styles?.resultItem}
          >
            <DirectResultValue>{textfieldValue}</DirectResultValue>
          </ResultItem>
        ) : null}

        <SearchResultContainer>
          {loading ? (
            <ResultLoading>
              <ClipLoader size={40} color="PRIMARY" />
            </ResultLoading>
          ) : nbItems && result ? (
            result.map((group, groupIndex) => {
              const res = []

              if (group.title && group.items.length) {
                res.push(
                  <ResultGroupTitle
                    key={`${groupIndex}-title`}
                    css={styles?.resultGroupTitle}
                  >
                    {group.title}
                  </ResultGroupTitle>
                )
              }

              res.push(
                <ResultGroup key={groupIndex} css={styles?.resultGroup}>
                  {group.items.map((item, itemIndex) => {
                    const res = []

                    if (itemIndex) {
                      res.push(
                        <Separator size={1} key={`${itemIndex}-separator`} />
                      )
                    }

                    res.push(
                      <ResultItem
                        ref={(ref): void => {
                          refItem.current[item.id] = ref
                        }}
                        key={itemIndex}
                        onClick={(): void => {
                          item.onClick?.()
                          setIsOpen(false)
                        }}
                        selected={selectionId === item.id}
                        css={styles?.resultItem}
                      >
                        {item.content}
                      </ResultItem>
                    )

                    return res
                  })}
                </ResultGroup>
              )

              return res
            })
          ) : (
            <NoResult css={styles?.noResult}>{noResult}</NoResult>
          )}
        </SearchResultContainer>
      </Result>
    </Form>
  )
}

Searchbar.defaultProps = {
  searchType: 'button',
  isOpen: false,
  debounceDelay: 500,
  loading: false,
  noResult: 'No result',
  width: '100%',
  maxWidth: '100%',
}
