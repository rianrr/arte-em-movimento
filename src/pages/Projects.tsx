import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Heading, Section, Image, BigCard, BigCardWrapper, ContentHeading, ContentText } from "../styles/ProjectsStyles";

export function Projects() {
    return (
        <>
            <Navbar /> 

            <Heading>Nossos Projetos</Heading>

            <Section>
                <Image src="/images/9.jpg" />

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
                <Image src="/images/14.jpg" />

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

            <Section>
                <Image src="/images/12.jpg" />

                <BigCardWrapper>
                    <BigCard>
                        <ContentHeading>Curso Técnico em Dança Reconhecido pelo MEC (Parceria com NAE)</ContentHeading>

                        <ContentText>
                            Alunos Formandos no curso
                            profissionalizante de Ballet Clássico tem Bolsa de Estudos de 50% para a Formação Técnica pelo
                            NÚCLEO ARTE EDUCAÇÃO, com certificado reconhecido pelo MEC o aluno sai preparado para o
                            Mercado de trabalho, o Instituto oferece a estrutura física, grade de estágios presenciais e
                            profissionais habilitados para acompanhamento dos alunos durante o curso.
                        </ContentText>
                    </BigCard>
                </BigCardWrapper>
            </Section>

            <Section>
                <Image src="/images/8.jpg" />

                <BigCardWrapper>
                    <BigCard>
                        <ContentHeading>Projeto Fábrica de Sonhos - 2019/2020/2021/2022/2023 (em execução)</ContentHeading>

                        <ContentText>
                            Em
                            parceria com a Prefeitura Municipal de Guarujá através da secretaria Municipal de Cultura atende
                            cerca de quase 200 crianças e adolescentes de 7 a 17 anos, matriculados na rede pública de Ensino,
                            Programa de Formação em dança oferece aulas de Ballet Clássico, Jazz e dança contemporânea em
                            horário de contraturno escolar.
                        </ContentText>
                    </BigCard>
                </BigCardWrapper>
            </Section>

            <Section>
                <Image src="/images/13.jpg" />

                <BigCardWrapper>
                    <BigCard>
                        <ContentHeading>Projeto Fábrica de Sonhos - Oficinas Complementares - 2020/2021</ContentHeading>

                        <ContentText>
                            Em parceria com a Prefeitura Municipal de Guarujá através da
                            secretaria Municipal de Cultura ofereceu Cursos de Aerial Dance, Oficina de Flamenco, Oficina de
                            Sapateado, Oficina de Variação de Repertório, Oficina de Composição Coreográfica e
                            complementação de modalidades para o curso de Formação em Dança e profissionalização do
                            Corpo de Baile Arte em Movimento.
                        </ContentText>
                    </BigCard>
                </BigCardWrapper>
            </Section>

            <Section>
                <Image src="/images/7.jpg" />

                <BigCardWrapper>
                    <BigCard>
                        <ContentHeading>Projeto Movimentar - 2021/2022</ContentHeading>

                        <ContentText>
                            Em parceria com o
                            Conselho Municipal de Direito da criança e do adolescente atendeu em 2021/2022, atendeu 60
                            crianças e adolescentes de 7 a 17 anos, matriculados na rede pública de Ensino, aulas de incentivo a
                            leitura e escrita, língua inglesa e atendimentos de Arteterapia visando minimizar alguns transtornos
                            resultantes da pandemia de COVID 19.
                        </ContentText>
                    </BigCard>
                </BigCardWrapper>
            </Section>


            <Footer />
        </>
    )
}