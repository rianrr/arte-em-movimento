import { ImageSwiper } from '../components/ImageSwiper'
import { ThemeProvider } from '@mui/system'

import Navbar from '../components/Navbar'
import theme from '../styles/Theme'
import Footer from '../components/Footer'

import {
  Section,
  Text,
  Wrapper,
  CardC,
  CardCt,
  CardM,
  CardT,
  PlayerSection,
  Player,
} from '../styles/HomeStyles'

export function Home() {
  return (
    <>
      <Navbar />
      <ImageSwiper />
      <Text>Nossos Números</Text>
      <Section>
        <Wrapper>
          <CardC>
            <CardM
              sx={{ height: 200 }}
              image="/images/12.jpg"
              title="Impacto"
            />
            <CardCt>
              <ThemeProvider theme={theme}>
                <CardT gutterBottom variant="h2">
                  Impacto
                </CardT>
                <CardT>
                  O Instituto Arte em Movimento já impactou indiretamente mais
                  de 1000 pessoas.
                </CardT>
              </ThemeProvider>
            </CardCt>
          </CardC>

          <CardC>
            <CardM
              sx={{ height: 200 }}
              image="/images/16.jpg"
              title="Formação"
            />
            <CardCt>
              <ThemeProvider theme={theme}>
                <CardT gutterBottom variant="h2">
                  Formação
                </CardT>
                <CardT>Formou mais de 35 bailarinas.</CardT>
              </ThemeProvider>
            </CardCt>
          </CardC>

          <CardC>
            <CardM
              sx={{ height: 200 }}
              image="/images/10.jpg"
              title="Atendimentos"
            />
            <CardCt>
              <ThemeProvider theme={theme}>
                <CardT gutterBottom variant="h2">
                  Atendimentos
                </CardT>
                <CardT>
                  São mais de 9 mil atendimentos por ano. Dessas jovens, várias
                  escolheram a Dança como sua profissão. Algumas delas abriram
                  suas escolas de dança na cidade. Jessica Vieira e Leticia
                  Vieira, são bailarinas do Corpo de Baile e também professoras
                  do Instituto.
                </CardT>
              </ThemeProvider>
            </CardCt>
          </CardC>
        </Wrapper>
      </Section>

      <Text>Conheça Nossa História</Text>

      <PlayerSection>
        <Wrapper>
          <Player url="https://youtu.be/TQie1RuaBE8" controls={true} light />

          <Player url="https://youtu.be/Df_jm_P1vLw" controls={true} light />

          <Player url="https://youtu.be/U7W2FkO2VuE" controls={true} light />

          <Player url="https://youtu.be/RnoTSU6lrm0" controls={true} light />
        </Wrapper>
      </PlayerSection>

      {/* <Text>Parceiros</Text> */}

      {/* <Section> */}
      {/* </Section> */}

      <Footer />
    </>
  )
}
