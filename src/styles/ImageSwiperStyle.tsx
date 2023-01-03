import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SwiperElement = styled(Swiper)`
  display: flex;
  max-height: 40em;
`

export const SwiperSlider = styled(SwiperSlide)`
  display: flex; 
  position: relative;
`

export const Button = styled.button`
  position: absolute;
  text-align: center;
  justify-content: center;
  width: 20em;
  top: 30%;
  left: 50%;
  cursor: pointer;
  padding: 1em;
  border-radius: 1em;
  border: 0;
  font-weight: 700;
  font-size: 1em;
  background-color: #daa5ce;
`
