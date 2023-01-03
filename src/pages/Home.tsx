import { ImageSwiper } from '../components/ImageSwiper'
import Navbar from '../components/Navbar'
import Wave from '/images/wave.svg'

export function Home() {
    return (
        <>
            <Navbar />
            <ImageSwiper />
            <img src={Wave} />
        </>
    )
}

