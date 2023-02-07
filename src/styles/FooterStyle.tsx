import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  padding: 80px 60px;
  background: #daa5ee;
  bottom: 0;
  width: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 70px 30px;
    justify-content: center;
    align-items: center;
  }
`

export const Container = styled.div`
	display: flex;
  /* flex-direction: column; */
	justify-content: flex-end;
	max-width: 1300px;
	margin: 0 auto;
	/* background: red; */

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;


  @media screen and (max-width: 500px) {
    margin-top: 2em;
  }
`

export const Social = styled.div`
  display: flex;
`

export const FooterLink = styled.a`
  color: #f8f8f8;
  margin-bottom: .8em;
  font-size: 18px;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #b851de;
    transition: 200ms ease-in;
  }
`

export const Heading = styled.p`
font-size: 24px;
color: #f8f8f8;
margin-bottom: 1em;
font-weight: bold;
`

export const Logo = styled.img`
  width: 14em;
  max-width: 100%;
  max-height: 14em;
  margin-left: 10em;

  @media screen and (max-width: 500px) {
    margin: 0 0 2em 0;
    margin-top: 2em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  margin: 7em 0 0 5em;
`

export const QRCode = styled.img`
  height: 6em;
`
