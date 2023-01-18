import { Navigation } from 'swiper'
import { SwiperElement, SwiperSlider, NavLink, Image } from '../styles/ImageSwiperStyle'

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
            <Image src="/images/2.JPG" />
            <NavLink to="/quem-somos">QUEM SOMOS?</NavLink>
        </SwiperSlider>
        <SwiperSlider>
            <Image src="/images/7.JPG" />
        </SwiperSlider>
        <SwiperSlider>
            <Image src="/images/15.JPG" />
        </SwiperSlider>
        <SwiperSlider>
            <Image src="/images/3.JPG" />
        </SwiperSlider>
      </SwiperElement>
    )
}
