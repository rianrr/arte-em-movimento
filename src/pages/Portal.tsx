import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Heading, Section, File } from "../styles/PortalStyles";

export function Portal() {
  return (
    <>
      <Navbar />

      <Heading>Portal da Transparência</Heading>

      <Section>
        <File href="/docs/Ata_Assembleia_Geral_Ordinaria_2023" target="_blank">
          Ata de Assembleia Geral Ordinária - 2023
        </File>
        <File href="/docs/Balanco_Patrimonial_2022.pdf" target="_blank">
          Balanço Patrimonial - 2022
        </File>
        <File
          href="/docs/Ata_Assembleia_Extraordinaria_2022.pdf"
          target="_blank"
        >
          Ata de Assembleia Extraordinária - 2022
        </File>
        <File href="/docs/Balanco_Patrimonial_2021.pdf" target="_blank">
          Balanço Patrimonial - Ano Fiscal - 2021
        </File>
        <File
          href="/docs/Ata_Assembleia_Geral_Ordinaria_2022.pdf"
          target="_blank"
        >
          Ata de Asembleia Geral Ordinária - 2022
        </File>
        <File href="/docs/Ata_Reeleicao_Diretoria_2021.pdf" target="_blank">
          Ata de Assembleia Geral Ordinária Reeleição da Diretoria - 2021
        </File>
        <File href="/docs/Ata_Constituicao_Eleicao.pdf" target="_blank">
          Ata de Constituição Instituto Arte em Movimento 30/10/2017 Eleição da
          Diretoria - 2017 - 2021
        </File>
      </Section>

      <Footer />
    </>
  );
}
