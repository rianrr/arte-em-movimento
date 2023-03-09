import styled from 'styled-components'

export const Heading = styled.h2`
  color: #f8f8f8;
  font-size: 3em;
  margin: 1em 0 0 1em;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.7em;
  }
`

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
  }
`

export const Image = styled.img`
  height: 10%;
  width: 15%;
  margin: 2em;

  @media screen and (max-width: 768px) {
    height: 40%;
    width: 40%;
  }
`
