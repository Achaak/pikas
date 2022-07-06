import { styled } from '@pikas-ui/styles'
import { ButtonLink } from '@pikas-ui/button'

const Container = styled('div', {
  display: 'flex',
  margin: '16px 0',
  customColumnGap: 8,
  customRowGap: 8,
})

export const ButtonLinkExample: React.FC = () => {
  return (
    <Container>
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
    </Container>
  )
}
