import { ExampleContainer, styled } from '@pikas/docs-ui';
import { colorsExtension } from '@pikas-utils/file';
import { FC } from 'react';
import { Grid } from '@pikas-ui/grid';

const ExtensionStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$BOLD',
  br: 'sm',
  padding: 8,
  color: '$WHITE_FIX',
});

export const GetColorByExtension: FC = () => (
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
      {Object.keys(colorsExtension)
        .sort((a, b) => a.localeCompare(b))
        .map((key) => (
          <Extension
            value={{
              extension: key,
              color: colorsExtension[key],
            }}
            key={key}
          />
        ))}
    </Grid>
  </ExampleContainer>
);

const Extension: FC<{
  value: {
    extension: string;
    color: string;
  };
}> = ({ value }) => (
  <ExtensionStyled
    css={{
      backgroundColor: value.color,
    }}
  >
    {value.extension}
  </ExtensionStyled>
);
