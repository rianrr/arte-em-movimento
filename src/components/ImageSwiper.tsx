import { Navigation } from 'swiper'
import { SwiperElement, SwiperSlider, NavLink } from '../styles/ImageSwiperStyle'

import 'swiper/css/bundle'

export function ImageSwiper() {
    return (
      <SwiperElement
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlider>
            <img src="/images/christmas.jpg" />
            <NavLink to="/quem-somos">QUEM SOMOS?</NavLink>
        </SwiperSlider>
        <SwiperSlider>
            <img src="/images/forest.jpg" />
        </SwiperSlider>
        <SwiperSlider>
            <img src="/images/new_year.jpg" />
        </SwiperSlider>
        <SwiperSlider>
            <img src="/images/town.jpg" />
        </SwiperSlider>
      </SwiperElement>
    )
}
