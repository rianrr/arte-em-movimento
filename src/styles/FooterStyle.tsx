import styled from 'styled-components';

export const Box = styled.div`
display: flex;
padding: 80px 60px;
background: #daa5ee;
bottom: 0;
width: 100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`

export const Container = styled.div`
	display: flex;
  /* flex-direction: column; */
	justify-content: flex-end;
	max-width: 1300px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

export const FooterLink = styled.a`
color: #f8f8f8;
margin-bottom: .8em;
font-size: 18px;
text-decoration: none;

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
  max-width: 100%;
  max-height: 14em;
  margin-left: 10em;
`
