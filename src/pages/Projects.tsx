import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Heading, Section, Image, BigCard, BigCardWrapper, ContentHeading, ContentText } from "../styles/ProjectsStyles";

export function Projects() {
    return (
        <>
            <Navbar /> 

            <Heading>Nossos Projetos</Heading>

            <Section>
                <Image src="/images/14.jpg" />

                <BigCardWrapper>
                    <BigCard>
                        <ContentHeading>Corpo de Baile Arte em Movimento</ContentHeading>

                        <ContentText>
                            40 crianças e adolescentes do
                            Programa de Formação em dança, bailarinas de alto rendimento, que representam a cidade do
                            Guarujá em diversos festivais nacionais e internacionais, com mais de 300 premiações e já
                            receberam bolsas de estudos, convites e prêmios de festivais na Itália, Argentina, USA e Disney
                            World, o programa oferece capacitação e qualificação profissional de excelência na área da dança.
                        </ContentText>
                    </BigCard>
                </BigCardWrapper>
            </Section>

            <Section>
                <Image src="/images/8.jpg" />

                <BigCardWrapper>
                    <BigCard>
                        <ContentHeading>Programa de Qualificação em Artes (Governo do Estado de São Paulo)</ContentHeading>

                        <ContentText>
                            O corpo
                            de Baile Arte em Movimento selecionado por duas vezes( 2020 e 2022 ), para receber orientação e
                            qualificação profissional e artística na área da dança. Participa e prepara um espetáculo que será
                            apresentado em novembro/2022 como finalização da vivência e aprendizado. O Tema escolhido pelo
                            grupo foi a história e a representatividade feminina de Chiquinha Gonzaga.
                        </ContentText>
                    </BigCard>
                </BigCardWrapper>
            </Section>

            <Footer />
        </>
    )
}