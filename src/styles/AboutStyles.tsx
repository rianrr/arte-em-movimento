import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Image = styled.img`
  height: 45em;
  max-width: 90%;
  border-radius: 5em 5em 5em 5em;
  margin: 2em 2em 1em 2em;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    height: auto;
    margin: 1em 1em 1em 1em;
    border-radius: 1em;
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
  margin: 1em 5em 2em 5em;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const SectionImage = styled.section`
  display: flex;
  align-items: space-between;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 500px) {
    margin: 0 0 0 3em;
    display: flex;
  }
`
