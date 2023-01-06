import { ImageSwiper } from '../components/ImageSwiper'
import Navbar from '../components/Navbar'
import Wave from '/images/wave.svg'
import { Section, WaveImg, Text } from '../styles/HomeStyle'
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
      {/* <WaveImg src={Wave} /> */}
      <Text>Nossos Números</Text>
      <Section>
          <Card sx={{ maxWidth: 370, borderRadius: 5, height: 400 }}>
          <CardMedia
              sx={{ height: 200 }}
            image="/images/12.JPG"
            title='forest'
          />
          <CardContent>
            <ThemeProvider theme={theme}>
            <Typography gutterBottom variant='h2'>
                Impacto
            </Typography>
            <Typography >
                O Instituo Arte em Movimento já impactou indiretamente mais de 1000 pessoas.
            </Typography>
            </ThemeProvider>
          </CardContent>
        </Card>

          <Card sx={{ maxWidth: 370, ml: 15, borderRadius: 5, height: 400 }}>
          <CardMedia
              sx={{ height: 200 }}
            image="/images/16.JPG"
            title='forest'
          />
          <CardContent>
            <ThemeProvider theme={theme}>
            <Typography gutterBottom variant='h2'>
              Formação
            </Typography>
            <Typography >
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            </ThemeProvider>
          </CardContent>
        </Card>

          <Card sx={{ maxWidth: 370, ml: 15, borderRadius: 5, height: 400 }}>
          <CardMedia
              sx={{ height: 200 }}
            image="/images/10.JPG"
            title='forest'
          />
          <CardContent>
            <ThemeProvider theme={theme}>
            <Typography gutterBottom variant='h2'>
              Atendimentos
            </Typography>
            <Typography >
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            </ThemeProvider>
          </CardContent>
        </Card>

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

      <Footer />
    </>
    )
}

