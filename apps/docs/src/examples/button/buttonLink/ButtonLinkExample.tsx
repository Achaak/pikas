import { ButtonLink } from '@pikas-ui/button'
import { ExampleContainer } from '@/components/ExampleContainer'

export const ButtonLinkExample: React.FC = () => {
  return (
    <ExampleContainer>
      <ButtonLink color="PRIMARY" width="auto" href="#">
        Primary
      </ButtonLink>
      <ButtonLink color="PRIMARY" width="auto" href="#" outlined>
        ButtonLink
      </ButtonLink>
      <ButtonLink color="SECONDARY" width="auto" href="#">
        Secondary
      </ButtonLink>
      <ButtonLink color="SECONDARY" width="auto" href="#" outlined>
        Secondary
      </ButtonLink>
      <ButtonLink color="TERTIARY" width="auto" href="#">
        Tertiary
      </ButtonLink>
      <ButtonLink color="TERTIARY" width="auto" href="#" outlined>
        Tertiary
      </ButtonLink>
    </ExampleContainer>
  )
}
