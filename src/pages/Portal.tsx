import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Heading, Section, File } from "../styles/PortalStyles";

export function Portal() {
  return (
    <>
      <Navbar />

      <Heading>Portal da Transparência</Heading>

      <Section>
        <File href="/docs/17-02-2023-1951_Microsoft_Lens.pdf" target="_blank">
          Ata de Assembleia Geral Ordinária - 2023
        </File>
        <File href="/docs/Balanco_2022.pdf" target="_blank">
          Balanço Patrimonial - 2022
        </File>
        <File
          href="/docs/Ata_Assembleia_substituicao_1_conselheira_1.pdf"
          target="_blank"
        >
          Ata de Assembleia Extraordinária - 2022
        </File>
        <File
          href="/docs/Balanco_Patrimonial_ano_fiscal_2021.pdf"
          target="_blank"
        >
          Balanço Patrimonial - Ano Fiscal - 2021
        </File>
        <File
          href="/docs/Ata_de_Assembleia_Geral_Ordinaria_2022.pdf"
          target="_blank"
        >
          Ata de Asembleia Geral Ordinária - 2022
        </File>
        <File href="/docs/Ata_de_Reeleicao_da_Diretoria.pdf" target="_blank">
          Ata de Assembleia Geral Ordinária Reeleição da Diretoria - 2021
        </File>
        <File
          href="/docs/ESTATUTO_E_ATA_ANA_ZUCCHI_COPIA_CARTORIO.pdf"
          target="_blank"
        >
          Ata de Constituição Instituto Arte em Movimento 30/10/2017 Eleição da
          Diretoria - 2017 - 2021
        </File>
      </Section>

      <Footer />
    </>
  );
}
