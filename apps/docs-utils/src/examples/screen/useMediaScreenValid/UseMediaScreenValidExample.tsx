import { ExampleContainer } from '@pikas/docs-ui';
import { useMediaScreenValid } from '@pikas-utils/screen';
import { FC } from 'react';

export const UseMediaScreenValidExample: FC = () => {
  const mediaValid = useMediaScreenValid({ media: 'md', operator: '>' });

  return <ExampleContainer>{mediaValid ? 'true' : 'false'}</ExampleContainer>;
};
