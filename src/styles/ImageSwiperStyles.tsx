import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink as Link } from 'react-router-dom'

export const SwiperElement = styled(Swiper)`
  display: flex;
  height: 48em;
  width: 77%;
  align-items: center;
  justify-content: center;
  border-radius: 1em;

  @media screen and (max-width: 1600px) {
    width: 100%;
    border-radius: 0 0em 1em 1em;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    border-radius: 0;
    height: auto;
  }
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
  border-radius: 5em;
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
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 500px) {
    top: 87%;
    width: 15em;
    font-size: 1.2em;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`

export const Image = styled.img`
  align-items: center;
  justify-content: center;
  width: 100%;
`
