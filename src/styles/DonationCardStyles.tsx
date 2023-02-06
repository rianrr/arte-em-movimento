import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3em 0 3em 0;

  @media screen and (max-width: 768px) {
    margin: 3em 2em 3em 2em;
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
  border-radius: 5em;
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
`

export const MessageSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`
