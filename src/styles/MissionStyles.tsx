import styled from "styled-components";
import { FiHeart, FiCalendar, FiBookOpen } from "react-icons/fi";

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100vw;
  margin: 2em 2em 2em 2em;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
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

  @media screen and (max-width: 500px) {
    margin-top: 2em;
    width: 80%;
  }
`

export const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 3em;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    /* margin: 1em 1em 1em 1em; */
    border-radius: 1em;
  }
`

export const Heading = styled.h1`
  color: #f8f8f8;
  font-size: 3em;
  margin-bottom: .3em;
  text-align: center;
`

export const Text = styled.h3`
  color: #f8f8f8;
  /* letter-spacing: 1.5px; */
  margin-bottom: 1em;
  text-align: center;
  font-weight: normal;
`

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 90vw;
  gap: 2em;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const GridItem = styled.div`
  display: flex;
  padding: 2em 2em 2em 6em;
  border-radius: 3em;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: #daa5ee;

  @media screen and (max-width: 500px) {
    padding: 2em 2em 2em 7em;

    width: 90vw;
  }
`

export const ItemText = styled.h3`
  font-size: 2em;
  color: #f8f8f8;
  letter-spacing: 2px;

  @media screen and (max-width) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const HeartIcon = styled(FiHeart)`
  color: #f8f8f8;
  font-size: 2em;
  margin-right: 1em;
`

export const CalendarIcon = styled(FiCalendar)`
  color: #f8f8f8;
  font-size: 2em;
  margin-right: 1em;
`

export const BookIcon = styled(FiBookOpen)`
  color: #f8f8f8;
  font-size: 2em;
  margin-right: 1em;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
