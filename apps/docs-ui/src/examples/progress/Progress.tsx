import { Progress } from '@pikas-ui/progress'
import { ExampleContainer } from '@/components/ExampleContainer'
import { useEffect, useState } from 'react'

export const ProgressExample: React.FC = () => {
  const [value1, setValue1] = useState(75)
  const [value2, setValue2] = useState(50)
  const [value3, setValue3] = useState(25)

  useEffect(() => {
    setInterval(() => {
      setValue1(Math.floor(Math.random() * 100))
      setValue2(Math.floor(Math.random() * 100))
      setValue3(Math.floor(Math.random() * 100))
    }, 1000)
  }, [])

  return (
    <ExampleContainer
      css={{
        flexDirection: 'column',
      }}
    >
      <Progress progress={value1} borderRadiusIndicator="round" />
      <Progress
        progress={value2}
        color="SECONDARY"
        content={`${value2}%`}
        height={24}
      />
      <Progress
        progress={value3}
        color="TERTIARY"
        height={32}
        borderRadius="md"
        content={`${value3}/100`}
      />
    </ExampleContainer>
  )
}
