import { Container, Card, HeadingSection, MessageSection, Heading, Message } from '../styles/DonationCardStyles'

type CardProps = {
  heading: string
  message: string
}

export function DonationCard(props: CardProps) {
  return (
    <Container>
      <Card>
        <HeadingSection>
          <Heading>{props.heading}</Heading>
        </HeadingSection>

        <MessageSection>
          <Message>{props.message}</Message>
        </MessageSection>
      </Card>
    </Container>
  )
}
