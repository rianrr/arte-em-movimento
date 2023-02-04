import { ImageSwiper } from '../components/ImageSwiper'
import Navbar from '../components/Navbar'
import { Section, Text, Wrapper, CardC, CardCt, CardM, CardT } from '../styles/HomeStyle'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/system'
import theme from '../styles/Theme'
import ReactPlayer from 'react-player/youtube'
import Footer from '../components/Footer'

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
                image="/images/12.JPG"
                title='forest'
            />
            <CardCt>
              <ThemeProvider theme={theme}>
              <CardT gutterBottom variant='h2'>
                  Impacto
              </CardT>
              <CardT>
                  O Instituo Arte em Movimento já impactou indiretamente mais de 1000 pessoas.
              </CardT>
              </ThemeProvider>
            </CardCt>
          </CardC>

            <CardC sx={{ ml: 15 }}>
            <CardM
                sx={{ height: 200 }}
                image="/images/16.JPG"
                title='forest'
            />
            <CardCt>
              <ThemeProvider theme={theme}>
              <CardT gutterBottom variant='h2'>
                Formação
              </CardT>
              <CardT>
                Formou mais de 25 bailarinas.
              </CardT>
              </ThemeProvider>
            </CardCt>
          </CardC>

            <CardC sx={{ ml: 15 }}>
            <CardM
                sx={{ height: 200 }}
                image="/images/10.JPG"
                title='forest'
            />
            <CardCt>
              <ThemeProvider theme={theme}>
              <CardT gutterBottom variant='h2'>
                Atendimentos
              </CardT>
              <Typography >
                São mais de 9 mil atendimentos por ano.
                Dessas jovens, várias escolheram a Dança como sua profissão. Algumas delas abriram suas escolas
                de dança na cidade: "Studio Balance" "Studio Leticia Conrado" Jessica Vieira e Leticia Vieira são
                bailarinas do Corpo de Baile e também professoras do Instituto.
              </Typography>
              </ThemeProvider>
            </CardCt>
          </CardC>
          </Wrapper>

        </Section>

      <Text>Conheça Nossa História</Text>

      <Section>
        <ReactPlayer
          url='https://youtu.be/TQie1RuaBE8'
          controls={true}
        />

        <ReactPlayer
          url='https://youtu.be/Df_jm_P1vLw'
          controls={true}
          style={{ marginLeft: 40 }}
        />
      </Section>

      <Text>Parceiros</Text>

      <Section>
      </Section>

      <Footer />
    </>
    )
}

