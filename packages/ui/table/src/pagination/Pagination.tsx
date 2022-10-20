import type { ReactElement } from 'react'
import React from 'react'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme, styled } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'
import { IconByName } from '@pikas-ui/icons'
import type { SelectCSS } from '@pikas-ui/select'
import { Select } from '@pikas-ui/select'

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
  paddingBottom: 2,
})

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
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

export interface PaginationCSS<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  container?: Config['CSS']
  leftContainer?: Config['CSS']
  rightContainer?: Config['CSS']
  pageNumber?: Config['CSS']
  pageNumberActive?: Config['CSS']
  select?: SelectCSS<Config>
  buttonChevronsLeft?: Config['CSS']
  buttonChevronsRight?: Config['CSS']
  buttonChevronLeft?: Config['CSS']
  buttonChevronRight?: Config['CSS']
}

export interface PaginationProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
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
  css?: PaginationCSS<Config>
}

export const Pagination = <Config extends PikasConfigRecord>({
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
  css,
}: PaginationProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

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
            css={{
              ...css?.pageNumber,
              ...(i === pageIndex && {
                backgroundColor: '$PRIMARY',
                color:
                  (theme &&
                    fontColorContrast(theme.colors['PRIMARY'].value, 0.7)) ||
                  undefined,
                ...css?.pageNumberActive,
              }),
            }}
          >
            {i + 1}
          </PageNumber>
        )
      }
    }

    return pagesBtn
  }

  return (
    <Footer css={css?.container}>
      <Left css={css?.leftContainer}>
        <Select<Config>
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
          css={css?.select}
        />
      </Left>
      <Right css={css?.rightContainer}>
        <ButtonArrowLeft
          onClick={(): void => setPageIndex(0)}
          disabled={!canPreviousPage}
          css={css?.buttonChevronsLeft}
        >
          <IconByName name="bx:chevrons-left" size="1em" />
        </ButtonArrowLeft>
        <ButtonArrowLeft
          onClick={previousPage}
          disabled={!canPreviousPage}
          css={css?.buttonChevronLeft}
        >
          <IconByName name="bx:chevron-left" size="1em" />
        </ButtonArrowLeft>
        {getNumber()}
        <ButtonArrowRight
          onClick={nextPage}
          disabled={!canNextPage}
          css={css?.buttonChevronRight}
        >
          <IconByName name="bx:chevron-right" size="1em" />
        </ButtonArrowRight>
        <ButtonArrowRight
          onClick={(): void => setPageIndex(pageCount - 1)}
          disabled={!canNextPage}
          css={css?.buttonChevronsRight}
        >
          <IconByName name="bx:chevrons-right" size="1em" />
        </ButtonArrowRight>
      </Right>
    </Footer>
  )
}
