import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2em 2em 2em 2em;
`

export const Wrapper = styled.div`
    display: flex;
    margin: 0 0 1em 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 2em;
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
`

export const FourthHeading = styled.h4`
    color: #f8f8f8;
    text-align: center;
    font-size: 1.3em;
`

export const Strong = styled.strong`
    color: #e7c4f3;
`

export const Span = styled.span`
    color: rgba(248, 248, 248, .9);
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    margin: 2em 0 .3em 0;
`

export const Student = styled.p`
    color: #f8f8f8;
    text-align: center;
    font-size: 1.3em;
    margin: 0 0 .3em 0;
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
    justify-content: center;

    @media screen and (max-width: 768px) {
        margin: 1em 0 1em 0;
    }
`

export const MidBox = styled(Box)`
    background-image: linear-gradient(70deg, rgba(218, 165, 238, .5), rgba(108, 70, 206, .5));
    height: auto;
    width: 100%;
    margin: 2em 2em 2em 0;

  @media screen and (max-width: 768px) {
      width: 100%;
    }
`

export const Observation = styled.span`
    color: rgba(248, 248, 248, .7);
    text-align: center;
`
