import { ExampleContainer } from '@pikas/docs-ui'
import { Title } from '@pikas-ui/title'

export const TitleExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        flexDirection: 'column',
      }}
    >
      <Title as="h1">Title H1</Title>
      <Title as="h2">Title H2</Title>
      <Title as="h3">Title H3</Title>
      <Title as="h4">Title H4</Title>
      <Title as="h5">Title H5</Title>
      <Title as="h6">Title H6</Title>
    </ExampleContainer>
  )
}
