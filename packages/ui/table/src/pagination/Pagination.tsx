import type { ReactElement } from 'react';
import type { PikasCSS } from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import { Color } from '@pikas-utils/color';
import type { SelectCSS } from '@pikas-ui/select';
import { Select } from '@pikas-ui/select';
import { ReactNode, FC } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from '../Icons';

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
  paddingBottom: 2,
});

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const PageNumber = styled('button', {
  all: 'unset',
  marginLeft: '$2',
  marginRight: '$2',
  fontSize: '$em-small',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$24',
  minWidth: '$16',
  padding: '$0 $4',
  cursor: 'pointer',
  color: '$black',
});

const ButtonArrow = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

const ButtonArrowLeft = styled(ButtonArrow, {
  marginRight: 8,
});

const ButtonArrowRight = styled(ButtonArrow, {
  marginLeft: 8,
});

export type PaginationCSS = {
  container?: PikasCSS;
  leftContainer?: PikasCSS;
  rightContainer?: PikasCSS;
  pageNumber?: PikasCSS;
  pageNumberEnabled?: PikasCSS;
  select?: SelectCSS;
  buttonChevronsLeft?: PikasCSS;
  buttonChevronsRight?: PikasCSS;
  buttonChevronLeft?: PikasCSS;
  buttonChevronRight?: PikasCSS;
};

export type PaginationProps = {
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (pageSize: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageIndex: number;
  pageCount: number;
  setPageIndex: (pageIndex: number) => void;
  pageSizes: number[];
  defaultPageSize: number;
  css?: PaginationCSS;
};

export const Pagination: FC<PaginationProps> = ({
  nextPage,
  previousPage,
  setPageSize,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageCount,
  setPageIndex,
  defaultPageSize,
  pageSizes,
  css,
}) => {
  const theme = useTheme();

  const getNumber = (): ReactNode => {
    const pagesBtn: ReactElement[] = [];

    let start = pageIndex;
    // Add previous
    start -= pageIndex >= 5 ? 4 : pageIndex;
    // Add more previous
    if (pageCount > 5) {
      start -= pageIndex > pageCount - 5 ? 5 - (pageCount - pageIndex) : 0;
    }

    let end = pageIndex;
    // Add more
    end += pageIndex < pageCount - 5 ? 5 : pageCount - 1 - pageIndex + 1;
    // Add more next
    if (pageCount > 5) {
      end += pageIndex < 4 ? 4 - pageIndex : 0;
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
                backgroundColor: '$primary',
                color:
                  theme && new Color(theme.colors.primary.value).getContrast(),
                ...css?.pageNumberEnabled,
              }),
            }}
          >
            {i + 1}
          </PageNumber>
        );
      }
    }

    return pagesBtn;
  };

  return (
    <Footer css={css?.container}>
      <Left css={css?.leftContainer}>
        <Select
          data={[
            {
              items: pageSizes.map((pageSize) => ({
                label: `${pageSize}`,
                value: `${pageSize}`,
              })),
            },
          ]}
          defaultValue={`${defaultPageSize}`}
          onChange={(value): void => {
            setPageSize(Number(value));
          }}
          padding="sm"
          fontSize="em-small"
          css={css?.select}
        />
      </Left>
      <Right css={css?.rightContainer}>
        <ButtonArrowLeft
          onClick={(): void => setPageIndex(0)}
          disabled={!canPreviousPage}
          css={css?.buttonChevronsLeft}
        >
          <ChevronsLeftIcon size="1em" colorName="black" />
        </ButtonArrowLeft>
        <ButtonArrowLeft
          onClick={previousPage}
          disabled={!canPreviousPage}
          css={css?.buttonChevronLeft}
        >
          <ChevronLeftIcon size="1em" colorName="black" />
        </ButtonArrowLeft>
        {getNumber()}
        <ButtonArrowRight
          onClick={nextPage}
          disabled={!canNextPage}
          css={css?.buttonChevronRight}
        >
          <ChevronRightIcon size="1em" colorName="black" />
        </ButtonArrowRight>
        <ButtonArrowRight
          onClick={(): void => setPageIndex(pageCount - 1)}
          disabled={!canNextPage}
          css={css?.buttonChevronsRight}
        >
          <ChevronsRightIcon size="1em" colorName="black" />
        </ButtonArrowRight>
      </Right>
    </Footer>
  );
};
