import styled from "styled-components";

export const Heading = styled.h1`
  color: #f8f8f8;
  font-size: 3em;
  text-align: center;
  margin: 1em 0 1em 0;

  @media screen and (max-width: 768px) {
    font-size: 2.7em;
  }
`

export const Section = styled.section`
    display: flex;
    margin: 0 2em 3em 2em;
    /* justify-content: center; */
`

export const Image = styled.img`
    width: 25%;
    border-radius: 1em;
`

export const BigCard = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: rgba(218, 165, 238, .5); */
    background-image: linear-gradient(70deg, rgba(108, 70, 206, .5), rgba(218, 165, 238, .5));
    width: 98%;
    border-radius: 1em;
    justify-content: center;
`

export const BigCardWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

export const ContentHeading = styled.h2`
    color: #f8f8f8;
    text-align: center;
    font-size: 2em;
    margin: 1em 0 1em 0;
`

export const ContentText = styled.p`
    color: #f8f8f8;
    text-align: center;
    font-size: 1.3em;
    margin: 0 2em 0 2em;
`