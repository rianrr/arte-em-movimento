import { Navigation } from 'swiper'
import { Wrapper, SwiperElement, SwiperSlider } from '../styles/ImageSwiperStyle'

import 'swiper/css/bundle'

export function ImageSwiper() {
    return (
        <Wrapper>
          <SwiperElement
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
          >
              <SwiperSlider>
                  <img src="/images/christmas.jpg" />
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
        </Wrapper>
    )
}
