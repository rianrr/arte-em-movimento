import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../styles/FooterStyle";

const Footer = () => {
return (
	<Box>
	<Container>
		{/* <Row> */}
		<Column>
			<Heading>Contato</Heading>
			<FooterLink><span>(13) 99788-3366</span></FooterLink>
			<FooterLink><span>anarosazz@hotmail.com</span></FooterLink>
		</Column>
		<Column>
			<Heading>Redes Sociais</Heading>
			<FooterLink href="https://www.facebook.con/ArteEmMovimentoAnaZucchi">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		{/* </Row> */}
	</Container>
	</Box>
)
}

export default Footer;
