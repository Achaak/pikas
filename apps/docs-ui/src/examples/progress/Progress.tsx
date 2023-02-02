import { Progress } from '@pikas-ui/progress';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';

export const ProgressExample: FC = () => {
  const [value1, setValue1] = useState(75);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(25);

  useEffect(() => {
    setInterval(() => {
      setValue1(Math.floor(Math.random() * 100));
      setValue2(Math.floor(Math.random() * 100));
      setValue3(Math.floor(Math.random() * 100));
    }, 1000);
  }, []);

  return (
    <ExampleContainer
      css={{
        flexDirection: 'column',
      }}
    >
      <Progress progress={value1} borderRadiusIndicator="full" />
      <Progress
        progress={value2}
        colorName="secondary"
        content={`${value2}%`}
        height={24}
      />
      <Progress
        progress={value3}
        colorName="tertiary"
        height={32}
        borderRadius="md"
        content={`${value3}/100`}
      />
    </ExampleContainer>
  );
};
