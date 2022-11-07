import { ExampleContainer } from '@pikas/docs-ui';
import { useMediaScreen } from '@pikas-utils/screen';
import { FC } from 'react';

export const UseMediaScreenExample: FC = () => {
  const media = useMediaScreen();

  return <ExampleContainer>{media}</ExampleContainer>;
};
