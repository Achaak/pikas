import { ExampleContainer, styled } from '@pikas/docs-ui';
import { useKeyPress } from '@pikas-utils/keyboard';
import { FC } from 'react';
import { Grid } from '@pikas-ui/grid';

const KeyStyled = styled('span', {
  color: '$primary',
  backgroundColor: '$primary-lighter',
  fontWeight: '$bold',
  borderRadius: '$sm',
  padding: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    isPressed: {
      true: {
        color: '$success',
        backgroundColor: '$success-lighter',
      },
    },
  },
});

const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const UseKeyPressExample: FC = () => (
  <ExampleContainer>
    <Grid
      type="container"
      columnGap={{
        default: 8,
      }}
      rowGap={{
        default: 8,
      }}
      cols={{
        default: 1,
        xs: 2,
        sm: 3,
        md: 6,
      }}
    >
      {keys.map((key) => (
        <Key value={key} key={key} />
      ))}
    </Grid>
  </ExampleContainer>
);

const Key: FC<{ value: string }> = ({ value }) => {
  const isPressed = useKeyPress(value);

  return <KeyStyled isPressed={isPressed}>{value}</KeyStyled>;
};
