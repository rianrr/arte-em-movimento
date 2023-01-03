import { ImageSwiper } from '../components/ImageSwiper'
import Navbar from '../components/Navbar'
import Wave from '/images/wave.svg'
import { Section, WaveImg } from '../styles/HomeStyle'

export function Home() {
    return (
        <>
            <Navbar />
            <ImageSwiper />
            <WaveImg src={Wave} />
            <Section></Section>
        </>
    )
}

