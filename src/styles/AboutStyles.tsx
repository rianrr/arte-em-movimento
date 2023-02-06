import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Image = styled.img`
  height: 45em;
  max-width: 90%;
  border-radius: 5em 5em 5em 5em;
  margin: 2em 2em 2em 2em;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 40em;
    margin: 0;
    border-radius: 0;
  }
`

export const Heading = styled.h1`
  color: #f8f8f8;
  font-size: 4em;
  margin-bottom: .3em;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2em 5em 5em 5em;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const SectionImage = styled.section`
  display: flex;
  align-items: space-between;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Text = styled.h3`
  color: #f8f8f8;
  letter-spacing: 1.5px;
  margin-bottom: 1em;
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
`
