import { IconByName } from '@pikas-ui/icons';
import { styled } from '@pikas-ui/styles';
import { useCallback, useContext, useState, FC } from 'react';
import type { ExplorerItem } from '../../Explorer.js';
import { ExplorerContext } from '../../Explorer.js';
import { ListItemColumn } from '../listItemColumn/ListItemColumn.js';
import { Wrapper } from '../../wrapper/index.js';
import { DropdownMenu } from '@pikas-ui/dropdown-menu';
import { WrapperClick as WrapperClickBase } from '../../wrapper/wrapperClick/WrapperClick.js';
import { ClipLoader } from '@pikas-ui/loader';
import { getColorByExtension } from '@pikas-utils/file';

const Container = styled('div', {
  borderBottomColor: '$GRAY',
  borderBottomStyle: 'solid',
  borderBottomWidth: 2,
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: '$WHITE2',
  width: '100%',

  variants: {
    selected: {
      true: {
        backgroundColor: '$PRIMARY_LIGHTER',
      },
    },
  },
});

const TextElement = styled('span', {
  fontSize: '$SMALL',
  color: '$BLACK',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
});

const Name = styled(TextElement, {});

const Size = styled(TextElement, {});

const CreatedAt = styled(TextElement, {});

const Favorite = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const DropdownMenuContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

const WrapperClick = styled(WrapperClickBase, {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: 4,
  width: '100%',
});

export type ListItemProps = {
  item: ExplorerItem;
};

export const ListItem: FC<ListItemProps> = ({ item }) => {
  const { itemsSelected, showDropdownMenu, showFavorite, onFavoriteItem } =
    useContext(ExplorerContext);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const extension = item.name.split('.').pop();

  const getIcon = useCallback(() => {
    if (item.type === 'folder') {
      return <IconByName name="bx:folder" size={32} colorName="BLACK" />;
    }
    if (item.type === 'file') {
      return (
        <IconByName
          name="bx:file"
          size={32}
          colorHex={extension ? getColorByExtension(extension) : undefined}
          colorName={extension ? undefined : 'BLACK'}
        />
      );
    }
  }, [item]);

  const handleFavoriteClick = async (): Promise<void> => {
    setFavoriteLoading(true);

    await onFavoriteItem?.({
      id: item.id,
      isFavorite: !item.isFavorite,
    });

    setFavoriteLoading(false);
  };

  return (
    <Wrapper item={item}>
      <Container selected={itemsSelected.some((i) => i.id === item.id)}>
        <ListItemColumn width={32}>
          {showFavorite && item.isFavorite === true && !favoriteLoading && (
            <Favorite onClick={handleFavoriteClick}>
              <IconByName name="bxs:star" size={24} colorName="WARNING" />
            </Favorite>
          )}

          {showFavorite && item.isFavorite === false && !favoriteLoading && (
            <Favorite onClick={handleFavoriteClick}>
              <IconByName name="bx:star" size={24} colorName="WARNING" />
            </Favorite>
          )}

          {showFavorite && favoriteLoading && (
            <Favorite>
              <ClipLoader size={24} colorName="WARNING" />
            </Favorite>
          )}
        </ListItemColumn>
        <ListItemColumn width={40}>
          <WrapperClick item={item}>{getIcon()}</WrapperClick>
        </ListItemColumn>
        <ListItemColumn flex={1}>
          <WrapperClick item={item}>
            <Name>{item.name}</Name>
          </WrapperClick>
        </ListItemColumn>
        <ListItemColumn flex={1}>
          <WrapperClick item={item}>
            <Size>{item.size}</Size>
          </WrapperClick>
        </ListItemColumn>
        <ListItemColumn flex={1}>
          <WrapperClick item={item}>
            <CreatedAt>{item.createdAt}</CreatedAt>
          </WrapperClick>
        </ListItemColumn>
        {showDropdownMenu && item.menu && (
          <ListItemColumn width={40}>
            <DropdownMenuContainer>
              <DropdownMenu data={item.menu} />
            </DropdownMenuContainer>
          </ListItemColumn>
        )}
      </Container>
    </Wrapper>
  );
};
