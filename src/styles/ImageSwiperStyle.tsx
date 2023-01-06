import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink as Link } from 'react-router-dom'

export const SwiperElement = styled(Swiper)`
  display: flex;
  max-height: 40em;
  align-items: center;
`

export const SwiperSlider = styled(SwiperSlide)`
  display: flex; 
  position: relative;
`

export const NavLink = styled(Link)`
  position: absolute;
  text-align: center;
  justify-content: center;
  width: 20em;
  top: 80%;
  cursor: pointer;
  padding: 1em;
  border-radius: 1em;
  border: 0;
  font-weight: 700;
  font-size: 1.3em;
  background-color: #7800ff;
  color: #f8f8f8;
  left: 0;
    margin-left: 38%;
  text-decoration: none;

  &:hover {
    background-color: #6c46ce;
    transition: all .3s ease-out;
  }
`

export const Image = styled.img`
  align-items: center;
  justify-content: center;
`
