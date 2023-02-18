import { Navigation } from 'swiper'
import { SwiperElement, SwiperSlider, NavLink, Image } from '../styles/ImageSwiperStyles'

import 'swiper/css/bundle'
import 'swiper/css/autoplay'

export function ImageSwiper() {
  return (
    <SwiperElement
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 1 }}
    >
      <SwiperSlider>
        <Image src="/images/2.jpg" />
        <NavLink to="/quem-somos">QUEM SOMOS?</NavLink>
      </SwiperSlider>
      <SwiperSlider>
        <Image src="/images/7.jpg" />
      </SwiperSlider>
      <SwiperSlider>
        <Image src="/images/15.jpg" />
      </SwiperSlider>
      <SwiperSlider>
        <Image src="/images/3.jpg" />
      </SwiperSlider>
    </SwiperElement>
  )
}
