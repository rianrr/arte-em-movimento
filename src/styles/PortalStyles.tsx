import styled from "styled-components";

export const Heading = styled.h2`
  text-align: center;
  color: #f8f8f8;
  font-size: 3em;
  margin: 1em 0 0 0;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  margin: 2em 2em 2em 2em;

  @media screen and (max-width: 768px) {
    margin: 1em 0 2em 0;
  }
`

export const File = styled.a`
  color: rgba(248, 248, 248, 0.8);
  font-size: 1.5em;
  margin: 1em 0 1em 0;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: rgba(248, 248, 248, 0.5);
    transition: all .3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
  }
`
