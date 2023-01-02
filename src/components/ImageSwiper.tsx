import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function ImageSwiper() {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src="/images/christmas.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/forest.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/new_year.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/town.jpg" />
            </SwiperSlide>
        </Swiper>
    )
}
