import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100vw;
  margin: 2em 2em 2em 2em;
`

export const ValuesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  margin: 2em 2em 2em 2em;
`

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

export const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 5em;
`

export const Heading = styled.h1`
  color: #f8f8f8;
  font-size: 4em;
  margin-bottom: .3em;
  text-align: center;
`

export const Text = styled.h3`
  color: #f8f8f8;
  letter-spacing: 1.5px;
  margin-bottom: 1em;
  text-align: center;
`

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 90vw;
  gap: 2em;
`

export const GridItem = styled.div`
  padding: 3em;
  /* margin: 1em 1em 1em 1em; */
  border-radius: 5em;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #daa5ee;
`

export const ItemText = styled.h3`
  font-size: 2em;
  color: #f8f8f8;
  letter-spacing: 2px;
`
