import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Heading, Section, File } from '../styles/PortalStyles'

export function Portal() {
  return (
    <>
      <Navbar />

      <Heading>Portal da Transparência</Heading>

      <Section>
        <File href="/docs/ESTATUTO E ATA ANA ZUCCHI - COPIA CARTÓRIO.pdf" target="_blank" download>Ata de Constituição Instituto Arte em Movimento 30/10/2017 Eleição da Diretoria 2017 - 2021</File>
        <File href="/docs/Ata de Reeleição da Diretoria.pdf" target="_blank" download>Ata de Assembleia Geral Ordinária Reeleição da Diretoria 2021</File>
        <File href="/docs/Ata Assembleia substtituição 1ª conselheira 1.pdf" target="_blank" download>Ata de Assembleia Extraordinária 2022</File>
        <File href="/docs/17-02-2023 1951 Microsoft Lens.pdf">Ata de Assembleia Geral Ordinária 2023</File>
      </Section>

      <Footer />
    </>
  )
}
