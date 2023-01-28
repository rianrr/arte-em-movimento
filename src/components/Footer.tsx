import {
  Box,
  Container,
  Column,
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
        <FooterLink><FiMessageCircle /><span>+55 (13) 99788-3366</span></FooterLink>
        <FooterLink><FiMail /><span>anarosazz@hotmail.com</span></FooterLink>
      </Column>
      <Column>
        <Heading>Redes Sociais</Heading>
        <FooterLink href="https://www.facebook.con/ArteEmMovimentoAnaZucchi">
        <i className="fab fa-facebook-f">
          <span style={{ marginLeft: "10px" }}>
          <FiFacebook /> 
          </span>
        </i>
        </FooterLink>
        <FooterLink href="#">
        <i className="fab fa-instagram">
          <span style={{ marginLeft: "10px" }}>
          <FiInstagram />
          </span>
        </i>
        </FooterLink>
      </Column>
    </Container>
	</Box>
)
}

export default Footer;
