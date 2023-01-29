import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Section, ValuesSection, Image, Heading, Text, TextSection, GridSection, GridItem, ItemText } from '../styles/MissionStyles'
// import icons

export function Mission() {
    return (
        <>
            <Navbar />

            <Section>
              <Image src="/images/12.JPG" />
              
              <TextSection>
                <Heading>VISÃO</Heading>
                <Text>Fortalecer a atuação da organização social na cidade de Guarujá e ser reconhecida como uma instituição de referência nacional, apontar um caminho para um futuro com mais perspectivas e menos desigualdades sociais ao atuar como um agente de transformação social por meio da arte e da cultura, formando profissionais da dança de excelência, promovendo a inclusão social.</Text>
              </TextSection>
            </Section>

            <ValuesSection>
              <Heading>VALORES</Heading>

              <GridSection>
                <GridItem><ItemText>AMOR</ItemText></GridItem>
                <GridItem><ItemText>DISCIPLINA</ItemText></GridItem>
                <GridItem><ItemText>PAIXÃO</ItemText></GridItem>
                <GridItem>COOPERAÇÃO</GridItem>
                <GridItem>EMPATIA</GridItem>
                <GridItem>SUPERAÇÃO</GridItem>
                <GridItem>ÉTICA</GridItem>
                <GridItem>TRANSPARÊNCIA</GridItem>
                <GridItem>RESPONSABILIDADE</GridItem>
                <GridItem>EXCELÊNCIA</GridItem>
                <GridItem>HUMILDADE</GridItem>
                <GridItem>COMPETÊNCIA</GridItem>
                <GridItem>TRABALHO EM EQUIPE</GridItem>
                <GridItem>SUSTENTABILIDADE</GridItem>
                <GridItem>SOLIDARIEDADE</GridItem>
              </GridSection>
            </ValuesSection>

            <Footer />
        </>
    )
}
