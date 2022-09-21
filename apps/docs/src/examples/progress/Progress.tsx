import { Progress } from '@pikas-ui/progress'
import { ExampleContainer } from '@/components/ExampleContainer'
import { useEffect, useState } from 'react'

export const ProgressExample: React.FC = () => {
  const [value, setValue] = useState(75)

  useEffect(() => {
    setInterval(() => {
      setValue(Math.floor(Math.random() * 100))
    }, 1000)
  }, [])

  return (
    <ExampleContainer>
      <Progress progress={value} />
    </ExampleContainer>
  )
}
