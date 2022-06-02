import type { ReactElement } from 'react'
import React from 'react'

import { styled, theme } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'
import { IconByName } from '@pikas-ui/icons'
import { Select } from '@pikas-ui/select'

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
})

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const LeftSpan = styled('span', {
  marginRight: 8,
  fontSize: '$EM-SMALL',
})

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const PageNumber = styled('button', {
  all: 'unset',
  marginLeft: 2,
  marginRight: 2,
  fontSize: '$EM-SMALL',
  br: 'round',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 24,
  width: 24,
  cursor: 'pointer',

  variants: {
    selected: {
      true: {
        backgroundColor: '$PRIMARY',
        color: fontColorContrast(theme.colors['PRIMARY'].value, 0.7),
      },
    },
  },
})

const ButtonArrow = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

const ButtonArrowLeft = styled(ButtonArrow, {
  marginRight: 8,
})

const ButtonArrowRight = styled(ButtonArrow, {
  marginLeft: 8,
})

export interface PaginationProps {
  previousPage: () => void
  nextPage: () => void
  setPageSize: (pageSize: number) => void
  canPreviousPage: boolean
  canNextPage: boolean
  pageIndex: number
  pageCount: number
  setPageIndex: (pageIndex: number) => void
  selectValue: number[]
  defaultPageSize: number
}

export const Pagination: React.FC<PaginationProps> = ({
  nextPage,
  previousPage,
  setPageSize,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageCount,
  setPageIndex,
  defaultPageSize,
  selectValue,
}) => {
  const getNumber = (): React.ReactNode => {
    const pagesBtn: Array<ReactElement> = []

    let start = pageIndex
    // Add previous
    start -= pageIndex >= 5 ? 4 : pageIndex
    // Add more previous
    if (pageCount > 5) {
      start -= pageIndex > pageCount - 5 ? 5 - (pageCount - pageIndex) : 0
    }

    let end = pageIndex
    // Add more
    end += pageIndex < pageCount - 5 ? 5 : pageCount - 1 - pageIndex + 1
    // Add more next
    if (pageCount > 5) {
      end += pageIndex < 4 ? 4 - pageIndex : 0
    }

    for (let i = start; i < end; i++) {
      if (i >= 0 && i < pageCount) {
        pagesBtn.push(
          <PageNumber
            key={i}
            onClick={(): void => setPageIndex(i)}
            selected={i === pageIndex}
          >
            {i + 1}
          </PageNumber>
        )
      }
    }

    return pagesBtn
  }

  return (
    <Footer>
      <Left>
        <LeftSpan>Show</LeftSpan>
        <Select
          data={[
            {
              items: selectValue.map((pageSize) => ({
                label: `${pageSize}`,
                value: `${pageSize}`,
              })),
            },
          ]}
          defaultValue={`${defaultPageSize}`}
          onChange={(value): void => {
            setPageSize(Number(value))
          }}
          padding="sm"
          fontSize="EM-SMALL"
        />
      </Left>
      <Right>
        <ButtonArrowLeft
          onClick={(): void => setPageIndex(0)}
          disabled={!canPreviousPage}
        >
          <IconByName name="bx:chevrons-left" size="1em" />
        </ButtonArrowLeft>
        <ButtonArrowLeft onClick={previousPage} disabled={!canPreviousPage}>
          <IconByName name="bx:chevron-left" size="1em" />
        </ButtonArrowLeft>
        {getNumber()}
        <ButtonArrowRight onClick={nextPage} disabled={!canNextPage}>
          <IconByName name="bx:chevron-right" size="1em" />
        </ButtonArrowRight>
        <ButtonArrowRight
          onClick={(): void => setPageIndex(pageCount - 1)}
          disabled={!canNextPage}
        >
          <IconByName name="bx:chevrons-right" size="1em" />
        </ButtonArrowRight>
      </Right>
    </Footer>
  )
}
