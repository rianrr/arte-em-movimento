import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import {
    Section,
    Wrapper,
    Heading,
    ThirdHeading,
    FourthHeading,
    Strong,
    Image,
    Box,
    Award,
} from '../styles/AwardsStyles'

export function Awards() {
    return (
        <>
            <Navbar />

            <Section>
                <Heading>Premiações</Heading>
                <ThirdHeading>O Arte em Movimento tem sem seus registros mais de <Strong>300 premiações</Strong> em Festivais Competitivos de Dança Nacionais e Internacionais .</ThirdHeading>
                
                <Wrapper>
                    <Image src='/images/7.jpg' />

                    <Box>
                        <FourthHeading>Entre os nossos títulos:</FourthHeading>

                        <Award>Melhor Grupo e Melhor Coreógrafa do Festival Petipá em São Paulo - 2022</Award>
                        <Award>Melhor Grupo Festival Santista de Dança - 2022</Award>
                        <Award>Bailarinas Revelação Festival Santista de Dança em 2017 (Jéssica e Letícia)</Award>
                    </Box>
                </Wrapper>
            </Section>

            <Footer />
        </>
    )
}