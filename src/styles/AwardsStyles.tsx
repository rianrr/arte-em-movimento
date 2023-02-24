import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2em 2em 2em 2em;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Heading = styled.h1`
  color: #f8f8f8;
  font-size: 3em;
  margin: 1em 0 1em 0;
  text-align: center;

  @media screen and (max-width: 768px) {
        font-size: 2.3em;
  }
`

export const SecondHeading = styled.h2`
    color: #f8f8f8;
    text-align: center;
    font-size: 2em;
    margin: 1em 0 1em 0;
`

export const ThirdHeading = styled.h3`
    color: rgba(248, 248, 248, .9);
    text-align: center;
    font-size: 1.5em;
    margin: 0 0 1em 0;
`

export const FourthHeading = styled.h4`
    color: #f8f8f8;
    text-align: center;
    font-size: 1.3em;
    margin: 0 0 3em 0;
`

export const Strong = styled.strong`
    color: #e7c4f3;
`

export const Image = styled.img`
  width: 50%;
  border-radius: 1em;
  margin: 2em 0 1em 0;

  @media screen and (max-width: 1600px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Box = styled.div`
    background-image: linear-gradient(70deg, rgba(108, 70, 206, .5), rgba(218, 165, 238, .5));
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    border-radius: 1em;
    margin: 1em 2em 1em 2em;
    padding: 2em;

    @media screen and (max-width: 768px) {
        margin: 1em 0 1em 0;
    }
`

export const Award = styled.p`
    color: #f8f8f8;
    text-align: center;
    font-size: 1.3em;
    margin: 0 0 1.5em 0;
`
