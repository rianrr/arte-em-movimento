import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2em 2em 2em 2em;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h2`
  color: #f8f8f8;
  font-size: 3em;
  margin-bottom: 1em;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.7em;
  }
`

export const Input = styled.input`
  border: 0;
  margin-bottom: 2em;
  height: auto;
  width: 42em;
  padding: 1em 1em 1em 1em;
  outline: none;
  border-radius: 1em;

  @media screen and (max-width: 768px) {
    width: 30em;
  }
`

export const InputButton = styled.input`
  color: #f8f8f8;
  background-color: #daa5ee;
  font-weight: bold;
  font-size: 1em;
  border: 0;
  margin-bottom: 2em;
  height: 3.5em;
  width: 35em;
  padding: 1em 1em 1em 1em;
  outline: none;
  border-radius: 1em;
  cursor: pointer;
  /* letter-spacing: .1em; */

  &:hover {
    transition: all 0.3s ease;
    background-color: #ceabfc;
  }

  @media screen and (max-width: 768px) {
    width: 25em;
  }
`

export const TextArea = styled.textarea`
  resize: none;
  outline: none;
  border: 0;
  padding: 1em 1em 1em 1em;
  border-radius: 1em;
  margin-bottom: 2.5em;
  height: 20em;
  font-size: 0.9em;
`
