import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import {
    Section,
    Wrapper,
    Container,
    Heading,
    SecondHeading,
    ThirdHeading,
    FourthHeading,
    Strong,
    Span,
    Student,
    Box,
    MidBox,
    Observation,
} from '../styles/InternationalStyles'

export function International() {
    return (
        <>
            <Navbar />

            <Section>
                <Heading>Internacionalmente</Heading>
                <ThirdHeading>Somos Reconhecidos e Registrados no <Strong>Conselho Internacional de Dança, orgão da UNESCO</Strong></ThirdHeading>
            </Section>

            <Section>
                <SecondHeading>Bolsas de Estudo Internacionais</SecondHeading>

                <Wrapper>
                    <Container>
                        <MidBox>
                            <FourthHeading>Universidade de Artes da Carolina do Norte - Estados Unidos</FourthHeading>
                            <Span>2018</Span>

                            <Student>Leticia Vieira</Student>
                            <Student>Jessica Vieira</Student>
                        </MidBox>

                        <MidBox>
                            <FourthHeading>Summer Intensive Programa National Ballet Academy New York - Intercâmbio de 1 mês nos Estados Unidos</FourthHeading>
                            <Span>2022</Span>

                            <Student>29 bolsas de estudos</Student>
                        </MidBox>
                    </Container>

                    <Box>
                        <FourthHeading>Summer Intensive Programa National Ballet Academy Denver - Intercâmbio de 1 mês nos Estados Unidos</FourthHeading>

                        <Span>2017</Span>
                        <Student> Leticia Vieira</Student>
                        <Student>Raissa Carlota</Student>
                        <Student>Caroline Victoria</Student>
                        <Observation>Leticia Vieira recebeu bolsas de Estudos para o Programa Treeine com duração de 1 ano. ( Morou de 2018 a 2019 nos EUA)</Observation>

                        <Span>2018</Span>
                        <Student>20 bolsas de estudos</Student>
                        <Observation>Jessica Vieira recebeu bolsas de Estudos para o Programa Treeine com duração de 1 ano.</Observation>

                        <Span>2019</Span>
                        <Student>30 bolsas de estudos</Student>
                    </Box>
                </Wrapper>

                <Wrapper>
                    <Container>
                        <MidBox>
                            <FourthHeading>Oklahoma City Ballet</FourthHeading>

                            <Span>2019</Span>
                            <Student>1 bolsa de estudos</Student>
                        </MidBox>

                        <MidBox>
                            <FourthHeading>Brussel International Ballet - Bélgica</FourthHeading>

                            <Span>2020</Span>
                            <Student>3 bolsas de estudos</Student>
                        </MidBox>
                    </Container>

                    <Box>
                        <FourthHeading>Miami City Ballet</FourthHeading>

                        <Span>2018</Span>
                        <Student>6 bolsas de estudos</Student>

                        <Span>2019</Span>
                        <Student>2 bolsas de estudos</Student>

                        <Span>2020</Span>
                        <Student>2 bolsas de estudos</Student>
                    </Box>
                </Wrapper>
            </Section>

            <Footer />
        </>
    )
}