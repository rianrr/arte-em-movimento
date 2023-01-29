import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Image, Heading, Section, SectionImage, Text, NavLink } from '../styles/AboutStyles'
import Fade from 'react-reveal/Fade'

export function About() {
    return (
      <>
        <Navbar />
        <Fade left>
        <SectionImage>
          <Image src="/images/11.JPG" />

          <Section>
            <Heading>QUEM SOMOS?</Heading>
            <Text>
              Somos uma Organização da Sociedade Civil (OSC) sem fins lucrativos fundada em novembro de 2017, é o braço social da Escola Arte em Movimento.
            </Text>
            <Text>
              Atende hoje cerca de quase 200 crianças e adolescentes impactando indiretamente mais de 600 pessoas e torna acessível o conhecimento da dança clássica e disciplinas complementares contribuindo para o desenvolvimento integral da criança e do adolescente em situação de vulnerabilidade socioeconômica e suas famílias, usando todo potencial da cultura como instrumento de educação, de expressão e transformação humana.
            </Text>
            <Text>
              Promovemos aprendizagens significativas, não apenas no âmbito intelectual, mas também físicas, emocionais, culturais e sociais. Formamos uma comunidade unida pelo desafio de ampliar o acesso a educação, profissionalização através da dança e melhores oportunidades de vida, contribuindo para a formação de valores éticos, o fortalecimento da cidadania, com a valorização e respeitando a diversidade dos nossos alunos.
            </Text>
          </Section>
        </SectionImage>
        </Fade>

        <Fade right>
        <SectionImage>
          <Section>
            <Heading>MISSÃO</Heading>

            <Text>
              Contribuir com a democratização cultural e artística.
            </Text>
            <Text>
              Promover a transformação humana através da ArteEducação, oferecendo a formação e oportunidades de profissionalização na dança a crianças e jovens em situação de vulnerabilidade socioeconômica.
            </Text>
            <Text>
              Fortalecer a formação de valores éticos e de cidadania, a diversidade, desenvolvimento pessoal e intelectual com a valorização dos nossos alunos.
            </Text>

            <NavLink to="/missao">SAIBA MAIS</NavLink> {/* Make it a Link to other page */}
          </Section>

          <Image src="/images/9.JPG" />
        </SectionImage>
        </Fade>

        <Footer />
      </>
    )
}
