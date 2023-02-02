import { Button } from '@pikas-ui/button';
import { Label } from '@pikas-ui/text';
import { styled } from '@pikas/docs-ui';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 16,
});

const Top = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const Bottom = styled('div', {
  marginTop: 16,
});

const NbRows = styled('span', {
  fontSize: '$em-small',
  fontWeight: '$medium',
});

const Pre = styled('pre', {
  marginTop: 8,
  boxShadow: '$inner-xl',
  padding: 8,
  borderRadius: '$sm',
  maxHeight: 200,
  overflow: 'auto',
});

type BottomToolsProps = {
  refreshData: () => void;
  nbRows: number;
  code?: unknown;
};

export const BottomTools: FC<BottomToolsProps> = ({
  refreshData,
  nbRows,
  code,
}) => (
  <Container>
    <Top>
      <Button
        onClick={refreshData}
        width="auto"
        padding="xs"
        fontSize="em-small"
        borderRadius="sm"
      >
        Refresh
      </Button>

      <NbRows>{Intl.NumberFormat().format(nbRows)} rows</NbRows>
    </Top>

    {!!code && (
      <Bottom>
        <Label>Result:</Label>
        <Pre>{JSON.stringify(code, null, 2)}</Pre>
      </Bottom>
    )}
  </Container>
);
