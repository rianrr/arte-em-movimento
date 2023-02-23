import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ReactPlayer from 'react-player/youtube'

export const Section = styled.section`
  background-color: #6c46ce;
  height: auto;
  padding: 2em 2em 2em 2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    max-width: 100%;
  }
`

export const Text = styled.h1`
  background-color: #6c46ce;
  text-align: center;
  margin-top: 1em;
  color: #f8f8f8;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screnn and (max-width: 1600px) {
    display: flex;
    flex-direction: row;
  }
`

export const CardC = styled(Card)`
  border-radius: 1em;
  width: 27em;
  height: auto;
  margin: 0 3em 0 2em;
  background-color: #f8f8f8;

  @media screen and (max-width: 1600px) {
    /* background-color: red; */
    margin: 0 1em 0 1em;
  }

  @media screen and (max-width: 768px) {
    margin: 1em 0 1em 0;
    width: 25em;
  }
`

export const CardCt = styled(CardContent)``

export const CardM = styled(CardMedia)``

export const CardT = styled(Typography)``

export const PlayerSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
`

export const Player = styled(ReactPlayer)`
  display: flex;
  width: auto;
  margin: 0 3em 2em 2em;

  @media screen and (max-width: 1600px) {
    margin: 1em 1em 1em 1em;
  }

  @media screen and (max-width: 768px) {
    max-width: 25em;
    max-height: 14em;
    margin: 1em 0 1em 0;
  }
`
