import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Section, ValuesSection, Image, Heading, Text, TextSection, GridSection, GridItem, ItemText, HeartIcon, CalendarIcon, BookIcon, Wrapper } from '../styles/MissionStyles'

export function Mission() {
  return (
    <>
      <Navbar />

      <Section>
        <Image src="/images/12.jpg" />

        <TextSection>
          <Heading>VISÃO</Heading>
          <Text>Fortalecer a atuação da organização social na cidade de Guarujá e ser reconhecida como uma instituição de referência nacional, apontar um caminho para um futuro com mais perspectivas e menos desigualdades sociais ao atuar como um agente de transformação social por meio da arte e da cultura, formando profissionais da dança de excelência, promovendo a inclusão social.</Text>
        </TextSection>
      </Section>

      <ValuesSection>
        <Heading>VALORES</Heading>

        <GridSection>
          <GridItem>
            <Wrapper>
              <HeartIcon />
              <ItemText>AMOR</ItemText>
            </Wrapper>
          </GridItem>

          <GridItem>
            <CalendarIcon />
            <ItemText>DISCIPLINA</ItemText>
          </GridItem>

          <GridItem>
            <BookIcon />
            <ItemText>ÉTICA</ItemText>
          </GridItem>
        </GridSection>
      </ValuesSection>

      <Footer />
    </>
  )
}
