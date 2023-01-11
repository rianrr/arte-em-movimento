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
`

export const Input = styled.input`
  /* background-color: ${props => props.type == "submit" ? "red" : "blue"} */
  border: 0;
  margin-bottom: 2em;
  height: 3.5em;
  width: 35em;
  padding: .7em .7em .7em .7em;
  outline: none;
  border-radius: 5em;
  cursor: ${props => props.type = "submit" ? 'pointer' : 'text'}  /* arrumar isso */
`

export const TextArea = styled.textarea`
  resize: none;
  outline: none;
  border: 0;
  padding: 1em 1em 1em 1em;
  border-radius: 2.5em;
  margin-bottom: 2.5em;
  height: 20em;
`
