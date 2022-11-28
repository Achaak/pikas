import { Badge } from '@pikas-ui/badge';
import { IconByName, IconProps } from '@pikas-ui/icons';
import { styled } from '@pikas-ui/styles';
import { FC } from 'react';

const Span = styled('span', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

type MultiInputFieldBadgeProps = {
  index: number;
  value: string;
  onDelete: (value: number) => void;
};

export const MultiInputFieldBadge: FC<MultiInputFieldBadgeProps> = ({
  value,
  index,
  onDelete,
}) => {
  const XIcon: FC<IconProps> = (props) => (
    <IconByName
      name="bx:x"
      {...props}
      onClick={() => onDelete(index)}
      css={{
        ...props.css,
        container: {
          cursor: 'pointer',
          ...props.css?.container,
        },
      }}
    />
  );

  return (
    <Badge key={index} padding="sm" RightIcon={XIcon} borderRadius="md">
      <Span>{value}</Span>
    </Badge>
  );
};
