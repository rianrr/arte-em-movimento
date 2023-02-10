import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Image, Heading, Section, SectionImage, Text, NavLink, Line, MidSection } from '../styles/AboutStyles'

export function About() {
    return (
      <>
        <Navbar />
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
        
        <Line />

        <MidSection>
          <Heading>MODELO DE TRANSFORMAÇÃO E FILOSOFIA</Heading>
          <Text>
            Nosso modelo de transformação busca a inclusão
            social através da qualificação profissional na área da dança fomentando a formação com excelência
            como bailarino profissional, multiplicando e compartilhando seus conhecimentos como instrutor ou
            professor da dança, reconhecendo o potencial da área cultural com infinitas possibilidades
            profissionalizantes desde aprender a empreender criando uma linha de artigos específicos (roupas,
            bolsas, figurinos) até a produção e elaboração de espetáculos, com essa atuação intersetorial dos
            três eixos de grande importância: cultural, educacional e social, desenvolvendo uma série de
            habilidades e valores que refletem em aprendizagens significativas, não apenas no âmbito
            intelectual, mas também físicas, emocionais e culturais, incluindo atendimento nutricional e de
            fisioterapia.
          </Text>

          <Text>
            Despertar nas crianças, adolescentes e seus familiares os sentimentos de pertencimento
            e identidade, alavancando reflexões sobre o mundo e as próprias atitudes, estimulando que elas
            olhem mais para si e transformem seu modo de viver, conduzindo a vida de uma forma em que o
            diálogo prevaleça, que o amor transborde e inspire, que a transformação e o progresso alavanque o
            desenvolvimento humano da nossa região, com um desenvolvimento local sustentável promovendo o
            alçance dos ODS do Programa das Nações Unidas.
          </Text>
        </MidSection>

        <Line />

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

        <Footer />
      </>
    )
}
