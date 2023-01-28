import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Section, Image, Heading, Text, TextSection } from '../styles/MissionStyles'

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

            <Section>
              <Heading>VALORES</Heading>
            </Section>

            <Footer />
        </>
    )
}
