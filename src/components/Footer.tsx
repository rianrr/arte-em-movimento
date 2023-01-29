import {
  Box,
  Container,
  Column,
  Social,
  FooterLink,
  Heading,
  Logo
} from "../styles/FooterStyle";

import { FiFacebook, FiInstagram, FiMessageCircle, FiMail }  from 'react-icons/fi'

const Footer = () => {
  return (
  <Box>
    <Logo src="/images/logo_instituto.png" />

    <Container>
      <Column>
        <Heading>Endereço</Heading>

        <FooterLink>Av. Oswaldo Cruz nº 621</FooterLink>
        <FooterLink>Sítio Paecara (Vicente de Carvalho)</FooterLink>
        <FooterLink>Guarujá, SP - Brasil</FooterLink>
        <FooterLink>CEP: 11460-101</FooterLink>
      </Column>
      <Column>
        <Heading>Contato</Heading>

        <FooterLink><FiMessageCircle /><span style={{ marginLeft: 7 }}>+55 (13) 99788-3366</span></FooterLink>
        <FooterLink><FiMail /><span style={{ marginLeft: 7 }}>anarosazz@hotmail.com</span></FooterLink>
      </Column>
      <Column>
        <Heading>Redes Sociais</Heading>

        <Social>
          <FooterLink href="https://www.facebook.con/ArteEmMovimentoAnaZucchi">
            <span>
              <FiFacebook /> 
            </span>
          </FooterLink>
          <FooterLink href="#">
            <span style={{ marginLeft: 10 }}>
              <FiInstagram />
            </span>
          </FooterLink>
        </Social>
      </Column>
    </Container>
	</Box>
)
}

export default Footer;
