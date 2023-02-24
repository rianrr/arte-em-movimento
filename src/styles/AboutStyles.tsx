import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Image = styled.img`
  height: 45em;
  max-width: 90%;
  border-radius: 1em;
  margin: 2em 2em 1em 2em;

  @media screen and (max-width: 1600px) {
    width: 95%;
    height: 50em;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
    margin: 1em 1em 1em 1em;
    border-radius: 1em;
  }
`

export const Heading = styled.h1`
  color: #f8f8f8;
  font-size: 3em;
  margin-bottom: .3em;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.7em;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em 5em 2em 5em;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 1em 0 2em 2.9em;
    width: 80%;
  }
`

export const SectionImage = styled.section`
  display: flex;
  align-items: space-between;
  justify-content: space-between;

  @media screen and (max-width: 1600px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Text = styled.h3`
  color: #f8f8f8;
  /* letter-spacing: 1.5px; */
  margin-bottom: 1em;
  font-weight: normal;

  @media screen and (max-width: 768px) {
    font-size: 1.1em;
  }
`

export const NavLink = styled(Link)`
  margin: 2em auto;
  padding: 1em 1em 1em 1em;
  width: 50%;
  border-radius: 5em;
  font-size: 1em;
  font-weight: 700;
  border: dashed #daa5ee;
  cursor: pointer;
  background-color: transparent;
  color: #f8f8f8;
  text-decoration: none;

  &:hover {
    border-color: #f8f8f8;
    transition: all .3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Line = styled.div`
  width: 80%;
  background-color: #f8f8f8;
  height: 2px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  margin: 1em 0 1em 13em;
  display: none;

  @media screen and (max-width: 768px) {
    margin: 0 0 0 3em;
    display: flex;
  }
`

export const MidSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 4em 2em 4em;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 1em 0 2em 2.9em;
    width: 80%;
  }
`
