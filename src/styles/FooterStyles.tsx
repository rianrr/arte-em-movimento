import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  padding: 80px 60px;
  background: #daa5ee;
  bottom: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 70px 30px;
    justify-content: center;
    align-items: center;
  }
`

export const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	max-width: 1300px;
	margin: 0 auto;
	// background: red;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 3em;


  @media screen and (max-width: 768px) {
    margin-top: 2em;
  }
`

export const Social = styled.div`
  display: flex;
`

export const FooterLink = styled.a`
  color: #f8f8f8;
  margin-bottom: .8em;
  font-size: 1.1em;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #b851de;
    transition: 200ms ease-in;
  }
`

export const Heading = styled.p`
font-size: 1.5em;
color: #f8f8f8;
margin-bottom: 1em;
font-weight: bold;
`

export const Logo = styled.img`
  width: 12%;
  margin-left: 10%;

  @media screen and (max-width: 1600px) {
    margin: 0 1em 0 1em;
    width: 18%;
  }

  @media screen and (max-width: 768px) {
    margin: 2em 0 2em 0;
    width: 40%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  margin: 7em 0 0 5em;

  @media screen and (max-width: 768px) {
    margin: 3em 0 0 3em;
  }
`

export const QRCode = styled.img`
  height: 6em;
  margin-left: 5em;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`
