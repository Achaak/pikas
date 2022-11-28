import { Badge } from '@pikas-ui/badge';
import { IconByName, IconProps } from '@pikas-ui/icons';
import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC } from 'react';

const Span = styled('span', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

type MultiInputFieldBadgeProps = {
  index: number;
  value: string;
  onDelete: (value: number) => void;
  css?: PikasCSS;
};

const XIcon: FC<IconProps> = (props) => (
  <IconByName
    name="bx:x"
    {...props}
    css={{
      ...props.css,
      container: {
        cursor: 'pointer',
        ...props.css?.container,
      },
    }}
  />
);

export const MultiInputFieldBadge: FC<MultiInputFieldBadgeProps> = ({
  value,
  index,
  onDelete,
  css,
}) => (
  <Badge
    key={index}
    padding="sm"
    RightIcon={XIcon}
    borderRadius="md"
    rightIconProps={{
      onClick: () => onDelete(index),
    }}
    css={css}
  >
    <Span>{value}</Span>
  </Badge>
);
