import { Container, Card, HeadingSection, MessageSection} from '../styles/DonationCardStyles'

type CardProps = {
  heading: string
  message: string
}

export function DonationCard(props: CardProps) {
  return (
    <Container>
      <Card>
        <HeadingSection>
          <h1>{props.heading}</h1>
        </HeadingSection>

        <MessageSection>
          <p>{props.message}</p>
        </MessageSection>
      </Card>
    </Container>
  )
}
