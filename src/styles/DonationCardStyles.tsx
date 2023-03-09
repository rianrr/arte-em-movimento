import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3em 0 3em 0;

  @media screen and (max-width: 768px) {
    margin: 3em 1em 3em 1em;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1em 1em 1em 1em; */
  height: 10em;
  width: 50em;
  background-color: #daa5ee;
  border-radius: 1em;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 9em;
  }
`

export const Heading = styled.h1`
  color: #f8f8f8;
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
  }
`

export const HeadingSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 1em 0 2em;
  border-right: solid 2px #6c46ce;
  height: 70%;
  width: 35%;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

export const Message = styled.p`
  color: #f8f8f8;
`

export const MessageSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`
