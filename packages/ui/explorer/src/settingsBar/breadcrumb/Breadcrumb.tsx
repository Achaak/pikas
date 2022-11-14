import { IconByName } from '@pikas-ui/icons';
import { styled } from '@pikas-ui/styles';
import { useContext, FC } from 'react';
import { ExplorerContext } from '../../Explorer.js';
import { BreadcrumbItem } from './breadcrumbItem/BreadcrumbItem.js';

const Container = styled('div', {
  display: 'none',
  customColumnGap: 4,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 16,
});

const TooManyItems = styled('div', {
  fontWeight: '$MEDIUM',
  color: '$GRAY_DARKER',
  width: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Breadcrumb: FC = () => {
  const { breadcrumb, showBreadcrumb } = useContext(ExplorerContext);

  if (!showBreadcrumb) {
    return null;
  }

  return (
    <Container
      css={{
        ...(showBreadcrumb.default && { '@xs': { display: 'flex' } }),
        ...(showBreadcrumb.xs && { '@xs': { display: 'flex' } }),
        ...(showBreadcrumb.sm && { '@sm': { display: 'flex' } }),
        ...(showBreadcrumb.md && { '@md': { display: 'flex' } }),
        ...(showBreadcrumb.lg && { '@lg': { display: 'flex' } }),
        ...(showBreadcrumb.xl && { '@xl': { display: 'flex' } }),
      }}
    >
      {breadcrumb?.map((breadcrumbItem, index) => {
        if (
          breadcrumb.length > 5 &&
          breadcrumb.length - index > 4 &&
          index !== 0
        ) {
          return null;
        }

        const result = [];

        if (index && !(breadcrumb.length > 5 && index === 2)) {
          result.push(
            <IconByName
              name="bx:chevron-right"
              key={`${index}-next`}
              size={16}
              colorName="GRAY_DARKER"
              onClick={(event): void => {
                event.stopPropagation();
              }}
            />
          );
        }

        result.push(<BreadcrumbItem breadcrumb={breadcrumbItem} key={index} />);

        if (breadcrumb.length > 5 && index === 0) {
          result.push(<TooManyItems key={index + 1}>···</TooManyItems>);
        }

        return result;
      })}
    </Container>
  );
};
